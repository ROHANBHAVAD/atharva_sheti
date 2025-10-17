import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Atharv Krushi Seva Kendra</h1>
          <p>Your trusted partner in sustainable agriculture and fertilizer solutions.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/products')}>Explore Products</button>
            <button onClick={() => navigate('/order')}>Place an Order</button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We aim to empower farmers with high-quality fertilizers, expert guidance, and reliable service.
          Our goal is to promote sustainable farming and improve crop yields across Maharashtra.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-grid">
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/plant-under-sun.png" alt="Organic Fertilizers" />
            <h3>Organic Fertilizers</h3>
            <p>Eco-friendly solutions for long-term soil health and productivity.</p>
          </div>
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/fertilizer.png" alt="Chemical Fertilizers" />
            <h3>Chemical Fertilizers</h3>
            <p>High-performance fertilizers for rapid crop growth and yield.</p>
          </div>
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/tractor.png" alt="Expert Advice" />
            <h3>Expert Advice</h3>
            <p>Personalized guidance from experienced agronomists and field experts.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Grow Better?</h2>
        <p>Explore our products or reach out for personalized recommendations.</p>
        <button onClick={() => navigate('/contact')}>Contact Us</button>
      </section>
    </div>
  );
};

export default Homepage;
