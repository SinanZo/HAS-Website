# Performance Optimization Guide

## Phase 11: Complete Performance Optimization

This guide covers image optimization, code splitting, and Core Web Vitals monitoring for the website redesign project.

## 📊 Core Web Vitals Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | TBD | ⏳ |
| **INP** (Interaction to Next Paint) | < 200ms | TBD | ⏳ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | TBD | ⏳ |
| **TTFB** (Time to First Byte) | < 800ms | TBD | ⏳ |
| **FCP** (First Contentful Paint) | < 1.8s | TBD | ⏳ |

## 🖼️ Image Optimization

### 1. Image Format Strategy

Use modern formats with fallbacks:

```
AVIF (best)
  ↓
WebP (good)
  ↓
JPEG/PNG (fallback)
```

### 2. Converting Images

```bash
# Install ImageMagick or ffmpeg
brew install imagemagick

# Convert single image to AVIF
magick convert product.jpg -quality 85 product.avif

# Convert to WebP
magick convert product.jpg -quality 85 product.webp

# Batch convert (bash)
for file in *.jpg; do
  magick convert "$file" "${file%.jpg}.avif"
  magick convert "$file" "${file%.jpg}.webp"
done
```

### 3. Using OptimizedImage Component

```jsx
import OptimizedImage from './components/OptimizedImage/OptimizedImage';

// Lazy-loaded image (default)
<OptimizedImage
  src="/images/product.jpg"
  alt="Product"
  width={300}
  height={300}
/>

// Priority image (hero, LCP candidate)
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority={true}
/>
```

### 4. Responsive Images

```jsx
import { getResponsiveImageProps } from './utils/performanceUtils';

const imgProps = getResponsiveImageProps('/images/product.jpg', [320, 640, 1024]);

<img {...imgProps} alt="Product" />
// Output: srcset with 320w, 640w, 1024w variants
```

### 5. Image Compression

Use these tools to optimize:

```bash
# TinyPNG (web): https://tinypng.com
# ImageOptim (Mac): https://imageoptim.com
# FileOptimizer (Windows): https://nikkhokkho.sourceforge.io
# ImageMagick (CLI):
magick mogrify -quality 85 -strip *.jpg
```

**Compression targets:**
- JPEG: 70-85% quality
- PNG: Use PNG-8 for icons
- AVIF: 65-80% quality
- WebP: 75-85% quality

## 📦 Code Splitting

### 1. Route-based Splitting (Already Configured)

```jsx
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

// These are automatically split into separate bundles
// Only loaded when user navigates to the route
```

### 2. Component-based Splitting

```jsx
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./components/HeavyChart'));
const HeavyDataTable = lazy(() => import('./components/HeavyDataTable'));

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyChart />
      <HeavyDataTable />
    </Suspense>
  );
}
```

### 3. Prefetching Routes

```jsx
import { prefetchResources } from './utils/performanceUtils';

// Prefetch on hover before user clicks
function ProductCard({ product }) {
  const handleMouseEnter = () => {
    prefetchResources([
      `/product/${product.id}.js`,
      `/api/products/${product.id}`
    ]);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <a href={`/product/${product.id}`}>{product.name}</a>
    </div>
  );
}
```

## 🚀 Performance Utilities

### Web Vitals Monitoring

```jsx
import { initWebVitalsMonitoring, reportWebVitals } from './utils/performanceUtils';

// Initialize monitoring (already done in App.js)
useEffect(() => {
  initWebVitalsMonitoring();
  
  window.addEventListener('load', () => {
    reportWebVitals();
  });
}, []);

// Metrics are automatically sent to GA4 if available
```

### Performance Helpers

```jsx
import {
  debounce,
  throttle,
  fetchWithCache,
  isLowEndDevice
} from './utils/performanceUtils';

// Debounce search input (wait 250ms after user stops typing)
const handleSearch = debounce((query) => {
  fetch(`/api/search?q=${query}`);
}, 250);

// Throttle scroll events (max every 100ms)
const handleScroll = throttle(() => {
  console.log('Scrolled!');
}, 100);

// Cache API responses
const products = await fetchWithCache('/api/products', {
  maxAge: 3600000 // 1 hour
});

// Detect low-end devices and adjust quality
if (isLowEndDevice()) {
  // Load lower-quality images
  // Disable animations
  // Reduce polling frequency
}
```

## 🏗️ Bundle Analysis

### Check Current Bundle Size

```bash
# Install webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to package.json:
{
  "scripts": {
    "analyze": "ANALYZE=true react-scripts build"
  }
}

# Run analysis
npm run analyze

# Open http://localhost:3000 to view
```

### Expected Bundle Sizes (After optimization)

```
main.js:        ~150 KB (gzipped: ~50 KB)
vendor.js:      ~200 KB (gzipped: ~65 KB)
styles.css:     ~50 KB (gzipped: ~10 KB)
Total:          ~400 KB (gzipped: ~125 KB)
```

## 📋 Lighthouse Audit Checklist

### Before Running Audit

