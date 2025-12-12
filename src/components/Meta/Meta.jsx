import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getPageSeoData,
  getProductSchema,
  getBreadcrumbSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "../utils/seoUtils";

/**
 * Meta component - Manages SEO meta tags and schema.org markup for all pages
 * Integrates with React Helmet for safe meta tag injection
 *
 * @param {Object} props
 * @param {string} props.pageType - Type of page: 'home', 'products', 'product', 'about', 'contact', 'manufacturers', 'brands'
 * @param {Object} props.data - Optional data object with additional info (product details, etc.)
 * @param {Array} props.breadcrumbs - Optional breadcrumb array for schema markup
 * @param {string} props.title - Optional override title
 * @param {string} props.description - Optional override description
 * @param {string} props.image - Optional override image URL
 *
 * @returns {JSX.Element}
 */
const Meta = ({ pageType = "home", data = {}, breadcrumbs = [], title, description, image }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

  // Get default SEO data based on page type
  const defaultSeoData = getPageSeoData(pageType, data);

  // Use overrides or defaults
  const seoTitle = title || defaultSeoData.title;
  const seoDescription = description || defaultSeoData.description;
  const seoImage = image || defaultSeoData.image || `${baseUrl}/hero.jpg`;
  const seoKeywords = defaultSeoData.keywords || "";

  // Generate structured data schemas
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  
  let pageSchema = null;
  if (pageType === "product" && data.id) {
    pageSchema = getProductSchema({
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image || seoImage,
      price: data.price || 0,
      category: data.category,
    });
  } else if (breadcrumbs && breadcrumbs.length > 0) {
    pageSchema = getBreadcrumbSchema(breadcrumbs);
  }

  // Language tag for HTML
  const langTag = i18n.language === "ar" ? "ar-JO" : "en-US";
  const dirTag = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={langTag} dir={dirTag} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00B4A0" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={pageType === "product" ? "product" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={langTag} />
      <meta property="og:site_name" content="Hilmi Abu Sham & Partners" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Hilmi Abu Sham & Partners Co." />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Social Media Meta Tags */}
      <meta property="article:publisher" content="https://facebook.com/hilmiabushan" />
      <meta name="twitter:site" content="@hilmiabushan" />

      {/* Security and Accessibility */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/Tajawal-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/hero.jpg" as="image" />

      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      {/* Structured Data - Website */}
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>

      {/* Structured Data - Page-specific (Product, Breadcrumb, etc) */}
      {pageSchema && <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>}

      {/* Alternate Language Links */}
      {i18n.language === "ar" ? (
        <link rel="alternate" href={`${baseUrl}${location.pathname}`} hrefLang="en-US" />
      ) : (
        <link rel="alternate" href={`${baseUrl}${location.pathname}`} hrefLang="ar-JO" />
      )}

      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default Meta;
