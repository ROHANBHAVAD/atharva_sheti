import React from 'react';
import { useNavigate } from 'react-router-dom';


const products = [
  {
    name: 'Organic Compost',
    image: 'https://img.icons8.com/ios-filled/100/compost.png',
    price: '₹000',
    description: 'Natural compost for healthy soil and sustainable farming.',
    benefits: ['Improves soil fertility', 'Eco-friendly', 'Boosts microbial activity'],
  },
  {
    name: 'Urea Fertilizer',
    image: 'https://img.icons8.com/ios-filled/100/fertilizer.png',
    price: '₹000',
    description: 'High-nitrogen fertilizer for rapid crop growth.',
    benefits: ['Promotes leaf growth', 'Quick absorption', 'Cost-effective'],
  },
  {
    name: 'NPK 20-20-20',
    image: 'https://img.icons8.com/ios-filled/100/plant-under-sun.png',
    price: '₹000',
    description: 'Balanced nutrients for all types of crops.',
    benefits: ['Complete nutrition', 'Improves yield', 'Versatile use'],
  },
  {
    name: 'Soil Conditioner',
    image: 'https://img.icons8.com/ios-filled/100/soil.png',
    price: '₹00',
    description: 'Improves soil structure and water retention.',
    benefits: ['Enhances root development', 'Reduces erosion', 'Improves moisture'],
  },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (productName) => {
    navigate('/order', { state: { selectedProduct: productName } });
  };

  return (
    <div className="product-page">
      <section className="product-hero">
        <h1>Fertilizer Products</h1>
        <p>
          Explore our range of high-quality fertilizers designed to boost crop yield and soil health.
        </p>
      </section>

      <div className="product-layout">
        <section className="product-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="description">{item.description}</p>
              <ul className="benefits">
                {item.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <button className="buy-button" onClick={() => handleBuyNow(item.name)}>
                Buy Now
              </button>
            </div>
          ))}
        </section>

        <aside className="product-sidebar">
          <h3>Quick Filters</h3>
          <ul>
            <li><button>Organic</button></li>
            <li><button>Chemical</button></li>
            <li><button>Under ₹300</button></li>
            <li><button>Best Sellers</button></li>
          </ul>

          <div className="product-stats">
            <h4>Store Stats</h4>
            <p>Total Products: {products.length}</p>
            <p>Top Seller: NPK 20-20-20</p>
          </div>

          <div className="product-help">
            <h4>Need Help?</h4>
            <p>Call us at +91-9876543210 or visit the Contact page for expert advice.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductPage;
