import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import "./FeaturedProductsCarousel.css";

const FeaturedProductsCarousel = () => {
  const navigate = useNavigate();

  // Gather one product per category
  const featuredByCategory = {};
  productsData.forEach((product) => {
    if (!featuredByCategory[product.category]) {
      featuredByCategory[product.category] = product;
    }
  });
  const featuredProducts = Object.values(featuredByCategory);

  // Track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 4 seconds if more than one slide exists
  useEffect(() => {
    if (featuredProducts.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [featuredProducts.length]);

  // "Order Now" opens WhatsApp with a pre-filled message
  const handleOrderNow = (product) => {
    const message = encodeURIComponent(`I'm interested in product: ${product.name}`);
    window.open(`https://wa.me/962795428029?text=${message}`, "_blank");
  };

  // "View All Products" navigates to the Products page
  const handleViewAll = () => {
    navigate("/products");
  };

  return (
    <section className="featured-carousel">
      <h2 className="carousel-title">Featured Products</h2>
      {featuredProducts.length > 0 ? (
        <>
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${featuredProducts.length * 100}%`
              }}
            >
              {featuredProducts.map((product) => (
                <div className="carousel-slide" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="slide-image"
                  />
                  <div className="slide-content">
                    <h3 className="slide-name">{product.name}</h3>
                    {product.brief && (
                      <p className="slide-brief">{product.brief}</p>
                    )}
                    <button
                      className="slide-order"
                      onClick={() => handleOrderNow(product)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="view-all-btn" onClick={handleViewAll}>
            View All Products
          </button>
        </>
      ) : (
        <p className="no-featured">No featured products found.</p>
      )}
    </section>
  );
};

export default FeaturedProductsCarousel;
