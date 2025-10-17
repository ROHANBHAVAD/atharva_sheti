import React from 'react';
import '../../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Atharv Sheti Seva Kendra</h1>
        <p>Empowering farmers with trusted products, expert guidance, and a commitment to sustainable agriculture.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe that every farmer deserves access to high-quality fertilizers, reliable service, and practical knowledge.
          Our mission is to support agricultural communities across Maharashtra with products that improve soil health, crop yield, and long-term sustainability.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We deliver what we promise, with honesty and transparency.</li>
          <li><strong>Innovation:</strong> We embrace new techniques and products that benefit farmers.</li>
          <li><strong>Community:</strong> We are rooted in local farming communities and grow with them.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://img.icons8.com/ios-filled/100/user-male-circle.png" alt="Founder" />
            <h3>Mr. Vishvas Teli</h3>
            <p>Founder & Agronomist</p>
          </div>
          <div className="team-card">
            <img src="https://img.icons8.com/ios-filled/100/user-female-circle.png" alt="Support" />
            <h3>Mr. Atharv Teli </h3>
            <p>Customer Support Lead</p>
          </div>
          <div className="team-card">
            <img src="https://img.icons8.com/ios-filled/100/user-group-man-man.png" alt="Field Team" />
            <h3>Field Experts</h3>
            <p>On-ground agricultural advisors</p>
          </div>
        </div>
      </section>

      <section className="about-impact">
        <h2>Our Impact</h2>
        <p>
          Entire Patpanhala region entire surrounding villages are our customers .We are always Helpful to small land farmers.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
