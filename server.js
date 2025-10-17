import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Verify email configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP connection failed:', error);
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

// ✅ POST: Receive order and notify shop owner
app.post('/api/orders', async (req, res) => {
  const { customer_name, phone, product_name, quantity, address } = req.body;

  // Manual product pricing
  const productPrices = {
    'Organic Compost': 250,
    'Urea Fertilizer': 180,
    'NPK 20-20-20': 320,
    'Soil Conditioner': 200
  };

  const price = productPrices[product_name];
  if (!price) {
    return res.status(400).json({ error: 'Invalid product name' });
  }

  const total_price = price * quantity;

  const mailOptions = {
    from: `"Order Notification" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: '🛒 New Order Received',
    text: `
New order received from Atharv Sheti Seva Kendra website:

👤 Name: ${customer_name}
📞 Phone: ${phone}
🧪 Product: ${product_name}
🔢 Quantity: ${quantity}
💰 Total Price: ₹${total_price}
📍 Address (for contact only): ${address}

🚫 Note: Home delivery is not available. Please prepare the order for pickup.
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Order email sent to shop owner');
    res.json({ message: 'Order placed successfully!' });
  } catch (error) {
    console.error('❌ Failed to send order email:', error);
    res.status(500).json({ error: 'Failed to notify shop owner' });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
