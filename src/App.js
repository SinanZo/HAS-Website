// src/App.js
import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnalyticsTracker from "./components/AnalyticsTracker";
// eslint-disable-next-line no-unused-vars
import { initWebVitalsMonitoring, reportWebVitals, dnsPrefetch, preconnect } from "./utils/performanceUtils";
// eslint-disable-next-line no-unused-vars
import { initGA4, initSessionTracking, initScrollDepthTracking, initTimeOnPageTracking } from "./utils/analyticsUtils";
import ConsentBanner from "./components/ConsentBanner/ConsentBanner";

// Global imports
import "./i18n";
import "./index.css";

// Common components (always loaded)
import ContactBar from "./components/ContactBar/ContactBar";
import Navbar from "./components/Navbar/Navbar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import Footer from "./components/Footer/Footer";
import HealthBanner from "./components/Health/HealthBanner";

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
  const { i18n } = useTranslation();

  useEffect(() => {
    // Initialize language and direction from localStorage or system preference
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    const preferredDirection = localStorage.getItem('preferredDirection');

    if (preferredLanguage && preferredLanguage !== i18n.language) {
      i18n.changeLanguage(preferredLanguage);
    }

    // Set initial dir and lang attributes
    const dir = preferredDirection || i18n.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;

    // Skip to main content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-main';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);

    // Performance optimization: Initialize Web Vitals monitoring
    initWebVitalsMonitoring();

    // Performance optimization: Prefetch DNS for external resources
    dnsPrefetch(['fonts.googleapis.com', 'fonts.gstatic.com', 'api.example.com']);

    // Performance optimization: Preconnect to origins for early resource requests
    preconnect(['https://fonts.googleapis.com', 'https://fonts.gstatic.com']);

    // Analytics: Initialize GA4 with consent mode
    const ga4Id = process.env.REACT_APP_GA4_ID;
    if (ga4Id) {
      initGA4(ga4Id);
      initSessionTracking();
      initScrollDepthTracking();
      initTimeOnPageTracking();
    }

    // Report performance metrics when page loads
    window.addEventListener('load', () => {
      reportWebVitals();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <HealthBanner />
      <AnalyticsTracker />
      <ConsentBanner />
      <ContactBar />
      <Navbar />
      <CategoryBar />

      <main id="main-content">
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
