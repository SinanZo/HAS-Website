// src/utils/filterUtils.js
/**
 * Utility functions for bilingual filter management
 * Handles translation between stable filter keys and translated labels
 */

/**
 * Map stable filter keys to their translated labels
 * This ensures filters work correctly regardless of language
 */
export const FILTER_KEYS = {
  // Safety categories
  safetyHelmets: 'safety_helmets',
  disposableMasks: 'disposable_masks',
  earMuffs: 'ear_muffs',
  safetySpectacles: 'safety_spectacles',
  respirators: 'respirators',
  cartridgesFilters: 'cartridges_filters',
  safetyAccessories: 'safety_accessories',
  safetyGloves: 'safety_gloves',
  
  // Price ranges
  under50: 'price_under_50',
  price50to100: 'price_50_to_100',
  price100to200: 'price_100_to_200',
  over200: 'price_over_200',
  
  // Manufacturers
  threeM: 'manufacturer_3m',
  honeywell: 'manufacturer_honeywell',
  deltaPlus: 'manufacturer_delta_plus',
  msa: 'manufacturer_msa',
  ist: 'manufacturer_ist',
};

/**
 * Get the stable key from a translated label
 * @param {string} label - The translated label
 * @param {object} translations - The translations object (i18n)
 * @returns {string|null} The stable key or null if not found
 */
export const getLabelKey = (label, translations) => {
  if (!label || !translations) return null;
  
  // Normalize: trim whitespace, handle case sensitivity
  const normalizedLabel = label.trim().toLowerCase();
  
  // Search through translations
  for (const [key, value] of Object.entries(translations)) {
    if (typeof value === 'string') {
      if (value.trim().toLowerCase() === normalizedLabel) {
        return key;
      }
    }
  }
  
  return null;
};

/**
 * Encode filter state for URL query parameters
 * Handles special characters and RTL text
 * @param {Set|Array} filterKeys - The active filter keys
 * @returns {string} URL-encoded filter string
 */
export const encodeFilters = (filterKeys) => {
  if (!filterKeys || filterKeys.size === 0) return '';
  
  const keysArray = Array.from(filterKeys);
  return encodeURIComponent(keysArray.join(','));
};

/**
 * Decode filter state from URL query parameters
 * @param {string} queryParam - The encoded query parameter
 * @returns {Set} Set of active filter keys
 */
export const decodeFilters = (queryParam) => {
  if (!queryParam) return new Set();
  
  try {
    const decoded = decodeURIComponent(queryParam);
    const keys = decoded.split(',').filter(k => k.trim());
    return new Set(keys);
  } catch (error) {
    console.warn('Failed to decode filters from URL:', error);
    return new Set();
  }
};

/**
 * Get query parameter for filters
 * @param {Set|Array} filters - Active filters
 * @returns {URLSearchParams} Query parameters object
 */
export const getFilterQueryParams = (filters) => {
  const params = new URLSearchParams();
  
  if (filters && filters.size > 0) {
    const encoded = encodeFilters(filters);
    params.set('f', encoded);
  }
  
  return params;
};

/**
 * Apply filters to products based on filter state and product data
 * @param {Array} products - Array of product objects
 * @param {Set} activeFilters - Set of active filter keys
 * @returns {Array} Filtered products
 */
export const applyFilters = (products, activeFilters) => {
  if (!products || !activeFilters || activeFilters.size === 0) {
    return products;
  }
  
  return products.filter(product => {
    // Check if product category matches any active filter
    const productCategory = product.category?.toLowerCase().replace(/\s+/g, '_');
    
    for (const filter of activeFilters) {
      if (productCategory === filter.toLowerCase()) {
        return true;
      }
    }
    
    // Check product manufacturer
    const manufacturer = product.manufacturer?.toLowerCase().replace(/\s+/g, '_');
    for (const filter of activeFilters) {
      if (manufacturer === filter.toLowerCase()) {
        return true;
      }
    }
    
    // Check price range
    if (product.price) {
      if (activeFilters.has('price_under_50') && product.price < 50) return true;
      if (activeFilters.has('price_50_to_100') && product.price >= 50 && product.price <= 100) return true;
      if (activeFilters.has('price_100_to_200') && product.price > 100 && product.price <= 200) return true;
      if (activeFilters.has('price_over_200') && product.price > 200) return true;
    }
    
    return false;
  });
};

