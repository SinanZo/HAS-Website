import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import "./ManufacturersSection.css";

const ManufacturersSection = () => {
  const navigate = useNavigate();

  // Extract unique manufacturer names from productsData
  const manufacturers = Array.from(
    new Set(productsData.map((product) => product.distributor))
  ).map((name) => ({ name }));

  // Placeholder logo image (update with real images if available)
  const placeholderLogo = "/images/manufacturer_placeholder.png";

  const handleManufacturerClick = (manufacturerName) => {
    // Navigate to the manufacturers page with a query parameter
    navigate(`/manufacturers?manufacturer=${encodeURIComponent(manufacturerName)}`);
  };

  return (
    <section className="manufacturers-section">
      <h2>Our Manufacturers</h2>
      <div className="manufacturers-grid">
        {manufacturers.map((manufacturer, index) => (
          <div
            key={index}
            className="manufacturer-card"
            onClick={() => handleManufacturerClick(manufacturer.name)}
          >
            <img
              src={placeholderLogo}
              alt={manufacturer.name}
              className="manufacturer-logo"
            />
            <h3>{manufacturer.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManufacturersSection;
