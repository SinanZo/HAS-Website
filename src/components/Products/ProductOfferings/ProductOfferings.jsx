import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ProductOfferings.css";

// ✅ Product categories data
const productCategories = [
  { icon: "fas fa-hard-hat", name: "safety", desc: "safetyDesc", link: "safety" },
  { icon: "fas fa-vials", name: "waterTesting", desc: "waterTestingDesc", link: "waterTesting" },
  { icon: "fas fa-industry", name: "mining", desc: "miningDesc", link: "mining" },
  { icon: "fas fa-bolt", name: "electrical", desc: "electricalDesc", link: "electrical" },
  { icon: "fas fa-head-side-mask", name: "respiratory", desc: "respiratoryDesc", link: "respiratory" },
  { icon: "fas fa-barcode", name: "labels", desc: "labelsDesc", link: "labels" },
  { icon: "fas fa-lock", name: "lockout", desc: "lockoutDesc", link: "lockout" },
  { icon: "fas fa-fire-extinguisher", name: "fire", desc: "fireDesc", link: "fire" },
];

// ✅ Individual category item component
const OfferingItem = ({ icon, name, desc, link, t }) => (
  <Link to={`/products?category=${link}`} className="offering-item" aria-label={t(`productOfferings.categories.${name}`)}>
    <i className={icon} aria-hidden="true"></i>
    <h3>{t(`productOfferings.categories.${name}`, name)}</h3>
<p>{t(`productOfferings.categories.${desc}`, desc)}</p>
  </Link>
);

const ProductOfferings = () => {
  const { t } = useTranslation();

  return (
    <section id="product-offerings" className="product-offerings" aria-labelledby="product-offerings-heading">
      <h2 id="product-offerings-heading" className="fade-in">{t("productOfferings.title")}</h2>
      <p className="section-description">{t("productOfferings.description")}</p>

      {/* 🔹 Offerings Grid */}
      <div className="offerings-grid">
        {productCategories.map((category, index) => (
          <OfferingItem key={index} {...category} t={t} />
        ))}
      </div>
    </section>
  );
};

export default ProductOfferings;
