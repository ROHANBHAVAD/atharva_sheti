import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo"></div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Order</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
