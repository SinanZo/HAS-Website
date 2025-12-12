/* ────────────────────────────────────────────────────────── */
/*  src/utils/performanceUtils.js – Performance Optimization   */
/* ────────────────────────────────────────────────────────── */

import React from 'react';

/**
 * Performance utilities for image optimization, code splitting,
 * and Core Web Vitals monitoring.
 */

/**
 * Get the best image format based on browser support
 * Returns { srcset, src } for <img> elements
 * Supports: AVIF (best) > WebP > JPEG/PNG (fallback)
 */
export const getOptimizedImageSrc = (basePath, formats = {}) => {
  const {
    avif = null,
    webp = null,
    fallback = null
  } = formats;

  return {
    srcSet: [
      avif && `${avif} 1x, ${avif.replace(/\.avif/, '@2x.avif')} 2x`,
      webp && `${webp} 1x, ${webp.replace(/\.webp/, '@2x.webp')} 2x`,
      fallback && `${fallback} 1x, ${fallback.replace(/\.\w+$/, m => '@2x' + m)} 2x`
    ].filter(Boolean).join(', '),
    src: fallback || webp || avif,
    // For picture element sources
    sources: [
      avif && { type: 'image/avif', srcSet: avif },
      webp && { type: 'image/webp', srcSet: webp },
      fallback && { type: 'image/jpeg', srcSet: fallback }
    ].filter(Boolean)
  };
};

/**
 * Lazy load images with Intersection Observer
 * Usage: <img {...lazyImageProps} />
 */
export const useLazyImage = (src, placeholder = 'data:image/svg+xml,...') => {
  const [imageSrc, setImageSrc] = React.useState(placeholder);
  const [imageRef, setImageRef] = React.useState(null);

  React.useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = src;
          img.onload = () => {
            setImageSrc(src);
            observer.unobserve(img);
          };
        }
      });
    }, {
      rootMargin: '50px'
    });

    observer.observe(imageRef);
    return () => observer.disconnect();
  }, [imageRef, src]);

  return {
    ref: setImageRef,
    src: imageSrc,
    loading: 'lazy',
    decoding: 'async'
  };
};

/**
 * Preload critical images with fetchpriority
 * Usage: <img {...preloadImageProps} />
 */
export const getPreloadImageProps = (src, priority = 'high') => ({
  src,
  loading: priority === 'high' ? 'eager' : 'lazy',
  fetchPriority: priority, // high | low | auto (default)
  decoding: 'async'
});

/**
 * Generate responsive image srcset
 * Usage: <img {...getResponsiveImageProps('/image.jpg')} />
 */
export const getResponsiveImageProps = (baseSrc, sizes = [320, 640, 1024, 1280]) => {
  const ext = baseSrc.match(/\.\w+$/)?.[0] || '.jpg';
  const baseName = baseSrc.replace(ext, '');

  return {
    srcSet: sizes
      .map(size => `${baseName}-${size}w${ext} ${size}w`)
      .join(', '),
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    src: baseSrc
  };
};

/**
 * Monitor Core Web Vitals (LCP, CLS, INP)
 * Reports metrics to analytics or console
 */
export const initWebVitalsMonitoring = () => {
  // Largest Contentful Paint (LCP) - target: < 2.5s
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            'LCP': Math.round(lastEntry.renderTime || lastEntry.loadTime)
          });
        }
        
        console.log('LCP:', Math.round(lastEntry.renderTime || lastEntry.loadTime), 'ms');
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.warn('LCP monitoring failed:', e);
    }

    // Cumulative Layout Shift (CLS) - target: < 0.05
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = clsValue;
            clsValue += entry.value;
            
            if (clsValue !== firstSessionEntry) {
              console.log('CLS:', clsValue.toFixed(3));
              
              if (window.gtag) {
                window.gtag('event', 'page_view', {
                  'CLS': clsValue.toFixed(3)
                });
              }
            }
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      console.warn('CLS monitoring failed:', e);
    }

    // Interaction to Next Paint (INP) - target: < 200ms
    try {
      const inpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            'INP': Math.round(lastEntry.processingDuration)
          });
        }
        
        console.log('INP:', Math.round(lastEntry.processingDuration), 'ms');
      });
      inpObserver.observe({ type: 'event', buffered: true });
    } catch (e) {
      console.warn('INP monitoring failed:', e);
    }
  }
};

/**
 * Optimize bundle by prefetching resources
 */
