import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Homepage from './pages/homepage/Homepage';
import ProductPage from './pages/product/Productpage';
import OrderPage from './pages/order/Orderpage'; // ✅ Add this
import ContactPage from './pages/contact/Contactpage';
import AboutPage from './pages/about/Aboutpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="order" element={<OrderPage />} /> {/* ✅ Add this */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
