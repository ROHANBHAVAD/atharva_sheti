import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/OrderPage.css';

const productList = [
  {
    name: 'Organic Compost',
    price: 250,
    description: 'Natural compost for healthy soil and sustainable farming.'
  },
  {
    name: 'Urea Fertilizer',
    price: 180,
    description: 'High-nitrogen fertilizer for rapid crop growth.'
  },
  {
    name: 'NPK 20-20-20',
    price: 320,
    description: 'Balanced nutrients for all types of crops.'
  },
  {
    name: 'Soil Conditioner',
    price: 200,
    description: 'Improves soil structure and water retention.'
  }
];

const OrderPage = () => {
  const location = useLocation();
  const selectedProductName = location.state?.selectedProduct || '';

  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    product_name: selectedProductName,
    quantity: 1,
    address: '',
    price: 0
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Update price when product or quantity changes
  useEffect(() => {
    const product = productList.find(p => p.name === formData.product_name);
    if (product) {
      setFormData(prev => ({
        ...prev,
        price: product.price * prev.quantity
      }));
    }
  }, [formData.product_name, formData.quantity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      customer_name: formData.customer_name,
      phone: formData.phone,
      product_name: formData.product_name,
      quantity: formData.quantity,
      address: formData.address
    };

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMessage('✅ Your order has been placed successfully!');
        setFormData({
          customer_name: '',
          phone: '',
          product_name: '',
          quantity: 1,
          address: '',
          price: 0
        });
      } else {
        setStatusMessage('❌ Order failed. Please try again.');
      }
    } catch (err) {
      setStatusMessage('❌ Server error. Please try again later.');
    }
  };

  const selectedProduct = productList.find(p => p.name === formData.product_name);

  return (
    <div className="order-page">
      <section className="order-hero">
        <h1>Place Your Order</h1>
        <p>Order fertilizers and agricultural products directly from Atharv Sheti Seva Kendra.</p>
      </section>

      <div className="order-layout">
        {/* Left: Order Form */}
        <div className="order-form">
          <h2>Order Form</h2>

          <div className="pickup-notice">
            🚫 <strong>Note:</strong> We do not offer home delivery. All orders must be picked up from our store in Karvir, Kolhapur.
          </div>

          {selectedProduct && (
            <div className="product-preview">
              <h3>Selected Product</h3>
              <p><strong>{selectedProduct.name}</strong></p>
              <p>Price per unit: ₹{selectedProduct.price}</p>
              <p>{selectedProduct.description}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <small>Enter your full name as it appears on ID.</small>

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
            />
            <small>Include your area code (e.g., +91).</small>

            <label>Product</label>
            <select
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
            >
              <option value="">Select a product</option>
              {productList.map((p) => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>

            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
            />
            <small>Minimum order: 1 unit</small>

            <label>Your Address (for contact only)</label>
            <textarea
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              placeholder="Village, Taluka, District, Pin Code"
              required
            />

            <p><strong>Total Price:</strong> ₹{formData.price}</p>
            <p className="delivery-note">📦 We Ready your order and call back you as early as possible.</p>

            <button type="submit">Submit Order</button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>

        {/* Right: Sidebar Content */}
        <div className="order-sidebar">
          <div className="sidebar-column">
            <div className="order-tips">
              <h3>Ordering Tips</h3>
              <ul>
                <li>Check product availability before ordering</li>
                <li>Bulk orders may qualify for discounts</li>
                <li>Ensure your contact address is complete</li>
              </ul>
            </div>

            <div className="order-faq">
              <h3>FAQs</h3>
              <ul>
                <li>How long does pickup take?</li>
                <li>Can I cancel or modify my order?</li>
                <li>Do you offer COD?</li>
              </ul>
            </div>
          </div>

          <div className="sidebar-column">
            <div className="order-highlights">
              <h3>Why Order With Us?</h3>
              <ul>
                <li>Fast service across Maharashtra</li>
                <li>Trusted by 500+ farmers</li>
                <li>Certified and safe products</li>
              </ul>
            </div>

            <div className="order-help">
              <h3>Need Help?</h3>
              <p>Call us at +91-9876543210 or visit the Contact page for assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
