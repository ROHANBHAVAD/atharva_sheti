import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-wrapper">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
