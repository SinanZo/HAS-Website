// src/utils/seoUtils.js
/**
 * SEO Utilities for structured data, schema.org markup, and meta management
 */

/**
 * Generate structured data for Organization
 * @returns {object} Schema.org Organization markup
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hilmi Abu Sham & Partners Co.',
  alternateName: 'HAS',
  url: 'https://www.hilmiabusham.com',
  logo: 'https://www.hilmiabusham.com/logo.png',
  description: 'Your trusted source for high-quality safety and industrial products. Over 40 years of industry expertise.',
  foundingDate: '1982',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    telephone: '+962-6-4641581',
    email: 'info@hilmiabusham.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jabal Amman - Third Circle - Mithqal AL Fayez Street. Building #25',
    addressLocality: 'Amman',
    postalCode: '11183',
    addressCountry: 'JO',
  },
  sameAs: [
    'https://www.facebook.com/hilmiabusham',
    'https://www.linkedin.com/company/hilmi-abu-sham',
    'https://www.instagram.com/hilmiabusham',
  ],
});

/**
 * Generate structured data for a Product
 * @param {object} product - Product object
 * @returns {object} Schema.org Product markup
 */
export const getProductSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image || 'https://www.hilmiabusham.com/placeholder.jpg',
  brand: {
    '@type': 'Brand',
    name: product.manufacturer || 'Hilmi Abu Sham & Partners',
  },
  manufacturer: {
    '@type': 'Organization',
    name: product.manufacturer || 'Hilmi Abu Sham & Partners',
  },
  sku: product.sku || product.id,
  offers: {
    '@type': 'Offer',
    url: `https://www.hilmiabusham.com/product/${product.id}`,
    priceCurrency: 'JOD',
    price: product.price || '0',
    availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    seller: {
      '@type': 'Organization',
      name: 'Hilmi Abu Sham & Partners Co.',
    },
  },
  category: product.category || 'Safety Equipment',
  ...(product.rating && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      ratingCount: product.ratingCount || 1,
    },
  }),
});

/**
 * Generate structured data for BreadcrumbList
 * @param {Array} breadcrumbs - Array of {label, url} objects
 * @returns {object} Schema.org BreadcrumbList markup
 */
export const getBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.label,
    item: crumb.url,
  })),
});

/**
 * Generate structured data for WebSite with SearchAction
 * @returns {object} Schema.org WebSite markup
 */
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://www.hilmiabusham.com',
  name: 'Hilmi Abu Sham & Partners - Safety Products',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.hilmiabusham.com/products?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

/**
 * Generate LocalBusiness schema (if applicable)
 * @returns {object} Schema.org LocalBusiness markup
 */
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hilmi Abu Sham & Partners Co.',
  description: 'Industrial Safety Products & Equipment Supplier in Jordan',
  image: 'https://www.hilmiabusham.com/logo.png',
  url: 'https://www.hilmiabusham.com',
  telephone: '+962-6-4641581',
  email: 'info@hilmiabusham.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jabal Amman - Third Circle - Mithqal AL Fayez Street. Building #25',
    addressLocality: 'Amman',
    addressRegion: 'Amman',
    postalCode: '11183',
    addressCountry: 'JO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.9454,
    longitude: 35.9284,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
});

/**
 * Generate robots.txt content
 * @returns {string} robots.txt content
 */
export const getRobotsTxt = () => `
User-agent: *
Allow: /
Allow: /products
Allow: /categories
Allow: /manufacturers
Allow: /about
Allow: /contact

Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*?*sort=
Disallow: /*?*page=

Sitemap: https://www.hilmiabusham.com/sitemap.xml
Crawl-delay: 1

User-agent: Googlebot
Crawl-delay: 0
`.trim();

/**
 * Generate XML Sitemap
 * @param {Array} pages - Array of {url, lastModified, changeFreq, priority}
 * @returns {string} XML sitemap content
 */
