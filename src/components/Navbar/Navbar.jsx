// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import productsData from "../../data/productsData";
import categoriesData from "../../data/categoriesData";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState("");

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const changeLanguage = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  const categories = useMemo(() => {
    return [...new Set(productsData.map(p => p.category).filter(Boolean).map(c => c.trim()).filter(c => c.length > 0))];
  }, []);

  const manufacturers = useMemo(() => {
    return [...new Set(productsData.map(p => p.distributor).filter(Boolean).map(m => m.trim()).filter(m => m.length > 0))];
  }, []);

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.append("query", searchTerm.trim());
    if (selectedCategory) params.append("category", selectedCategory);
    if (selectedManufacturer) params.append("manufacturer", selectedManufacturer);
    if (selectedSubCategory) params.append("subCategory", selectedSubCategory);
    if (selectedSubSubCategory) params.append("subSubCategory", selectedSubSubCategory);
    navigate(`/products?${params.toString()}`);
  }, [searchTerm, selectedCategory, selectedManufacturer, selectedSubCategory, selectedSubSubCategory, navigate]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  useEffect(() => {
    setSelectedSubCategory("");
    setSelectedSubSubCategory("");
  }, [selectedCategory]);

  const categoryObject = useMemo(
    () => categoriesData.find((cat) => cat.name === selectedCategory),
    [selectedCategory]
  );

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-top">
          <div className="navbar-wrapper">
            <div className="navbar-left">
              <Link to="/">
                <img src={logo} alt={t("navbar.home", "Home")} className="logo" />
              </Link>
            </div>

            <div className="navbar-center">
              <ul className="nav-links">
                <li><Link to="/">{t("navbar.home")}</Link></li>
                <li><Link to="/manufacturers">{t("navbar.manufacturers")}</Link></li>
                <li><Link to="/products">{t("navbar.products")}</Link></li>
                <li><Link to="/about">{t("navbar.aboutUs")}</Link></li>
                <li><Link to="/contact">{t("navbar.contactUs")}</Link></li>
              </ul>
            </div>

            <div className="navbar-right">
              <div className="language-switcher">
                <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "active" : ""}>EN</button>
                <span>|</span>
                <button onClick={() => changeLanguage("ar")} className={i18n.language === "ar" ? "active" : ""}>AR</button>
              </div>
              <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="navbar-mobile">
              <Link to="/">{t("navbar.home")}</Link>
              <Link to="/manufacturers">{t("navbar.manufacturers")}</Link>
              <Link to="/products">{t("navbar.products")}</Link>
              <Link to="/about">{t("navbar.aboutUs")}</Link>
              <Link to="/contact">{t("navbar.contactUs")}</Link>
            </div>
          )}
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder={t("search.placeholder", "Search products...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="filterSelect">
            <option value="">{t("search.allCategories", "All Categories")}</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>

          <select value={selectedManufacturer} onChange={(e) => setSelectedManufacturer(e.target.value)} className="filterSelect">
            <option value="">{t("search.allManufacturers", "All Manufacturers")}</option>
            {manufacturers.map((manu, idx) => (
              <option key={idx} value={manu}>{manu}</option>
            ))}
          </select>

          {selectedCategory && categoryObject?.subcategories && (
            <select value={selectedSubCategory} onChange={(e) => setSelectedSubCategory(e.target.value)} className="filterSelect">
              <option value="">All Subcategories</option>
              {categoryObject.subcategories.map((sub, idx) => (
                <option key={idx} value={typeof sub === 'object' ? sub.name : sub}>{typeof sub === 'object' ? sub.name : sub}</option>
              ))}
            </select>
          )}

          {selectedSubCategory && (() => {
            const subObj = categoryObject.subcategories.find(s => typeof s === 'object' && s.name === selectedSubCategory);
            if (subObj?.subsubcategories?.length > 0) {
              return (
                <select value={selectedSubSubCategory} onChange={(e) => setSelectedSubSubCategory(e.target.value)} className="filterSelect">
                  <option value="">All Sub-Subcategories</option>
                  {subObj.subsubcategories.map((ss, idx2) => (
                    <option key={idx2} value={ss}>{ss}</option>
                  ))}
                </select>
              );
            }
            return null;
          })()}

          <button onClick={handleSearch}>{t("search.button", "Search")}</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
