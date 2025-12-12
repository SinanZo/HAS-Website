/* ────────────────────────────────────────────────────────── */
/*  src/utils/lighthouseConfig.js – Lighthouse Configuration   */
/* ────────────────────────────────────────────────────────── */

/**
 * Lighthouse configuration for performance audits
 * Run: npm install --save-dev @lhci/cli@0.14.x
 * Then: lhci autorun
 */

export const lighthouseConfig = {
  ci: {
    // Run lighthouse on these URLs
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/products',
        'http://localhost:3000/contact',
        'http://localhost:3000/about'
      ],
      numberOfRuns: 3,
      settings: {
        // Speed up CI runs with configurable throttling
        chromeFlags: ['--window-size=1440,900'],
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        skipAudits: ['uses-webp-images'], // We'll handle image optimization manually
        throttleMethod: 'simulate',
        throttling: {
          rttMs: 40,
          downstreamThroughputKbps: 10240,
          upstreamThroughputKbps: 10240,
          cpuSlowdownMultiplier: 1
        }
      },
      configPath: './src/utils/lighthouseConfig.js'
    },
    
    // Upload results to Lighthouse CI server
    upload: {
      target: 'temporary-public-storage',
    },
    
    // Assert thresholds - fail CI if scores below these
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance targets
        'categories:performance': ['error', { minScore: 0.85 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }], // 2.5s
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.05 }],
        'first-input-delay': ['error', { maxNumericValue: 100 }],
        
        // Accessibility targets
        'categories:accessibility': ['error', { minScore: 0.90 }],
        
        // Best practices
        'categories:best-practices': ['error', { minScore: 0.90 }],
        
        // SEO
        'categories:seo': ['error', { minScore: 0.90 }],
        
        // Security headers
        'no-vulnerable-libraries': ['error', { maxLength: 0 }]
      }
    }
  }
};

/**
 * Core Web Vitals thresholds (Google standards)
 * Good: passing threshold
 * Needs Improvement: warning threshold
 * Poor: critical threshold
 */
export const coreWebVitalsThresholds = {
  LCP: {
    good: 2500,           // 2.5 seconds
    needsImprovement: 4000, // 4 seconds
    poor: Infinity
  },
  FID: {
    good: 100,            // 100 milliseconds
    needsImprovement: 300, // 300 milliseconds
    poor: Infinity
  },
  INP: {
    good: 200,            // 200 milliseconds (replaces FID)
    needsImprovement: 500, // 500 milliseconds
    poor: Infinity
  },
  CLS: {
    good: 0.1,            // 0.1 (10%)
    needsImprovement: 0.25, // 0.25 (25%)
    poor: Infinity
  },
  TTFB: {
    good: 800,            // 800 milliseconds
    needsImprovement: 1800, // 1.8 seconds
    poor: Infinity
  }
};

/**
 * Performance budgets (in milliseconds)
 * Use to track bundle size and load times
 */
export const performanceBudgets = {
  // JavaScript bundle sizes
  bundles: {
    main: {
      size: 150 * 1024, // 150 KB
      gzip: 50 * 1024   // 50 KB gzipped
    },
    vendor: {
      size: 200 * 1024,
      gzip: 65 * 1024
    },
    styles: {
      size: 50 * 1024,
      gzip: 10 * 1024
    }
  },

  // Resource loading times
  resources: {
    imageLoad: 2000,      // 2s
    fontLoad: 1000,       // 1s
    apiCall: 3000,        // 3s
    firstContentfulPaint: 1800, // 1.8s
    largestContentfulPaint: 2500 // 2.5s
  },

  // Total page metrics
  page: {
    initialLoad: 3000,    // 3s
    interactive: 3500,    // 3.5s
    complete: 5000        // 5s
  }
};

/**
 * Optimization checklist
 */
export const optimizationChecklist = [
  {
    category: 'Images',
    items: [
      '✓ Convert images to modern formats (AVIF, WebP)',
      '✓ Use responsive images with srcset',
      '✓ Lazy load images below the fold',
      '✓ Optimize hero image (preload with fetchpriority=high)',
      '✓ Compress all images (TinyPNG, ImageOptim)',
      '✓ Use CSS sprites for icons if needed'
    ]
  },
  {
    category: 'JavaScript',
    items: [
      '✓ Code split with React.lazy()',
      '✓ Tree shake unused dependencies',
      '✓ Minify and compress (gzip, brotli)',
      '✓ Remove dev dependencies from production build',
      '✓ Use dynamic imports for large libraries',
      '✓ Monitor bundle size with webpack-bundle-analyzer'
    ]
  },
  {
    category: 'CSS',
    items: [
      '✓ Minimize CSS (remove unused styles)',
      '✓ Use CSS Grid/Flexbox (no float layouts)',
      '✓ Purge unused Tailwind styles in production',
      '✓ Inline critical CSS above the fold',
      '✓ Load non-critical CSS async with media queries',
      '✓ Use CSS custom properties instead of preprocessor variables'
    ]
  },
  {
    category: 'Caching',
    items: [
      '✓ Set proper Cache-Control headers',
      '✓ Use Service Workers for offline support',
      '✓ Implement browser caching (etag, last-modified)',
      '✓ Cache API responses in localStorage',
      '✓ Use CDN for static assets',
      '✓ Set up HTTP/2 Push for critical resources'
    ]
  },
  {
    category: 'Fonts',
    items: [
      '✓ Use system fonts or limit web fonts to 2-3',
      '✓ Load fonts with font-display: swap',
      '✓ Use variable fonts to reduce file size',
      '✓ Preload fonts in <head>',
      '✓ Use WOFF2 format with fallbacks',
      '✓ Subset fonts to only needed characters'
    ]
  },
  {
    category: 'Server',
    items: [
      '✓ Enable gzip compression',
      '✓ Enable HTTP/2',
      '✓ Set up CDN with edge locations',
      '✓ Implement server-side caching',
      '✓ Use HTTPS/TLS 1.3',
      '✓ Minimize TTFB with faster server response'
    ]
  },
  {
    category: 'Third-party Scripts',
    items: [
      '✓ Load tracking scripts async/defer',
      '✓ Use Facade pattern for embeds (YouTube, maps)',
      '✓ Audit third-party impact regularly',
      '✓ Remove unused tracking pixels',
      '✓ Use web worker for expensive computations',
      '✓ Defer non-critical scripts'
    ]
  }
];

/**
 * Bundle analysis report structure
 */
export const bundleAnalysisReport = {
  timestamp: new Date().toISOString(),
  bundles: [],
  metrics: {
    totalSize: 0,
    totalGzipped: 0,
    largestBundle: '',
    recommendations: []
  }
};

/**
 * Performance monitoring script injection
 * Add to index.html <head> before other scripts
 */
export const performanceMonitoringScript = `
<script>
  window.performanceMetrics = {};
  
  // Mark key moments in page load
  window.performance.mark('navigation-start');
  
  // Track when each resource completes
  if ('PerformanceObserver' in window) {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.initiatorType === 'script' || entry.initiatorType === 'link') {
          window.performanceMetrics[entry.name] = entry.duration;
        }
      }
    }).observe({ entryTypes: ['resource'] });
  }
</script>
`;

const lighthouseConfigModule = {
  lighthouseConfig,
  coreWebVitalsThresholds,
  performanceBudgets,
  optimizationChecklist,
  bundleAnalysisReport,
  performanceMonitoringScript
};

export default lighthouseConfigModule;
