// src/components/Products/Products.jsx

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productsData from "../../data/productsData";
import "./Products.css";

const Products = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Search/filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  
  // We do not show color/size filters in the UI anymore,
  // but we still parse them from the URL if they exist (optional).
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const [filteredProducts, setFilteredProducts] = useState([]);

  // We'll store the currently selected color for each product card
  // so the card image changes if the user hovers/clicks a color swatch.
  // Key = productId, value = colorName or "" if default.
  const [cardColors, setCardColors] = useState({});

  // Read query parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchTerm(params.get("query") || "");
    setSelectedCategory(params.get("category") || "");
    setSelectedManufacturer(params.get("manufacturer") || "");
    setSelectedColor(params.get("color") || "");
    setSelectedSize(params.get("size") || "");
  }, [location.search]);

  // A handleSearch that updates the URL with only searchTerm/category/manufacturer
  // (since you do not want color/size in the UI filters anymore).
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.append("query", searchTerm.trim());
    if (selectedCategory) params.append("category", selectedCategory);
    if (selectedManufacturer) params.append("manufacturer", selectedManufacturer);
    // Omit color/size since you no longer want them in the search bar
    navigate(`/products?${params.toString()}`);
  };

  // Filter products based on state
  useEffect(() => {
    let results = productsData.filter((p) => {
      const matchQuery = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = selectedCategory ? p.category === selectedCategory : true;
      const matchManu = selectedManufacturer ? p.distributor === selectedManufacturer : true;
      // If the URL still has color/size, we respect them, but do not show them in the UI
      const matchColor = selectedColor ? (p.colors && p.colors.includes(selectedColor)) : true;
      const matchSize = selectedSize ? (p.sizes && p.sizes.includes(selectedSize)) : true;

      return matchQuery && matchCat && matchManu && matchColor && matchSize;
    });
    setFilteredProducts(results);
    setPage(1);
  }, [searchTerm, selectedCategory, selectedManufacturer, selectedColor, selectedSize]);

  // Infinite scroll
  const loadMoreRef = useRef(null);
  useEffect(() => {
    const currentRef = loadMoreRef.current; // store it in a variable to avoid ESLint warning
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page * itemsPerPage < filteredProducts.length) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [filteredProducts, page, itemsPerPage]);

  const paginatedProducts = filteredProducts.slice(0, page * itemsPerPage);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedManufacturer("");
    setSelectedColor("");
    setSelectedSize("");
    navigate("/products");
  };

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setGalleryIndex(0);
    setZoomed(false);
    setImagePos({ x: 0, y: 0 });
  };
  const closeModal = () => {
    setSelectedProduct(null);
    setGalleryIndex(0);
    setZoomed(false);
    setImagePos({ x: 0, y: 0 });
  };

  // Build gallery for the modal
  const getGallery = () => {
    if (!selectedProduct) return [];
    return selectedProduct.gallery && selectedProduct.gallery.length > 0
      ? selectedProduct.gallery
      : [selectedProduct.image];
  };
  const gallery = getGallery();

  const handleNextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % gallery.length);
    setImagePos({ x: 0, y: 0 });
  };
  const handlePrevImage = () => {
    setGalleryIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    setImagePos({ x: 0, y: 0 });
  };
  const handleToggleZoom = () => {
    setZoomed((prev) => !prev);
    if (zoomed) setImagePos({ x: 0, y: 0 });
  };

  // Mouse panning
  const handleMouseDown = (e) => {
    if (!zoomed) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - imagePos.x, y: e.clientY - imagePos.y });
  };
  const handleMouseMove = (e) => {
    if (!zoomed || !isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setImagePos({ x: newX, y: newY });
  };
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch swiping
  const handleTouchStart = (e) => {
    if (zoomed) return;
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (zoomed || touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const swipeThreshold = 50;
    if (deltaX > swipeThreshold) {
      handlePrevImage();
    } else if (deltaX < -swipeThreshold) {
      handleNextImage();
    }
    setTouchStartX(null);
  };

  // Helper to get the "current image" for the card, based on cardColors[product.id]
  const getCardImage = (product) => {
    const currentColor = cardColors[product.id] || "";
    if (currentColor && product.colorVariants && product.colorVariants.length > 0) {
      const variant = product.colorVariants.find((v) => v.name === currentColor);
      if (variant && variant.gallery && variant.gallery.length > 0) {
        return variant.gallery[0]; // first image for that color variant
      }
    }
    // fallback to product.image
    return product.image;
  };

  const handleCardColorClick = (e, product, color) => {
    e.stopPropagation(); // so we don't open the modal
    setCardColors((prev) => ({ ...prev, [product.id]: color }));
  };

  return (
    <div className="productsContainer">
      <h1 className="sectionTitle">{t("products.title", "Explore Our Products")}</h1>
      <p className="sectionSubtitle">
        {t("products.description", "Browse through our wide range of high-quality safety and industrial products.")}
      </p>

      {/* Filter Bar */}
      <div className="filterBar">
        <div className="filterGroup">
          <input
            type="text"
            placeholder={t("products.searchPlaceholder", "Search Products...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // The error was "handleSearch is not defined": we now define it above.
            // So we can safely call handleSearch here:
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="searchInput"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filterSelect"
          >
            <option value="">{t("products.allCategories", "All Categories")}</option>
            {Array.from(new Set(productsData.map((p) => p.category))).map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={selectedManufacturer}
            onChange={(e) => setSelectedManufacturer(e.target.value)}
            className="filterSelect"
          >
            <option value="">{t("products.allManufacturers", "All Manufacturers")}</option>
            {Array.from(new Set(productsData.map((p) => p.distributor))).map((manu, idx) => (
              <option key={idx} value={manu}>
                {manu}
              </option>
            ))}
          </select>
          <button onClick={clearFilters} className="clearButton">
            {t("products.clearFilters", "Clear Filters")}
          </button>
        </div>
        <div className="resultsCount">
          {filteredProducts.length} {t("products.found", "products found")}
        </div>
        {/* "Search" button calls handleSearch */}
        <button onClick={handleSearch} className="searchButton">
          {t("products.searchButton", "Search")}
        </button>
      </div>

      {/* Products Grid */}
      <div className="productGrid">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => {
            const displayImage = getCardImage(product);

            return (
              <div
                key={product.id}
                className="productCard"
                onClick={() => openProductDetail(product)}
              >
                <div className="imageWrapper">
                  <img src={displayImage} alt={product.name} className="productImage" />
                </div>
                <div className="productInfo">
                  <h3 className="productName">{product.name}</h3>
                  {product.brief && <p className="productBrief">{product.brief}</p>}

                  {/* Show color swatches if product has multiple colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="colorSwatchesPreview">
                      {product.colors.map((col, idx) => (
                        <span
                          key={idx}
                          className={`colorCirclePreview ${
                            (cardColors[product.id] || "") === col ? "selected" : ""
                          }`}
                          style={{ backgroundColor: col.toLowerCase() }}
                          onClick={(e) => handleCardColorClick(e, product, col)}
                          title={col}
                        />
                      ))}
                    </div>
                  )}

                  <button
                    className="orderButton"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        `https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`,
                        "_blank"
                      );
                    }}
                  >
                    {t("products.orderNow", "Order Now")}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="noProductsMessage">{t("products.noProductsFound", "No products found")}</p>
        )}
      </div>
      <div ref={loadMoreRef} style={{ height: "1px" }} />

      {/* Modal Detail View */}
      {selectedProduct && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModalButton" onClick={closeModal}>
              &times;
            </button>
            <div className="galleryWrapperModal">
              <div
                className="galleryImageContainer"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
              >
                <img
                  src={gallery[galleryIndex]}
                  alt={selectedProduct.name}
                  className={`detailImage ${zoomed ? "zoomed" : ""}`}
                  style={{
                    transform: zoomed
                      ? `scale(1.5) translate(${imagePos.x}px, ${imagePos.y}px)`
                      : "scale(1) translate(0, 0)",
                  }}
                />
              </div>
              <div className="galleryNav">
                <button onClick={handleToggleZoom} className="galleryButton">
                  {zoomed ? "Zoom Out" : "Zoom In"}
                </button>
                {gallery.length > 1 && (
                  <>
                    <button onClick={handlePrevImage} className="galleryButton">
                      ‹
                    </button>
                    <span className="galleryCount">
                      {galleryIndex + 1} / {gallery.length}
                    </span>
                    <button onClick={handleNextImage} className="galleryButton">
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="detailInfo">
              <h2 className="detailTitleModal">{selectedProduct.name}</h2>
              {selectedProduct.brief && (
                <p className="detailBrief">{selectedProduct.brief}</p>
              )}
              {selectedProduct.description && (
                <p className="detailDescription">{selectedProduct.description}</p>
              )}
              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                <p className="detailSizes">
                  <strong>Available Sizes:</strong>{" "}
                  {selectedProduct.sizes.join(", ")}
                </p>
              )}
              {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                <div className="detailColors">
                  <strong>Colors:</strong>
                  <div className="colorSwatches">
                    {/* For the modal, we can optionally let user pick color here too,
                        or just show them. This is optional. */}
                    {selectedProduct.colors.map((col) => (
                      <div
                        key={col}
                        className="colorSwatch"
                        style={{ backgroundColor: col.toLowerCase() }}
                        title={col}
                      />
                    ))}
                  </div>
                </div>
              )}
              {selectedProduct.additionalInfo &&
                Object.keys(selectedProduct.additionalInfo).length > 0 && (
                  <div className="detailAdditionalInfo">
                    <h3>Additional Information</h3>
                    <table>
                      <tbody>
                        {Object.entries(selectedProduct.additionalInfo).map(([key, value]) => (
                          <tr key={key}>
                            <th>{key}</th>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              <button
                className="orderButton"
                onClick={() =>
                  window.open(
                    `https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(
                      selectedProduct.name
                    )}`,
                    "_blank"
                  )
                }
              >
                {t("products.orderNow", "Order Now")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
