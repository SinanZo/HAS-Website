import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import productsData from "../data/productsData";
import {
  encodeFilters,
  decodeFilters,
  applyFilters,
  sortProducts,
  getUniqueCategories,
  getUniqueManufacturers,
  getPriceRange,
  getFilterLabel
} from "../utils/filterUtils";
import { getPageSeoData } from "../utils/seoUtils";
import "../styles/Products.css";

const Products = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // State management
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [sortBy, setSortBy] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [manufacturerFilter, setManufacturerFilter] = useState("");

  // Derived data
  const categories = useMemo(() => getUniqueCategories(productsData), []);
  const manufacturers = useMemo(() => getUniqueManufacturers(productsData), []);
  const priceRange = useMemo(() => getPriceRange(productsData), []);

  // Initialize filters from URL on mount and language change
  useEffect(() => {
    const filterParam = searchParams.get("f");
    const categoryParam = searchParams.get("category");
    const manufacturerParam = searchParams.get("manufacturer");
    const searchParam = searchParams.get("query");

    if (filterParam) {
      try {
        setActiveFilters(decodeFilters(filterParam));
      } catch (e) {
        console.error("Error decoding filters:", e);
        setActiveFilters(new Set());
      }
    }

    if (categoryParam) setCategoryFilter(categoryParam);
    if (manufacturerParam) setManufacturerFilter(manufacturerParam);
    if (searchParam) setSearchTerm(searchParam);
  }, [searchParams, i18n.language]); // Re-initialize on language change

  // Apply filters and sorting
  const filteredAndSorted = useMemo(() => {
    let result = [...productsData];

    // Apply search term
    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerSearch) ||
          product.description.toLowerCase().includes(lowerSearch) ||
          product.category.toLowerCase().includes(lowerSearch)
      );
    }

    // Apply category filter
    if (categoryFilter) {
      result = result.filter((product) => product.category === categoryFilter);
    }

    // Apply manufacturer filter
    if (manufacturerFilter) {
      result = result.filter((product) => product.distributor === manufacturerFilter);
    }

    // Apply active filter chips
    result = applyFilters(result, activeFilters);

    // Apply sorting
    result = sortProducts(result, sortBy);

    return result;
  }, [activeFilters, sortBy, searchTerm, categoryFilter, manufacturerFilter]);

  // Handle filter chip toggle
  const toggleFilter = useCallback(
    (filterKey) => {
      setActiveFilters((prev) => {
        const newFilters = new Set(prev);
        if (newFilters.has(filterKey)) {
          newFilters.delete(filterKey);
        } else {
          newFilters.add(filterKey);
        }

        // Update URL
        const params = new URLSearchParams();
        if (newFilters.size > 0) {
          params.set("f", encodeFilters(newFilters));
        }
        if (categoryFilter) params.set("category", categoryFilter);
        if (manufacturerFilter) params.set("manufacturer", manufacturerFilter);
        if (searchTerm.trim()) params.set("query", searchTerm.trim());

        setSearchParams(params);
        return newFilters;
      });
    },
    [categoryFilter, manufacturerFilter, searchTerm, setSearchParams]
  );

  // Handle search
  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const params = new URLSearchParams();

      if (searchTerm.trim()) params.set("query", searchTerm.trim());
      if (activeFilters.size > 0) params.set("f", encodeFilters(activeFilters));
      if (categoryFilter) params.set("category", categoryFilter);
      if (manufacturerFilter) params.set("manufacturer", manufacturerFilter);

      setSearchParams(params);
    },
    [searchTerm, activeFilters, categoryFilter, manufacturerFilter, setSearchParams]
  );

  // SEO data
  const seoData = getPageSeoData("products", { count: filteredAndSorted.length });

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`${window.location.origin}/products`} />
        {Object.entries(seoData.openGraph || {}).map(([key, value]) => (
          <meta key={key} property={`og:${key}`} content={value} />
        ))}
      </Helmet>

      <main className="products-page" role="main">
        <div className="products-container">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar" aria-label="Product Filters">
            <h2>{t("filters.title", "Filters")}</h2>

            {/* Search */}
            <form onSubmit={handleSearch} className="filter-group">
              <label htmlFor="search-input">{t("filters.search", "Search")}</label>
              <input
                id="search-input"
                type="text"
                placeholder={t("filters.searchPlaceholder", "Search products...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="filter-input"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                {t("filters.search", "Search")}
              </button>
            </form>

            {/* Category Filter */}
            <div className="filter-group">
              <label htmlFor="category-select">{t("filters.category", "Category")}</label>
              <select
                id="category-select"
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  const params = new URLSearchParams();
                  if (e.target.value) params.set("category", e.target.value);
                  if (activeFilters.size > 0) params.set("f", encodeFilters(activeFilters));
                  if (searchTerm.trim()) params.set("query", searchTerm.trim());
                  setSearchParams(params);
                }}
                className="filter-select"
              >
                <option value="">{t("filters.allCategories", "All Categories")}</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Manufacturer Filter */}
            <div className="filter-group">
              <label htmlFor="manufacturer-select">{t("filters.manufacturer", "Manufacturer")}</label>
              <select
                id="manufacturer-select"
                value={manufacturerFilter}
                onChange={(e) => {
                  setManufacturerFilter(e.target.value);
                  const params = new URLSearchParams();
                  if (e.target.value) params.set("manufacturer", e.target.value);
                  if (activeFilters.size > 0) params.set("f", encodeFilters(activeFilters));
                  if (categoryFilter) params.set("category", categoryFilter);
                  if (searchTerm.trim()) params.set("query", searchTerm.trim());
                  setSearchParams(params);
                }}
                className="filter-select"
              >
                <option value="">{t("filters.allManufacturers", "All Manufacturers")}</option>
                {manufacturers.map((mfr) => (
                  <option key={mfr} value={mfr}>
                    {mfr}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Info */}
            <div className="filter-group">
              <h4>{t("filters.priceRange", "Price Range")}</h4>
              <p className="price-info">
                {t("filters.from", "From")}: {priceRange.min} JD - {t("filters.to", "To")}: {priceRange.max} JD
              </p>
            </div>

            {/* Active Filters Chips */}
            {activeFilters.size > 0 && (
              <div className="filter-group">
                <h4>{t("filters.active", "Active Filters")}</h4>
                <div className="filter-chips">
                  {Array.from(activeFilters).map((filterKey) => (
                    <button
                      key={filterKey}
                      className="filter-chip active"
                      onClick={() => toggleFilter(filterKey)}
                      aria-pressed="true"
                      title={t("filters.removeFilter", "Remove filter")}
                    >
                      {getFilterLabel(filterKey, t)}
                      <span className="chip-close">×</span>
                    </button>
                  ))}
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setActiveFilters(new Set());
                    setSearchParams(new URLSearchParams());
                  }}
                >
                  {t("filters.clearAll", "Clear All")}
                </button>
              </div>
            )}
          </aside>

          {/* Main Content */}
          <section className="products-main">
            {/* Header with sorting */}
            <div className="products-header">
              <div className="results-info">
                <h1>{t("products.title", "Products")}</h1>
                <p className="results-count">
                  {t("products.showingCount", "Showing")} {filteredAndSorted.length}{" "}
                  {t("products.results", "results")}
                </p>
              </div>

              <div className="sort-controls">
                <label htmlFor="sort-select">{t("filters.sortBy", "Sort By")}</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="newest">{t("filters.newest", "Newest")}</option>
                  <option value="priceLow">{t("filters.priceLow", "Price: Low to High")}</option>
                  <option value="priceHigh">{t("filters.priceHigh", "Price: High to Low")}</option>
                  <option value="nameAZ">{t("filters.nameAZ", "Name: A to Z")}</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredAndSorted.length > 0 ? (
              <div className="products-grid">
                {filteredAndSorted.map((product) => (
                  <div key={product.id} className="product-card" role="article">
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="product-content">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-category">{product.category}</p>
                      <p className="product-distributor">{product.distributor}</p>
                      <p className="product-description">{product.brief}</p>
                    </div>
                    <div className="product-footer">
                      <a
                        href={`/product/${product.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        {t("products.viewDetails", "View Details")}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state" role="status">
                <p>{t("products.noResults", "No products found")}</p>
                <p className="empty-state-hint">
                  {t("products.tryAdjustingFilters", "Try adjusting your filters or search term")}
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Products;
