# Hilmi Abu Sham & Partners - Modern Website Redesign

## Project Overview

This is a comprehensive redesign of hilmiabusham.com to be a modern, fast, bilingual (English/Arabic), pixel-perfect responsive website with strong SEO and flawless UX across all devices.

**Key Features**:
- ✓ Token-based design system with semantic CSS variables
- ✓ Light & Dark mode with WCAG 2.2 AA contrast compliance
- ✓ Full bilingual support (EN/AR) with RTL/LTR layout
- ✓ Accessible components with proper ARIA and keyboard navigation
- ✓ Performance optimized for Core Web Vitals
- ✓ SEO-friendly with structured data (schema.org)
- ✓ Robust form handling with spam protection
- ✓ GA4 analytics and GDPR consent management

---

## Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build
```

### Environment Setup

Create `.env.local`:
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_GA_ID=G_XXXXXXXXXX
```

### First Run Checklist

1. Language switcher appears in navbar ✓
2. Theme switcher (light/dark) appears in navbar ✓
3. Language switching updates `<html dir>` attribute ✓
4. Dark mode toggle persists to localStorage ✓
5. All pages render without errors ✓
6. Product images load ✓
7. Filters are visible ✓

---

## Project Structure

### Core Design Files

```
src/
├── styles/
│   ├── tokens.css          # Semantic design tokens (colors, spacing, etc.)
│   ├── rtl.css             # RTL/LTR utilities and logical properties
│   └── theme.css           # Component-level semantic styles
├── components/
│   ├── LanguageSwitcher/   # Language toggle (EN/AR)
│   └── ThemeSwitcher/      # Dark/Light mode toggle
└── utils/
    ├── filterUtils.js      # Filter handling with stable keys
    └── seoUtils.js         # SEO meta, schema.org markup
```

### Locale Files

```
src/locales/
├── en.json    # English translations (expand with feature-based split)
└── ar.json    # Arabic translations (expand with feature-based split)
```

### Documentation

```
├── DESIGN_SYSTEM.md        # Complete design system guide
├── IMPLEMENTATION_GUIDE.md # Step-by-step implementation plan
└── README.md              # This file
```

---

## Design System

### Color Tokens

All colors use CSS custom properties (variables) and support both light and dark modes:

```css
/* Primary Colors (Semantic) */
--primary: hsl(188, 85%, 32%);        /* Main brand color (#034D58) */
--accent: hsl(45, 100%, 50%);         /* Secondary brand (#FFCC00) */

/* Neutral Colors (Grayscale) */
--bg: hsl(0, 0%, 100%);               /* Light mode background */
--fg: hsl(0, 0%, 20%);                /* Primary text (4.5:1 contrast) */
--fg-secondary: hsl(0, 0%, 40%);      /* Secondary text (7:1 contrast) */
--fg-muted: hsl(0, 0%, 60%);          /* Muted text (3.5:1 contrast) */

/* Status Colors */
--success-500: hsl(150, 75%, 45%);    /* Green */
--warning-500: hsl(35, 100%, 45%);    /* Orange */
--error-500: hsl(0, 84%, 60%);        /* Red */
--info-500: hsl(200, 100%, 45%);      /* Blue */
```

### Spacing Scale

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
```

### Typography

- **English**: System font stack (-apple-system, Segoe UI, Roboto, etc.)
- **Arabic**: Tajawal (Google Fonts) - optimized for Arabic readability and diacritics

---

## Bilingual & RTL/LTR

### Language Switching

Language switcher automatically:
1. Sets `dir="rtl"` or `dir="ltr"` on `<html>` element
2. Toggles `font-family` between Arabic and English
3. Persists choice to `localStorage`
4. Triggers `languageChange` event for component re-initialization

```jsx
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

<LanguageSwitcher />  {/* Shows EN/AR buttons */}
```

### Logical CSS Properties

Instead of `left`/`right`, use logical properties that auto-flip:

```css
/* ❌ Won't work in RTL */
.sidebar { margin-left: 1rem; }

/* ✓ Auto-flips in RTL */
.sidebar { margin-inline-start: 1rem; }
```

**Common Conversions**:
| Physical | Logical |
|----------|---------|
| `left` | `inset-inline-start` |
| `right` | `inset-inline-end` |
| `margin-left` | `margin-inline-start` |
| `padding-right` | `padding-inline-end` |
| `text-align: left` | `text-align: start` |

### Flexbox Direction

Use `.flex-row` class which auto-reverses in RTL:

```jsx
<nav className="flex-row gap-md">
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>

