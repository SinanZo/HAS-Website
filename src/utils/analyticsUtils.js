/* ────────────────────────────────────────────────────────── */
/*  src/utils/analyticsUtils.js – GA4 Setup & Tracking        */
/* ────────────────────────────────────────────────────────── */

/**
 * GA4 Analytics Utilities
 * 
 * Setup:
 * 1. Create GA4 property at console.firebase.google.com
 * 2. Get Measurement ID (G-XXXXXX)
 * 3. Add to .env: REACT_APP_GA4_ID=G-XXXXXX
 * 4. Initialize in App.js or index.js
 */

/**
 * Initialize GA4 with consent mode
 * Call this in App.js or index.js before other analytics
 */
export const initGA4 = (measurementId) => {
  if (!measurementId) {
    console.warn('GA4 Measurement ID not provided');
    return;
  }

  // Default consent to denied (until user accepts)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Check localStorage for consent and update
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    const parsed = JSON.parse(consent);
    window.gtag('consent', 'update', {
      'analytics_storage': parsed.analytics ? 'granted' : 'denied',
      'ad_storage': parsed.marketing ? 'granted' : 'denied',
      'ad_user_data': parsed.marketing ? 'granted' : 'denied',
      'ad_personalization': parsed.marketing ? 'granted' : 'denied'
    });
  }
};

/**
 * Track page view (automatically tracked, but can be manual)
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!window.gtag) return;

  window.gtag('config', process.env.REACT_APP_GA4_ID, {
    'page_path': pagePath,
    'page_title': pageTitle
  });
};

/**
 * Track events for user interactions
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (!window.gtag) return;

  window.gtag('event', eventName, {
    ...eventData,
    'timestamp': new Date().toISOString()
  });
};

/**
 * Event tracking functions for common actions
 */
export const analytics = {
  /**
   * Track product filter applied
   */
  trackFilterApplied: (filterType, filterValue) => {
    trackEvent('filter_applied', {
      'filter_type': filterType,
      'filter_value': filterValue
    });
  },

  /**
   * Track product view
   */
  trackProductView: (productId, productName, category) => {
    trackEvent('view_item', {
      'items': [
        {
          'item_id': productId,
          'item_name': productName,
          'item_category': category
        }
      ]
    });
  },

  /**
   * Track product click/selection
   */
  trackProductClick: (productId, productName, position) => {
    trackEvent('view_item', {
      'item_id': productId,
      'item_name': productName,
      'list_position': position
    });
  },

  /**
   * Track search performed
   */
  trackSearch: (searchQuery) => {
    trackEvent('search', {
      'search_term': searchQuery
    });
  },

  /**
   * Track form interaction (focus)
   */
  trackFormFocus: (formName, fieldName) => {
    trackEvent('form_interaction', {
      'form_name': formName,
      'field_name': fieldName,
      'interaction_type': 'focus'
    });
  },

  /**
   * Track form submission
   */
  trackFormSubmit: (formName, formData = {}) => {
    trackEvent('form_submit', {
      'form_name': formName,
      ...formData
    });
  },

  /**
   * Track error occurrence
   */
  trackError: (errorName, errorMessage, errorSeverity = 'error') => {
    trackEvent('exception', {
      'description': `${errorName}: ${errorMessage}`,
      'fatal': errorSeverity === 'fatal'
    });
  },

  /**
   * Track CTA button click
   */
  trackCTAClick: (buttonName, destination) => {
    trackEvent('cta_click', {
      'button_name': buttonName,
      'destination': destination
    });
  },

  /**
   * Track WhatsApp click
   */
  trackWhatsAppClick: (context = '') => {
    trackEvent('whatsapp_click', {
      'context': context,
      'timestamp': new Date().toISOString()
    });
  },

  /**
   * Track external link click
   */
  trackExternalLink: (url, linkText) => {
    trackEvent('click', {
      'outbound': true,
      'link_url': url,
      'link_text': linkText
    });
  },

  /**
   * Track language change
   */
  trackLanguageChange: (fromLang, toLang) => {
    trackEvent('language_change', {
      'from': fromLang,
      'to': toLang
    });
  },

  /**
   * Track theme change
   */
  trackThemeChange: (fromTheme, toTheme) => {
    trackEvent('theme_change', {
      'from': fromTheme,
      'to': toTheme
    });
  },

  /**
   * Track page scroll depth
   */
  trackScrollDepth: (scrollPercentage) => {
    if (scrollPercentage % 25 === 0) {
      trackEvent('scroll_depth', {
        'depth_percent': scrollPercentage
      });
    }
  },

  /**
   * Track time spent on page
   */
  trackTimeSpent: (pageTitle, seconds) => {
    trackEvent('time_spent', {
      'page_title': pageTitle,
      'seconds': seconds
    });
  },

  /**
   * Track performance metric
   */
  trackPerformance: (metricName, value, unit = 'ms') => {
    trackEvent('performance_metric', {
      'metric_name': metricName,
      'metric_value': value,
      'metric_unit': unit
    });
  },

  /**
   * Track navigation menu interaction
   */
  trackNavigation: (menuItem, submenuItem = null) => {
    trackEvent('navigation_click', {
      'menu_item': menuItem,
      'submenu_item': submenuItem
    });
  }
};

