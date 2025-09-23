import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import productsData from "./productsData";
import ProductCard from "./ProductCard/ProductCard";
import "./ProductOfferings/ProductOfferings.css";  

const ProductCategoryDropdown = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = [...new Set(productsData.map((p) => p.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setFilteredProducts(
      productsData.filter(
        (p) => p.category === selectedCategory && p.subcategory === subcategory
      )
    );
  };

  return (
    <div className="dropdown-container">
      {/* ✅ Category Dropdown */}
      <select className="dropdown" onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">{t("productOfferings.selectCategory")}</option>
        {categories.map((category, idx) => (
          <option key={idx} value={category}>
            {t(`productOfferings.categories.${category}`)}
          </option>
        ))}
      </select>

      {/* ✅ Subcategory Dropdown with Proper Translations */}
      {selectedCategory && (
        <select className="dropdown" onChange={(e) => handleSubcategoryChange(e.target.value)}>
          <option value="">{t("productOfferings.selectSubcategory")}</option>
          {[...new Set(productsData.filter(p => p.category === selectedCategory).map(p => p.subcategory))].map((subcategory, idx) => (
            <option key={idx} value={subcategory}>{t(`productOfferings.categories.${subcategory}`)}</option>
          ))}
        </select>
      )}

      {/* ✅ Product Cards */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>{t("productOfferings.noProducts")}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryDropdown;
