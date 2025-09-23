import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProductForm.css"; // Create appropriate styling

const AddProductForm = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    subCategory: "",
    subSubCategory: "",
    distributor: "",
    image: "",
    description: "",
    brief: "",
    colors: "",
    sizes: "",
    colorVariants: "",
    gallery: "",
    additionalInfo: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert JSON strings to objects/arrays if necessary
    const payload = {
      ...productData,
      colors: productData.colors ? JSON.parse(productData.colors) : [],
      sizes: productData.sizes ? JSON.parse(productData.sizes) : [],
      colorVariants: productData.colorVariants
        ? JSON.parse(productData.colorVariants)
        : [],
      gallery: productData.gallery ? JSON.parse(productData.gallery) : [],
      additionalInfo: productData.additionalInfo
        ? JSON.parse(productData.additionalInfo)
        : {},
    };

    try {
      await axios.post("http://localhost:3001/api/products", payload);
      setMessage("Product added successfully!");
      // Redirect or clear form as needed
      navigate("/products");
    } catch (error) {
      setMessage("Error adding product: " + error.message);
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Sub Category:
          <input
            type="text"
            name="subCategory"
            value={productData.subCategory}
            onChange={handleChange}
          />
        </label>

        <label>
          Sub Sub Category:
          <input
            type="text"
            name="subSubCategory"
            value={productData.subSubCategory}
            onChange={handleChange}
          />
        </label>

        <label>
          Distributor:
          <input
            type="text"
            name="distributor"
            value={productData.distributor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Brief:
          <textarea
            name="brief"
            value={productData.brief}
            onChange={handleChange}
          />
        </label>

        <label>
          Colors (JSON Array):
          <input
            type="text"
            name="colors"
            placeholder='e.g., ["red", "blue"]'
            value={productData.colors}
            onChange={handleChange}
          />
        </label>

        <label>
          Sizes (JSON Array):
          <input
            type="text"
            name="sizes"
            placeholder='e.g., ["S", "M", "L"]'
            value={productData.sizes}
            onChange={handleChange}
          />
        </label>

        <label>
          Color Variants (JSON Array):
          <input
            type="text"
            name="colorVariants"
            placeholder='e.g., [{"name": "red", "gallery": ["/img/red.png"]}]'
            value={productData.colorVariants}
            onChange={handleChange}
          />
        </label>

        <label>
          Gallery (JSON Array):
          <input
            type="text"
            name="gallery"
            placeholder='e.g., ["/img/1.png", "/img/2.png"]'
            value={productData.gallery}
            onChange={handleChange}
          />
        </label>

        <label>
          Additional Info (JSON Object):
          <input
            type="text"
            name="additionalInfo"
            placeholder='e.g., {"Weight": "350g"}'
            value={productData.additionalInfo}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
