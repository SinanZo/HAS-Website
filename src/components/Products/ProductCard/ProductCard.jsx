import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Initialize selectedImage using the first color variant if available,
  // otherwise fall back to the product.image
  const initialImage =
    product.colorVariants && product.colorVariants.length > 0
      ? product.colorVariants[0].image
      : product.image;
  const [selectedImage, setSelectedImage] = useState(initialImage);

  return (
    <div className="productCard">
      <img src={selectedImage} alt={product.name} className="productImage" />
      <div className="productDetails">
        <h3>{product.name}</h3>
        {/* Display the brief description */}
        {product.brief && <p className="productBrief">{product.brief}</p>}
        {/* Optionally display an extended description */}
        {product.description && (
          <p className="productDescription">{product.description}</p>
        )}
        <div className="price">${product.price}</div>
        {/* Available sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="sizeOptions">
            <p>
              <strong>Sizes:</strong> {product.sizes.join(', ')}
            </p>
          </div>
        )}
        {/* Color variants as clickable swatches */}
        {product.colorVariants && product.colorVariants.length > 0 && (
          <div className="colorOptions">
            {product.colorVariants.map((variant, index) => (
              <span
                key={index}
                className="colorCircle"
                style={{ backgroundColor: variant.name.toLowerCase() }}
                onClick={() => setSelectedImage(variant.image)}
              ></span>
            ))}
          </div>
        )}
        <button className="orderButton">Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
