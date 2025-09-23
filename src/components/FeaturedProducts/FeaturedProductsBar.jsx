// src/components/FeaturedProductsBar.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import "./FeaturedProductsBar.css";

const FeaturedProductsBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Gather one featured product per category (modify criteria as needed)
  const featuredByCategory = {};
  productsData.forEach((product) => {
    if (!featuredByCategory[product.category]) {
      featuredByCategory[product.category] = product;
    }
  });
  const featuredProducts = Object.values(featuredByCategory);

  // "Order Now" -> opens WhatsApp
  const handleOrderNow = (product) => {
    const message = encodeURIComponent(`I'm interested in product: ${product.name}`);
    window.open(`https://wa.me/962795428029?text=${message}`, "_blank");
  };

  // "View All Products" -> navigate to /products
  const handleViewAll = () => {
    navigate("/products");
  };

  return (
    <section className="featured-products-bar">
      <h2 className="bar-title">{t("featuredProducts.title", "Featured Products")}</h2>
      <div className="bar-scroller">
        {featuredProducts.length > 0 ? (
          <>
            {featuredProducts.map((product) => (
              <div className="bar-card" key={product.id}>
                <div className="bar-imageContainer">
                  <img src={product.image} alt={product.name} className="bar-image" />
                </div>
                <h3 className="bar-name">{product.name}</h3>
                {product.brief && <p className="bar-brief">{product.brief}</p>}
                <button className="bar-order-btn" onClick={() => handleOrderNow(product)}>
                  {t("featuredProducts.orderNow", "Order Now")}
                </button>
              </div>
            ))}
            <div className="bar-card view-all-card">
              <button className="view-all-btn" onClick={handleViewAll}>
                {t("featuredProducts.viewAll", "View All Products")}
              </button>
            </div>
          </>
        ) : (
          <p className="no-featured-msg">{t("featuredProducts.noFeatured", "No featured products found.")}</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProductsBar;
