// src/components/ProductDetail/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import productsData from "../../data/productsData";
import "./ProductDetail.css";
import RequestQuoteModal from "../Shared/RequestQuoteModal";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Convert productId from the URL to a number.
  const productIdNum = parseInt(productId, 10);

  // Always compute the product from productsData.
  // Use optional chaining (p?.id) to avoid errors if an object is missing an id.
  const product = productsData.find((p) => p?.id === productIdNum);

  // Call hooks unconditionally.
  // Set the initial color based on whether the product (if found) has any color variants.
  const initialColor =
    product &&
    product.colorVariants &&
    product.colorVariants.length > 0
      ? product.colorVariants[0].name
      : "";
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  // If the product was not found, render a "not found" message.
  if (!product) {
    return (
      <div className="productDetailContainer">
        <button className="backButton" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2>Product not found.</h2>
      </div>
    );
  }

  // Build the gallery array using the selected color variant (if any) or fallback to product.gallery or product.image.
  const getGallery = () => {
    if (selectedColor && product.colorVariants) {
      // Compare color names in a case-insensitive way.
      const variant = product.colorVariants.find(
        (v) => v.name.toLowerCase() === selectedColor.toLowerCase()
      );
      if (variant && variant.gallery && variant.gallery.length > 0) {
        return variant.gallery;
      }
    }
    if (product.gallery && product.gallery.length > 0) {
      return product.gallery;
    }
    return [product.image];
  };

  const gallery = getGallery();

  // Handlers for gallery navigation and zoom/pan functionality.
  const handleNextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % gallery.length);
    setImagePos({ x: 0, y: 0 });
  };

  const handlePrevImage = () => {
    setGalleryIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    setImagePos({ x: 0, y: 0 });
  };

  const handleToggleZoom = () => {
    setZoomed((prevZoom) => {
      // If zooming out, reset the image position.
      if (prevZoom) setImagePos({ x: 0, y: 0 });
      return !prevZoom;
    });
  };

  const handleMouseDown = (e) => {
    if (!zoomed) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - imagePos.x,
      y: e.clientY - imagePos.y,
    });
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

  // Get URL query parameters (if provided) to display meta information about category.
  const paramsObj = new URLSearchParams(location.search);
  const urlCategory = paramsObj.get("category") || product.category;
  const urlSubCategory = paramsObj.get("subCategory") || product.subCategory;

  return (
    <div className="productDetailContainer">
      <button className="backButton" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
      <h1 className="detailTitle">{product.name}</h1>
      <div className="detailMeta">
        {urlCategory && (
          <p>
            <strong>Category:</strong> {urlCategory}
          </p>
        )}
        {urlSubCategory && (
          <p>
            <strong>SubCategory:</strong> {urlSubCategory}
          </p>
        )}
        {product.distributor && (
          <p>
            <strong>Manufacturer:</strong> {product.distributor}
          </p>
        )}
      </div>
      <div className="detailContent">
        {/* Gallery Section */}
        <div className="galleryWrapper">
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
              alt={product.name}
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
        {/* Product Information Section */}
        <div className="detailInfo">
          {product.brief && <p className="detailBrief">{product.brief}</p>}
          {product.description && (
            <p className="detailDescription">{product.description}</p>
          )}
          {product.sizes && product.sizes.length > 0 && (
            <p className="detailSizes">
              <strong>Available Sizes:</strong> {product.sizes.join(", ")}
            </p>
          )}
          {product.colors && product.colors.length > 0 && (
            <div className="detailColors">
              <strong>Colors:</strong>
              <div className="colorSwatches">
                {/* “All” option */}
                <div
                  className={`colorSwatch default ${!selectedColor ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedColor("");
                    setGalleryIndex(0);
                    setZoomed(false);
                    setImagePos({ x: 0, y: 0 });
                  }}
                  title="All"
                >
                  All
                </div>
                {product.colors.map((col) => (
                  <div
                    key={col}
                    className={`colorSwatch ${selectedColor === col ? "selected" : ""}`}
                    style={{ backgroundColor: col.toLowerCase() }}
                    onClick={() => {
                      setSelectedColor(col);
                      setGalleryIndex(0);
                      setZoomed(false);
                      setImagePos({ x: 0, y: 0 });
                    }}
                    title={col}
                  />
                ))}
              </div>
            </div>
          )}
          {product.additionalInfo &&
            Object.keys(product.additionalInfo).length > 0 && (
              <div className="detailAdditionalInfo">
                <h3>Additional Information</h3>
                <table>
                  <tbody>
                    {Object.entries(product.additionalInfo).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <th>{key}</th>
                          <td>
                            {Array.isArray(value)
                              ? value.map((line, idx) => <p key={idx}>{line}</p>)
                              : value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          {/* Price and datasheet */}
          {product.price !== undefined && (
            <div className="detailPrice">
              <strong>Price:</strong> ${product.price}
            </div>
          )}

          {product.datasheet && (
            <div className="detailDatasheet">
              <a href={product.datasheet} target="_blank" rel="noopener noreferrer">
                Download Datasheet
              </a>
            </div>
          )}

          <div className="detailActions">
            <button
              className="orderButton"
              onClick={() =>
                window.open(
                  `https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(
                    product.name
                  )}`,
                  "_blank"
                )
              }
            >
              Order Now
            </button>
            <button className="quoteButton" onClick={openQuote}>
              Request Quote
            </button>
          </div>
        </div>
      </div>
      <RequestQuoteModal open={quoteOpen} onClose={closeQuote} product={product} />
    </div>
  );
};

export default ProductDetail;
