import React from 'react';
import { Outlet } from 'react-router-dom';



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