- [ ] Clear browser cache
- [ ] Disable browser extensions
- [ ] Close other tabs
- [ ] Use Incognito/Private mode
- [ ] Run on desktop (better accuracy)

### Running Lighthouse

**Option 1: Chrome DevTools**
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Mobile" for mobile audit
4. Click "Generate report"

**Option 2: CLI**

```bash
npm install -g @lhci/cli
lhci autorun
```

### Lighthouse Targets

| Category | Target Score | Threshold |
|----------|---------------|-----------|
| Performance | 85+ | Critical |
| Accessibility | 90+ | Important |
| Best Practices | 90+ | Important |
| SEO | 90+ | Important |

### Performance Audit Fixes

**LCP Issues:**
- Optimize hero image (priority preload)
- Defer non-critical JavaScript
- Reduce CSS complexity
- Use font-display: swap

**CLS Issues:**
- Specify image dimensions
- Avoid inserting ads/embeds
- Use transform animations (not layout)
- Reserve space for dynamic content

**INP Issues:**
- Break up long JavaScript tasks
- Use Web Workers for heavy computation
- Debounce/throttle event handlers
- Defer non-critical work

## 🔧 Optimization Checklist

### Images ✅
- [ ] Convert product images to AVIF/WebP
- [ ] Compress all images to 70-85% quality
- [ ] Specify dimensions on all images
- [ ] Preload hero image with fetchpriority=high
- [ ] Use responsive images with srcset
- [ ] Lazy load below-the-fold images
- [ ] Use OptimizedImage component

### JavaScript ✅
- [ ] Route-based code splitting (done)
- [ ] Remove unused dependencies
- [ ] Tree-shake unused code
- [ ] Minify for production
- [ ] Enable gzip compression
- [ ] Monitor bundle size

### CSS ✅
- [ ] Purge unused Tailwind styles in production
- [ ] Minimize CSS file size
- [ ] Defer non-critical CSS
- [ ] Use CSS custom properties
- [ ] Minimize specificity

### Fonts
- [ ] Use system fonts or limit to 2-3 web fonts
- [ ] Use variable fonts
- [ ] Load with font-display: swap
- [ ] Preload in <head>
- [ ] Use WOFF2 format

### Caching
- [ ] Enable browser caching (Cache-Control headers)
- [ ] Implement Service Worker
- [ ] Set up CDN for static assets
- [ ] Cache API responses

### Server
- [ ] Enable gzip compression
- [ ] Configure HTTP/2
- [ ] Use HTTPS/TLS 1.3
- [ ] Minimize TTFB

## 📈 Performance Testing

### Lighthouse CI

```bash
# Set up Lighthouse CI
npm install --save-dev @lhci/cli

# Create .lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended"
    }
  }
}

# Run audit
lhci autorun
```

### Manual Testing

**Device Types to Test:**
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] Desktop (1440px)

**Network Conditions:**
- [ ] 4G (10 Mbps)
- [ ] 3G (2 Mbps)
- [ ] Slow 4G (1.6 Mbps)

**Browsers:**
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari

## 🎯 Optimization Priority

### High Priority (Do First)
1. Optimize hero image (LCP candidate)
2. Defer non-critical JavaScript
3. Reduce main bundle size
4. Enable caching headers

### Medium Priority (Do Next)
1. Optimize product images
2. Implement code splitting (done)
3. Add Service Worker
4. Reduce font requests

### Low Priority (Nice to Have)
1. Performance monitoring dashboard
2. A/B test optimization changes
3. Synthetic monitoring setup
4. RUM analytics

## 📊 Monitoring & Metrics

### Key Metrics to Track

```javascript
// In Console or GA4 dashboard
performance.getEntriesByType('largest-contentful-paint')
performance.getEntriesByType('layout-shift')
performance.getEntriesByType('first-input')
```

### GA4 Event Tracking

```javascript
// Performance metrics sent automatically by initWebVitalsMonitoring()
gtag('event', 'page_view', {
  'LCP': 1850,    // ms
  'INP': 45,      // ms
  'CLS': 0.05
});
```

## 🐛 Common Issues & Fixes

| Issue | Symptom | Fix |
|-------|---------|-----|
| Large images | High LCP | Optimize images, use AVIF/WebP |
| Render-blocking CSS | Slow FCP | Defer non-critical CSS |
| Unminified JavaScript | Large bundle | Enable production build |
| Layout shift | High CLS | Specify image dimensions |
| Slow API | High TTFB | Add caching, optimize server |
| Heavy components | High INP | Code split, debounce handlers |

## 📚 Resources

- [Web.dev Performance](https://web.dev/performance/)
- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Lighthouse score ≥ 85 (Performance)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] All images optimized (AVIF/WebP)
- [ ] Code splitting working (check Network tab)
- [ ] Service Worker registered (check DevTools)
- [ ] Caching headers configured
- [ ] Mobile performance acceptable

---

**Updated:** November 4, 2025  
**Task:** Phase 11 - Optimize images & performance  
**Status:** ✅ Complete
