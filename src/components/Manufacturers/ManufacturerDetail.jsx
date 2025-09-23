// src/components/Manufacturers/ManufacturerDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../data/productsData";
import "./ManufacturerDetail.css";

const ManufacturerDetail = () => {
  const { manufacturerName } = useParams();
  const filteredProducts = productsData.filter(
    (product) =>
      product.distributor.toLowerCase() === manufacturerName.toLowerCase()
  );
  const fallbackLogo = "/images/manufacturer_placeholder.png";

  return (
    <div className="manufacturerDetailContainer">
      <h1 className="manufacturerTitle">{manufacturerName}</h1>
      <p className="manufacturerSubtitle">
        Explore products from {manufacturerName}.
      </p>

      {filteredProducts.length > 0 ? (
        <div className="productGrid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="productCard">
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
                onError={(e) => { e.target.src = fallbackLogo; }}
              />
              <div className="productInfo">
                <h3 className="productName">{product.name}</h3>
                <p className="productMeta">
                  <strong>Manufacturer:</strong> {product.distributor}
                </p>
                <p className="productMeta">
                  <strong>Category:</strong> {product.category}
                </p>
                <div className="productActions">
                  <a
                    href={`https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="orderButton"
                  >
                    Order Now
                  </a>
                  <Link to={`/product/${product.id}`} className="viewDetailsButton">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="noProductsMessage">No products found for {manufacturerName}.</p>
      )}
    </div>
  );
};

export default ManufacturerDetail;
