// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Hilmi Abu Sham & Partner Co.",
  description = "High-quality safety solutions, lab equipment, and industrial products.",
  keywords = "PPE, safety, lab equipment, industrial products",
  canonical = window.location.href,
  structuredData = null,
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Social */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Structured Data as JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