/* In RTL mode, this automatically becomes flex-direction: row-reverse */
```

---

## Accessibility (WCAG 2.2 AA)

### Contrast Requirements

✓ **Body text**: 4.5:1 ratio (dark text on light background)
✓ **UI elements**: 3:1 ratio (icons, borders)
✓ **Dark mode**: Same standards apply with inverted colors

### Keyboard Navigation

All interactive elements are keyboard accessible:
- `Tab` - navigate between interactive elements
- `Enter`/`Space` - activate buttons
- `Escape` - close modals, menus
- `Arrow keys` - navigate lists, menus

### Focus Indicators

All focusable elements have visible focus indicators:

```css
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### Semantic HTML

```jsx
<header>Navigation</header>
<nav>Links</nav>
<main id="main-content">Page Content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>
```

### ARIA Labels

```jsx
<button aria-label="Close menu" onClick={handleClose}>✕</button>
<div role="alert" className="alert alert-error">Error message</div>
<nav aria-label="Main navigation">...</nav>
```

---

## Filters & Category Management

### Stable Filter Keys

Filters use stable keys (not translated labels) to work correctly in all languages:

```javascript
const FILTER_KEYS = {
  safetyHelmets: 'safety_helmets',
  disposableMasks: 'disposable_masks',
  // ... more categories
  price50to100: 'price_50_to_100',
  threeM: 'manufacturer_3m',
};
```

### Filter Implementation

```jsx
import { encodeFilters, decodeFilters, applyFilters } from './utils/filterUtils';

const [activeFilters, setActiveFilters] = useState(
  decodeFilters(searchParams.get('f'))
);

// Apply filters
const filtered = applyFilters(products, activeFilters);

// Save to URL
const encoded = encodeFilters(activeFilters);
setSearchParams({ f: encoded });
```

### URL Query Parameters

Filter state persists in URL for:
- Sharing filtered results
- Browser back/forward navigation
- Bookmarking filtered views

Example: `/products?f=safety_helmets%2Cprice_under_50`

---

## Performance Targets

### Core Web Vitals

| Metric | Target | How to Achieve |
|--------|--------|---------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Preload hero image, optimize JS |
| **CLS** (Cumulative Layout Shift) | < 0.05 | Fixed height headers, reserve space |
| **INP** (Interaction to Next Paint) | < 200ms | Debounce filters, defer scripts |

### Image Optimization

```jsx
/* Hero - Preload & High Priority */
<link rel="preload" as="image" href="hero.jpg" fetchPriority="high" />

/* Product Cards - Lazy Load */
<img
  src="product.jpg"
  srcSet="product-small.jpg 640w, product-large.jpg 1920w"
  loading="lazy"
  alt={product.name}
/>
```

### Code Splitting

```jsx
// Lazy load pages to reduce initial bundle
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
```

---

## SEO & Structured Data

### Meta Tags

Every page includes:
```html
<title>Unique, Descriptive Title (30-60 chars)</title>
<meta name="description" content="Compelling summary (120-160 chars)">
<meta name="keywords" content="relevant, keywords, here">
<link rel="canonical" href="https://example.com/page">
```

### Open Graph & Twitter Cards

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="1200x630 image">
<meta name="twitter:card" content="summary_large_image">
```

### Schema.org Markup

Structured data for:
- **Organization**: Company info, contact, address
- **Product**: Name, description, price, availability
- **BreadcrumbList**: Navigation hierarchy
- **WebSite**: Site search functionality

```jsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify(getProductSchema(product))}
  </script>
</Helmet>
```

### Sitemap & Robots

```
/public/sitemap.xml      # All indexable pages
/public/robots.txt       # Crawl directives
```

---

## Forms & Contact

### Contact Form

Features:
- ✓ Bilingual validation
- ✓ Honeypot spam protection
- ✓ Required field indicators
- ✓ Error & success states
- ✓ WhatsApp integration

```jsx
<form onSubmit={handleSubmit}>
  <label className="form-label form-label-required">
    {t('forms.email')}
  </label>
  <input
    type="email"
    className="form-input"
    required
    aria-required="true"
  />
  <span className="form-error-text">{errors.email}</span>
</form>
```

### WhatsApp CTA

```jsx
const whatsappUrl = `https://wa.me/962764123456?text=${encodeURIComponent(message)}`;
<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
  Contact on WhatsApp
</a>
```

---

## Analytics & Consent

### GA4 Integration

```jsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G_XXXXXXXXXX');

