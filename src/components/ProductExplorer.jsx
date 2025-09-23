import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import manufacturersData from "./Manufacturers/manufacturersData"; // ✅ Organized Manufacturer Data
import ProductCard from "./ProductCard/ProductCard"; // ✅ Product Card
import "./ProductExplorer.css"; // ✅ Styling

const ProductExplorer = () => {
  const { t } = useTranslation();
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // ✅ Function: Handle Manufacturer Selection
  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  // ✅ Function: Handle Category Selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  // ✅ Function: Handle Subcategory Selection
  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <section id="product-explorer" className="product-explorer">
      <h2 className="section-title">{t("products.explore")}</h2>

      {/* ✅ Manufacturer Selection */}
      <div className="manufacturer-list">
        {manufacturersData.map((manufacturer, index) => (
          <button
            key={index}
            className={`manufacturer-btn ${selectedManufacturer === manufacturer ? "active" : ""}`}
            onClick={() => handleManufacturerSelect(manufacturer)}
          >
            <img src={manufacturer.logo} alt={manufacturer.name} />
            <span>{manufacturer.name}</span>
          </button>
        ))}
      </div>

      {/* ✅ Category Selection */}
      {selectedManufacturer && (
        <div className="category-list">
          {Object.keys(selectedManufacturer.categories).map((category, index) => (
            <button
              key={index}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategorySelect(category)}
            >
              {t(`categories.${category}`, category)}
            </button>
          ))}
        </div>
      )}

      {/* ✅ Subcategory Selection */}
      {selectedCategory && (
        <div className="subcategory-list">
          {Object.keys(selectedManufacturer.categories[selectedCategory]).map((subcategory, index) => (
            <button
              key={index}
              className={`subcategory-btn ${selectedSubcategory === subcategory ? "active" : ""}`}
              onClick={() => handleSubcategorySelect(subcategory)}
            >
              {t(`subcategories.${subcategory}`, subcategory)}
            </button>
          ))}
        </div>
      )}

      {/* ✅ Products Grid */}
      {selectedSubcategory && (
        <div className="product-grid">
          {selectedManufacturer.categories[selectedCategory][selectedSubcategory].map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductExplorer;
