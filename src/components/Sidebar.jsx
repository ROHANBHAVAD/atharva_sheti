import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2 className="logo">Atharv Krushi</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/about">About</Link></li>
        
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