export const prefetchResources = (urls = []) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'script';
    document.head.appendChild(link);
  });
};

/**
 * DNS prefetch for external resources
 */
export const dnsPrefetch = (domains = []) => {
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `https://${domain}`;
    document.head.appendChild(link);
  });
};

/**
 * Preconnect to external origins (for fonts, CDNs)
 */
export const preconnect = (origins = []) => {
  origins.forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Report performance metrics to analytics
 * Call this after page loads
 */
export const reportWebVitals = () => {
  if ('navigation' in window.performance) {
    const navTiming = window.performance.getEntriesByType('navigation')[0];
    
    const metrics = {
      'dns_time': Math.round(navTiming.domainLookupEnd - navTiming.domainLookupStart),
      'tcp_time': Math.round(navTiming.connectEnd - navTiming.connectStart),
      'ttfb': Math.round(navTiming.responseStart - navTiming.requestStart),
      'fcp': Math.round(navTiming.domContentLoadedEventEnd - navTiming.navigationStart),
      'load_time': Math.round(navTiming.loadEventEnd - navTiming.navigationStart)
    };

    console.table(metrics);

    if (window.gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        window.gtag('event', 'performance_metric', {
          metric_name: key,
          metric_value: value
        });
      });
    }

    return metrics;
  }
};

/**
 * Memory optimization: detect if running on low-end device
 */
export const isLowEndDevice = () => {
  if ('deviceMemory' in navigator) {
    return navigator.deviceMemory < 4; // Less than 4GB RAM
  }
  
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return connection.effectiveType === '4g' && connection.saveData;
  }

  return false;
};

/**
 * Get optimal image quality based on device
 */
export const getOptimalImageQuality = () => {
  const isLowEnd = isLowEndDevice();
  
  if (isLowEnd) {
    return { quality: 0.6, format: 'webp' };
  }

  if ('connection' in navigator && navigator.connection.effectiveType === '3g') {
    return { quality: 0.75, format: 'webp' };
  }

  return { quality: 0.9, format: 'avif' };
};

/**
 * Service Worker registration for offline support and caching
 */
export const registerServiceWorker = (swPath = '/service-worker.js') => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(swPath)
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.warn('Service Worker registration failed:', error);
        });
    });
  }
};

/**
 * Enable request caching for better performance
 * Use with Fetch API
 */
export const fetchWithCache = async (url, options = {}) => {
  const cacheKey = `fetch-cache-${url}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    const maxAge = options.maxAge || 3600000; // 1 hour default
    
    if (Date.now() - timestamp < maxAge) {
      return JSON.parse(data);
    }
  }

  const response = await fetch(url, options);
  const data = await response.json();

  localStorage.setItem(cacheKey, JSON.stringify({
    data: JSON.stringify(data),
    timestamp: Date.now()
  }));

  return data;
};

/**
 * Debounce function for event handlers
 */
export const debounce = (func, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function for performance-critical handlers
 */
export const throttle = (func, delay = 100) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

/**
 * RequestIdleCallback polyfill for browsers that don't support it
 */
export const scheduleIdleTask = (callback, options = {}) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  } else {
    return setTimeout(callback, 1);
  }
};

/**
 * Get performance summary for logging/debugging
 */
export const getPerformanceSummary = () => {
  if (!('performance' in window)) return null;

  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

  return {
    pageLoadTime: `${pageLoadTime}ms`,
    dns: `${perfData.domainLookupEnd - perfData.domainLookupStart}ms`,
    tcp: `${perfData.connectEnd - perfData.connectStart}ms`,
    request: `${perfData.responseStart - perfData.requestStart}ms`,
    response: `${perfData.responseEnd - perfData.responseStart}ms`,
    dom: `${perfData.domComplete - perfData.domInteractive}ms`,
    resources: `${perfData.loadEventEnd - perfData.domComplete}ms`
  };
};

const performanceUtils = {
  getOptimizedImageSrc,
  useLazyImage,
  getPreloadImageProps,
  getResponsiveImageProps,
  initWebVitalsMonitoring,
  prefetchResources,
  dnsPrefetch,
  preconnect,
  reportWebVitals,
  isLowEndDevice,
  getOptimalImageQuality,
  registerServiceWorker,
  fetchWithCache,
  debounce,
  throttle,
  scheduleIdleTask,
  getPerformanceSummary
};

export default performanceUtils;
