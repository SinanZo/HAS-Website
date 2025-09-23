import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./CategoryGrid.css";

// ✅ Define product categories with FontAwesome icons
const categories = [
  { key: "safety", icon: "fas fa-hard-hat" },
  { key: "waterTesting", icon: "fas fa-vials" },
  { key: "mining", icon: "fas fa-industry" },
  { key: "electrical", icon: "fas fa-bolt" },
  { key: "respiratory", icon: "fas fa-head-side-mask" },
  { key: "labels", icon: "fas fa-barcode" },
  { key: "lockout", icon: "fas fa-lock" },
  { key: "fire", icon: "fas fa-fire-extinguisher" },
];

const CategoryGrid = () => {
  const { t } = useTranslation();

  return (
    <section className="category-grid">
      <h2>{t("categories.title", "Explore Our Product Categories")}</h2>
      <p className="section-description">
        {t("categories.description", "Browse through our specialized industrial and safety categories.")}
      </p>

      <div className="grid-container">
        {categories.map(({ key, icon }) => (
          <Link to={`/products?category=${key}`} key={key} className="grid-item">
            <i className={icon}></i>
            <h3>{t(`categories.${key}`, key)}</h3>
            <p>{t(`categories.${key}Desc`, "Discover our solutions.")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