/**
 * Set user properties (demographics, interests, etc.)
 */
export const setUserProperty = (propertyName, propertyValue) => {
  if (!window.gtag) return;

  window.gtag('set', {
    [propertyName]: propertyValue
  });
};

/**
 * Set user ID (for cross-device tracking)
 * Only after user logs in or identifies themselves
 */
export const setUserId = (userId) => {
  if (!window.gtag) return;

  window.gtag('config', process.env.REACT_APP_GA4_ID, {
    'user_id': userId
  });
};

/**
 * Clear user ID (on logout)
 */
export const clearUserId = () => {
  if (!window.gtag) return;

  window.gtag('config', process.env.REACT_APP_GA4_ID, {
    'user_id': undefined
  });
};

/**
 * Scroll depth tracker
 * Automatically tracks when user scrolls to certain percentages
 */
export const initScrollDepthTracking = () => {
  let scrollPercentages = [25, 50, 75, 100];
  let tracked = new Set();

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    scrollPercentages.forEach(percent => {
      if (scrollPercent >= percent && !tracked.has(percent)) {
        tracked.add(percent);
        analytics.trackScrollDepth(percent);
      }
    });
  });
};

/**
 * Time on page tracker
 * Tracks how long user stays on page before leaving
 */
export const initTimeOnPageTracking = () => {
  let startTime = Date.now();
  let pageTitle = document.title;

  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    if (timeSpent > 5) { // Only track if user spent more than 5 seconds
      analytics.trackTimeSpent(pageTitle, timeSpent);
    }
  });
};

/**
 * Session tracking (page view on component mount)
 */
export const initSessionTracking = () => {
  // Check if this is a new session
  const lastSessionTime = sessionStorage.getItem('sessionStartTime');
  
  if (!lastSessionTime) {
    sessionStorage.setItem('sessionStartTime', Date.now().toString());
    trackEvent('session_start', {
      'timestamp': new Date().toISOString()
    });
  }
};

/**
 * Get current GA4 property ID
 */
export const getGA4PropertyId = () => {
  return process.env.REACT_APP_GA4_ID || null;
};

/**
 * Check if analytics is enabled (user consented)
 */
export const isAnalyticsEnabled = () => {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;
  
  const parsed = JSON.parse(consent);
  return parsed.analytics === true;
};

/**
 * Get consent status
 */
export const getConsentStatus = () => {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return null;
  
  return JSON.parse(consent);
};

const analyticsUtilsModule = {
  initGA4,
  trackPageView,
  trackEvent,
  analytics,
  setUserProperty,
  setUserId,
  clearUserId,
  initScrollDepthTracking,
  initTimeOnPageTracking,
  initSessionTracking,
  getGA4PropertyId,
  isAnalyticsEnabled,
  getConsentStatus
};

export default analyticsUtilsModule;
