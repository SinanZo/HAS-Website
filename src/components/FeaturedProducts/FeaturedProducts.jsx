import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import "./FeaturedProducts.css";
import RequestQuoteModal from "../Shared/RequestQuoteModal";

const FeaturedProducts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Build a featured products object: one (first) product per category
  const featuredByCategory = {};
  productsData.forEach((product) => {
    if (!featuredByCategory[product.category]) {
      featuredByCategory[product.category] = product;
    }
  });
  const featuredProducts = Object.values(featuredByCategory);
  const totalSlides = featuredProducts.length;

  // Carousel slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  // Click handlers
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleOrderNow = (productName) => {
    const message = encodeURIComponent(`I'm interested in ${productName}`);
    window.open(`https://wa.me/962795428029?text=${message}`, "_blank");
  };

  const handleViewAll = () => {
    navigate("/products");
  };

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const openQuote = (product) => {
    setQuoteProduct(product);
    setQuoteOpen(true);
  };

  const closeQuote = () => {
    setQuoteOpen(false);
    setQuoteProduct(null);
  };

  return (
    <section className="featured-products-section">
      <h2 className="featured-title">
        {t("featuredProducts.seoTitle", t("featuredProducts.title", "Featured Products"))}
      </h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="featured-card">
              <div
                className="featured-image-wrapper"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="featured-image"
                />
                <div
                  className="overlay"
                  onClick={() => handleProductClick(product.id)}
                >
                  <span className="view-details">
                    {t("featuredProducts.viewDetails", "View Details")}
                  </span>
                </div>
              </div>
              <div className="featured-info">
                <h3 className="featured-name">{product.name}</h3>
                {product.brief && (
                  <p className="featured-brief">{product.brief}</p>
                )}
                {/* Price (if available) */}
                {product.price !== undefined && (
                  <div className="featured-price">${product.price}</div>
                )}
                {/* Datasheet link (if available) */}
                {product.datasheet && (
                  <div className="featured-datasheet">
                    <a href={product.datasheet} target="_blank" rel="noopener noreferrer">
                      View Datasheet
                    </a>
                  </div>
                )}
                <div className="featured-actions">
                  <button
                    className="orderButton"
                    onClick={() => handleOrderNow(product.name)}
                  >
                    {t("featuredProducts.orderNow", "Order Now")}
                  </button>
                  <button className="quoteButton" onClick={() => openQuote(product)}>
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
          }
          className="prevButton"
        >
          &#10094;
        </button>
        <div className="indicators">
          {featuredProducts.map((_, idx) => (
            <span
              key={idx}
              className={`indicator ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          className="nextButton"
        >
          &#10095;
        </button>
      </div>
      <button className="view-all-button" onClick={handleViewAll}>
        {t("featuredProducts.viewAll", "View All Products")}
      </button>
      <RequestQuoteModal open={quoteOpen} onClose={closeQuote} product={quoteProduct} />
    </section>
  );
};

export default FeaturedProducts;
