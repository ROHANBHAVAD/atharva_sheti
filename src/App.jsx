import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Homepage from './pages/homepage/Homepage';
import ProductPage from './pages/product/ProductPage';
import OrderPage from './pages/order/OrderPage'; // ✅ Add this
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';

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
