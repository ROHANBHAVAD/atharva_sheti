import React, { useState } from 'react';
import '../../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>We’re here to help you with your agricultural needs. Reach out anytime!</p>
        </div>

        <div className="contact-layout">
          {/* Left: Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Right: Info Boxes */}
          <div className="contact-info">
            <div className="info-box">
              <h3>📍 Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.123456789!2d73.9577274!3d16.7548035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1b1e77cd2582b%3A0xe84ba591418890e9!2sAtharv%20Krushi%20Seva%20Kendra%2C%20Patpanhala!5e0!3m2!1sen!2sin!4v1691234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
              <p>Karvir, Kolhapur, Maharashtra</p>
            </div>

            <div className="info-box">
              <h3>📞 Contact Details</h3>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Email:</strong> atharvsevakendra@gmail.com</p>
              <p><strong>Hours:</strong> Mon–Sat, 9 AM to 6 PM</p>
            </div>

            <div className="info-box">
              <h3>💬 What Farmers Say</h3>
              <blockquote>“Best fertilizer service in Kolhapur!”</blockquote>
              <blockquote>“Quick delivery and expert advice.”</blockquote>
            </div>

            <div className="info-box">
              <h3>🛠️ Quick Help Topics</h3>
              <ul>
                <li>Choosing the right fertilizer</li>
                <li>Delivery timelines</li>
                <li>Bulk order discounts</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>🌟 Why Choose Us?</h3>
              <ul>
                <li>Certified products</li>
                <li>Local support</li>
                <li>Trusted by 500+ farmers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
