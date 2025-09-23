// src/App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AnalyticsTracker from "./components/AnalyticsTracker";

// Global imports
import "./i18n";
import "./styles/global.css";

// Common components (always loaded)
import ContactBar from "./components/ContactBar/ContactBar";
import Navbar from "./components/Navbar/Navbar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import Footer from "./components/Footer/Footer";

// Lazy load pages
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Products = lazy(() => import("./components/Products/Products"));
const ProductDetail = lazy(() => import("./components/ProductDetail/ProductDetail"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Manufacturers = lazy(() => import("./components/Manufacturers/Manufacturers"));
const ManufacturerDetail = lazy(() => import("./components/Manufacturers/ManufacturerDetail"));

// Admin route for adding a product
const AddProductForm = lazy(() => import("./components/Admin/AddProductForm"));

// NotFound component for unmatched routes
const NotFound = () => (
  <div style={{ textAlign: "center", padding: "40px" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for doesn't exist.</p>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <AnalyticsTracker />
      <ContactBar />
      <Navbar />
      <CategoryBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/manufacturers/:manufacturerName" element={<ManufacturerDetail />} />
          <Route path="*" element={<NotFound />} />

          {/* Admin Routes */}
          <Route path="/admin/add-product" element={<AddProductForm />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