export const generateSitemap = (pages) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${pages.map(page => `
  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${page.lastModified || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changeFreq || 'weekly'}</changefreq>
    <priority>${page.priority || '0.5'}</priority>
    ${page.images ? page.images.map(img => `
    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${escapeXml(img.title || '')}</image:title>
    </image:image>
    `).join('') : ''}
  </url>
`).join('')}
</urlset>`;

  return xml;
};

/**
 * Escape XML special characters
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
const escapeXml = (str) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  
  return str.replace(/[&<>"']/g, char => map[char]);
};

/**
 * Generate Open Graph meta tags
 * @param {object} data - Page data {title, description, image, url, type}
 * @returns {object} OpenGraph meta data
 */
export const getOpenGraphMeta = (data) => ({
  'og:title': data.title,
  'og:description': data.description,
  'og:image': data.image || 'https://www.hilmiabusham.com/og-image.jpg',
  'og:url': data.url || 'https://www.hilmiabusham.com',
  'og:type': data.type || 'website',
  'og:site_name': 'Hilmi Abu Sham & Partners',
  'og:locale': data.locale || 'en_US',
});

/**
 * Generate Twitter Card meta tags
 * @param {object} data - Page data {title, description, image}
 * @returns {object} Twitter Card meta data
 */
export const getTwitterCardMeta = (data) => ({
  'twitter:card': 'summary_large_image',
  'twitter:title': data.title,
  'twitter:description': data.description,
  'twitter:image': data.image || 'https://www.hilmiabusham.com/twitter-image.jpg',
  'twitter:site': '@HilmiAbuSham',
  'twitter:creator': '@HilmiAbuSham',
});

/**
 * Generate canonical URL
 * @param {string} currentUrl - Current page URL
 * @returns {string} Canonical URL
 */
export const getCanonicalUrl = (currentUrl) => {
  // Remove query parameters that don't affect content (e.g., utm params)
  const url = new URL(currentUrl);
  const params = new URLSearchParams(url.search);
  
  // Keep only important query params (like filters, pagination)
  const allowedParams = ['q', 'f', 'sort', 'page'];
  const newParams = new URLSearchParams();
  
  allowedParams.forEach(param => {
    if (params.has(param)) {
      newParams.set(param, params.get(param));
    }
  });
  
  url.search = newParams.toString();
  return url.toString();
};

/**
 * Generate SEO meta object for a page
 * @param {object} data - Page data
 * @returns {object} Complete SEO meta data
 */
export const generateSeoMeta = (data) => ({
  title: data.title,
  description: data.description,
  keywords: data.keywords || 'safety products, PPE, industrial equipment, Jordan',
  canonical: getCanonicalUrl(data.url),
  robots: data.robots || 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  
  // Open Graph
  ...getOpenGraphMeta(data),
  
  // Twitter Card
  ...getTwitterCardMeta(data),
  
  // Additional meta
  author: 'Hilmi Abu Sham & Partners',
  publisher: 'Hilmi Abu Sham & Partners',
  'article:published_time': data.publishedTime || new Date().toISOString(),
  'article:modified_time': data.modifiedTime || new Date().toISOString(),
});

/**
 * Validate SEO data completeness
 * @param {object} seoData - SEO data object
 * @returns {object} Validation result with missing fields
 */
export const validateSeoData = (seoData) => {
  const errors = [];
  
  if (!seoData.title) {
    errors.push('Missing: title');
  } else if (seoData.title.length < 30 || seoData.title.length > 60) {
    errors.push('Title length should be 30-60 characters');
  }
  
  if (!seoData.description) {
    errors.push('Missing: description');
  } else if (seoData.description.length < 120 || seoData.description.length > 160) {
    errors.push('Description length should be 120-160 characters');
  }
  
  if (!seoData.url) {
    errors.push('Missing: canonical URL');
  }
  
  if (!seoData.image) {
    errors.push('Missing: OG image');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Get page-specific SEO data
 * @param {string} pageType - Type of page: 'home', 'product', 'category', 'about', etc.
 * @param {object} data - Page-specific data
 * @returns {object} SEO meta data
 */
export const getPageSeoData = (pageType, data = {}) => {
  const seoTemplates = {
    home: {
      title: 'Safety Equipment & PPE Supplier in Jordan | Hilmi Abu Sham',
      description: 'Shop high-quality safety products, PPE, and industrial equipment. Over 40 years serving oil, gas, mining, and petrochemical sectors.',
      keywords: 'safety equipment, PPE, respirators, helmets, gloves, industrial products, Jordan',
      type: 'website',
    },
    product: {
      title: `${data.name || 'Product'} | Hilmi Abu Sham & Partners`,
      description: data.description || 'High-quality safety equipment from trusted manufacturers.',
      keywords: `${data.category || 'safety'}, ${data.manufacturer || ''}, PPE, industrial`,
      type: 'product',
    },
    category: {
      title: `${data.categoryName || 'Safety Products'} | Hilmi Abu Sham & Partners`,
      description: `Browse our collection of ${data.categoryName || 'safety products'}. High-quality equipment from leading manufacturers.`,
      keywords: `${data.categoryName || 'safety'}, PPE, industrial equipment`,
      type: 'category',
    },
    about: {
      title: 'About Hilmi Abu Sham & Partners | Safety Equipment Leader',
      description: 'Learn about our 40+ years in industrial safety, PPE supply, and partnerships with world-leading brands.',
      keywords: 'about us, industrial safety, PPE supplier, Jordan',
      type: 'about',
    },
    contact: {
      title: 'Contact Hilmi Abu Sham & Partners | Get in Touch',
      description: 'Contact us for safety equipment orders, quotes, and inquiries. Phone, email, WhatsApp available.',
      keywords: 'contact, inquiry, quote, WhatsApp, support',
      type: 'contact',
    },
  };
  
  return seoTemplates[pageType] || seoTemplates.home;
};