/**
 * Sort products by the specified criteria
 * @param {Array} products - Array of products
 * @param {string} sortBy - Sort criteria: 'newest', 'price-asc', 'price-desc', 'name'
 * @returns {Array} Sorted products
 */
export const sortProducts = (products, sortBy = 'newest') => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      break;
    case 'price-desc':
      sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      break;
    case 'name':
      sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      break;
    case 'newest':
    default:
      // Assume products are already in newest-first order
      break;
  }
  
  return sorted;
};

/**
 * Debounce function to prevent excessive filter updates
 * @param {Function} func - Function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Validate filter keys against known filter set
 * @param {Set|Array} filterKeys - Keys to validate
 * @param {Set} allowedKeys - Set of allowed filter keys
 * @returns {Set} Valid filter keys
 */
export const validateFilters = (filterKeys, allowedKeys) => {
  if (!filterKeys || !allowedKeys) return new Set();
  
  const validated = new Set();
  for (const key of filterKeys) {
    if (allowedKeys.has(key)) {
      validated.add(key);
    }
  }
  
  return validated;
};

/**
 * Get readable label from filter key
 * @param {string} key - Filter key
 * @param {object} t - i18next translation function
 * @returns {string} Human-readable label
 */
export const getFilterLabel = (key, t) => {
  const filterLabelMap = {
    'safety_helmets': t('filters.safetyHelmets'),
    'disposable_masks': t('filters.disposableMasks'),
    'ear_muffs': t('filters.earMuffs'),
    'safety_spectacles': t('filters.safetySpectacles'),
    'respirators': t('filters.respirators'),
    'cartridges_filters': t('filters.cartridgesFilters'),
    'safety_accessories': t('filters.safetyAccessories'),
    'safety_gloves': t('filters.safetyGloves'),
    'price_under_50': t('filters.priceUnder50'),
    'price_50_to_100': t('filters.price50To100'),
    'price_100_to_200': t('filters.price100To200'),
    'price_over_200': t('filters.priceOver200'),
    'manufacturer_3m': t('filters.manufacturer3M'),
    'manufacturer_honeywell': t('filters.manufacturerHoneywell'),
    'manufacturer_delta_plus': t('filters.manufacturerDeltaPlus'),
    'manufacturer_msa': t('filters.manufacturerMSA'),
    'manufacturer_ist': t('filters.manufacturerIST'),
  };
  
  return filterLabelMap[key] || key;
};

/**
 * Get all unique categories from products
 * @param {Array} products - Array of products
 * @returns {Array} Array of unique categories
 */
export const getUniqueCategories = (products) => {
  if (!products || !Array.isArray(products)) return [];
  
  const categories = new Set();
  products.forEach(product => {
    if (product.category) {
      categories.add(product.category);
    }
  });
  
  return Array.from(categories).sort();
};

/**
 * Get all unique manufacturers from products
 * @param {Array} products - Array of products
 * @returns {Array} Array of unique manufacturers
 */
export const getUniqueManufacturers = (products) => {
  if (!products || !Array.isArray(products)) return [];
  
  const manufacturers = new Set();
  products.forEach(product => {
    if (product.manufacturer) {
      manufacturers.add(product.manufacturer);
    }
  });
  
  return Array.from(manufacturers).sort();
};

/**
 * Get price range from products
 * @param {Array} products - Array of products
 * @returns {object} {min, max} price range
 */
export const getPriceRange = (products) => {
  if (!products || !Array.isArray(products)) {
    return { min: 0, max: 0 };
  }
  
  const prices = products
    .map(p => p.price)
    .filter(price => typeof price === 'number' && !isNaN(price));
  
  if (prices.length === 0) {
    return { min: 0, max: 0 };
  }
  
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};