// Track events
const trackFilterApply = (filters) => {
  ReactGA.event('filter_apply', { filters });
};
```

### GDPR Consent Banner

- Modal appears on first visit
- Bilingual (EN/AR)
- Allow/Reject buttons
- Persists choice to localStorage
- No analytics until consent

---

## Component Library

### Available Classes

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Cards -->
<div class="card">Card content</div>
<div class="card card-elevated">Elevated card</div>

<!-- Badges -->
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>

<!-- Alerts -->
<div class="alert alert-success">Success message</div>
<div class="alert alert-error">Error message</div>

<!-- Forms -->
<div class="form-group">
  <label class="form-label">Label</label>
  <input class="form-input" type="text" />
</div>

<!-- Product Cards -->
<div class="product-card">
  <img class="product-image" src="..." />
  <div class="product-content">
    <span class="product-category">Category</span>
    <h3 class="product-title">Product</h3>
    <p class="product-description">Desc</p>
    <div class="product-price">150 JD</div>
    <div class="product-footer">
      <button class="btn btn-primary">Order</button>
    </div>
  </div>
</div>

<!-- Filter Chips -->
<button class="filter-chip active">Safety Helmets</button>
```

---

## Testing

### Manual Testing

- [ ] Test language switch (EN ↔ AR)
- [ ] Test theme switch (Light ↔ Dark)
- [ ] Navigate products with filters
- [ ] Submit contact form
- [ ] Mobile responsive (375px - 1920px)
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] No horizontal scroll in RTL mobile

### Automated Testing

```bash
# Lighthouse audit
npx lighthouse https://localhost:3000 --view

# Accessibility tests
npm test

# E2E tests (Playwright)
npm run test:e2e
```

### Performance Testing

```bash
# Check bundle size
npm run build && npm run analyze

# Core Web Vitals
npm run test:vitals
```

---

## Deployment

### Production Build

```bash
npm run build

# Output: build/ directory with optimized assets
```

### Security Headers

Configure these headers on your server:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' ...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Caching Strategy

```
# Assets with hash (cache forever)
/build/static/* → max-age=31536000

# HTML files (revalidate daily)
/index.html → max-age=86400, must-revalidate

# API responses (short TTL)
/api/* → max-age=300, no-cache
```

### Environment Variables

```env
# .env.production
REACT_APP_API_URL=https://api.hilmiabusham.com
REACT_APP_GA_ID=G_PRODUCTION_ID
REACT_APP_ENVIRONMENT=production
```

---

## Troubleshooting

### Language Switch Not Working

1. Check `LanguageSwitcher` is imported in `Navbar`
2. Verify `i18n.jsx` has both EN and AR locales
3. Check browser console for i18next errors
4. Clear localStorage: `localStorage.clear()`

### Filters Not Persisting

1. Check URL has `?f=` parameter
2. Verify `encodeFilters`/`decodeFilters` working
3. Check filter keys match `FILTER_KEYS` in `filterUtils.js`
4. Re-initialize filters on language change

### RTL Layout Breaking

1. Ensure `<html dir="rtl">` is set
2. Use logical properties (`margin-inline-start`, not `margin-left`)
3. Check for hardcoded `left`/`right` in CSS
4. Test in Firefox Developer Tools (RTL mode)

### Images Not Loading

1. Check image paths are relative or absolute HTTPS
2. Enable CORS if loading from CDN
3. Use WebP format with JPG fallback
4. Check lazy-loading not breaking LCP

---

## Resources

### Documentation
- [Design System Guide](./DESIGN_SYSTEM.md)
- [Implementation Guide](./IMPLEMENTATION_GUIDE.md)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web.dev](https://web.dev/vitals/) - Core Web Vitals
- [WCAG 2.2 Checklist](https://www.w3.org/WAI/WCAG22/quickref/)
- [Schema.org Validator](https://validator.schema.org/)

### References
- [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [RTL Styling Best Practices](https://www.w3.org/International/questions/qa-html-dir)
- [React i18next](https://react.i18next.com/)
- [Tajawal Font](https://fonts.google.com/specimen/Tajawal)

---

## Contributing

### Code Style

- Use semantic HTML
- Use CSS variables for colors/spacing (from `tokens.css`)
- Use logical properties for layouts
- Test in both EN and AR
- Check contrast ratios (4.5:1 minimum)
- Add ARIA labels where needed

### Pull Request Checklist

- [ ] Tested in light and dark modes
- [ ] Tested in English and Arabic
- [ ] No console errors or warnings
- [ ] Lighthouse score > 90
- [ ] Mobile responsive (375px+)
- [ ] Keyboard navigable
- [ ] Includes updated translations

---

## Support

For questions or issues:
1. Check the [Implementation Guide](./IMPLEMENTATION_GUIDE.md)
2. Review the [Design System Guide](./DESIGN_SYSTEM.md)
3. Open an issue on GitHub
4. Contact the development team

---

**Version**: 1.0.0  
**Last Updated**: November 4, 2025  
**Maintained By**: Development Team

