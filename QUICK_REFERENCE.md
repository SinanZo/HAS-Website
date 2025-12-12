<!-- Quick Reference Guide: Design System & Implementation -->

# Quick Reference: Design System & Development

## 🎨 Colors

### Using Colors

```jsx
// ✓ DO - Use semantic tokens
<button className="bg-primary text-white">Submit</button>
<div className="bg-surface border-border">Card</div>

// ❌ DON'T - Hardcode colors
<button style={{backgroundColor: '#034d58'}}>Submit</button>
```

### CSS Classes Available

```css
/* Background */
.bg-primary, .bg-accent, .bg-success, .bg-warning, .bg-error, .bg-info
.bg-surface, .bg-surface-secondary
.bg-fg, .bg-fg-secondary, .bg-fg-muted

/* Text Color */
.text-primary, .text-accent, .text-success, .text-warning, .text-error
.text-fg, .text-fg-secondary, .text-fg-muted

/* Border Color */
.border-border, .border-border-subtle
.border-primary, .border-accent
```

---

## 📐 Spacing

### Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `--space-xs` | 4px | Tiny gaps |
| `--space-sm` | 8px | Small gaps |
| `--space-md` | 16px | Default gap |
| `--space-lg` | 24px | Section spacing |
| `--space-xl` | 32px | Large spacing |
| `--space-2xl` | 48px | Hero spacing |

### Usage

```jsx
<div className="p-md mb-lg">
  Padding medium, margin-bottom large
</div>

<div className="gap-md flex">
  Gap medium in flex container
</div>
```

---

## 🔤 Typography

### Font Stack

```css
/* English */
font-family: var(--font-sans);

/* Arabic - Automatic */
html[dir="rtl"] { font-family: var(--font-arabic); }
```

### Text Classes

```html
<h1 class="text-4xl font-bold">Large Heading</h1>
<h2 class="text-3xl font-bold">Medium Heading</h2>
<h3 class="text-2xl font-semibold">Subheading</h3>
<p class="text-base text-fg">Body text</p>
<small class="text-sm text-fg-muted">Small text</small>
```

### Arabic Tips

```css
/* Arabic fonts render better without extra letter-spacing */
html[dir="rtl"] h1 {
  letter-spacing: 0;
}

/* Ensure proper diacritics rendering */
html[dir="rtl"] {
  font-feature-settings: "rlig" 1;
}
```

---

## 🌍 Bilingual (EN/AR)

### Language Switching

```jsx
import { useTranslation } from 'react-i18next';

export default function Component() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
      <button onClick={() => i18n.changeLanguage('ar')}>
        العربية
      </button>
    </div>
  );
}
```

### LanguageSwitcher Component

```jsx
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

<header>
  <LanguageSwitcher />  {/* Automatically sets dir="rtl" or "ltr" */}
</header>
```

---

## 📱 RTL/LTR Layouts

### Logical Properties Cheat Sheet

| Do This | Instead Of |
|---------|-----------|
| `margin-inline-start: 1rem` | `margin-left: 1rem` |
| `margin-inline-end: 1rem` | `margin-right: 1rem` |
| `padding-inline: 1rem` | `padding-left/right: 1rem` |
| `inset-inline-start: 0` | `left: 0` |
| `text-align: start` | `text-align: left` |
| `border-inline-start: 1px` | `border-left: 1px` |
| `border-start-start-radius: 0.5rem` | `border-top-left-radius: 0.5rem` |

### Flex Direction Auto-Flip

```jsx
// This automatically becomes flex-direction: row-reverse in RTL
<nav className="flex-row gap-md">
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

### Icon Before/After Text

```jsx
// Icon slides before text (auto-flips in RTL)
<span className="icon-before">
  <Icon />
  <span>Label</span>
</span>

// Icon slides after text (auto-flips in RTL)
<span className="icon-after">
  <span>Label</span>
  <Icon />
</span>
```

---

## 🔘 Components

### Buttons

```jsx
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Call to Action</button>
<button className="btn btn-ghost">Outline</button>

// Sizes
<button className="btn btn-sm">Small</button>
<button className="btn btn-lg">Large</button>

// With Icon
<button className="btn btn-primary flex gap-sm items-center">
  <Icon />
  <span>Label</span>
</button>
```

### Cards

```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Content</p>
</div>

<div className="card card-elevated">
  Elevated on hover
</div>
```

### Badges

```jsx
<span className="badge badge-primary">New</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-error">Error</span>
```

### Forms

```jsx
<div className="form-group">
  <label className="form-label form-label-required">
    Email Address
  </label>
  <input
    type="email"
    className="form-input"
    placeholder="you@example.com"
    required
  />
  <span className="form-help-text">
    We'll never share your email
  </span>
  {error && (
    <span className="form-error-text">{error}</span>
  )}
</div>
```

### Alerts

```jsx
<div className="alert alert-success">
  <strong>Success!</strong> Your changes have been saved.
</div>

<div className="alert alert-warning">
  <strong>Warning:</strong> This action cannot be undone.
</div>

<div className="alert alert-error">
  <strong>Error!</strong> Something went wrong.
</div>
```

### Product Cards

```jsx
<div className="product-card">
  <img src="product.jpg" alt="Product" className="product-image" />
  <div className="product-content">
    <span className="product-category">Helmets</span>
    <h3 className="product-title">Product Name</h3>
    <p className="product-description">Short description</p>
    <div className="product-price">150 JD</div>
    <div className="product-footer">
      <button className="btn btn-primary flex-1">Order</button>
    </div>
  </div>
</div>
```

---

## 🔍 Filters

### Stable Filter Keys

```javascript
// ✓ DO - Use stable keys
const activeFilters = new Set(['safety_helmets', 'price_under_50']);

// ❌ DON'T - Use translated labels
const activeFilters = new Set(['خوذات أمان', 'أقل من 50']);
```

### Filter Implementation

```jsx
import {
  FILTER_KEYS,
  encodeFilters,
  decodeFilters,
  applyFilters,
} from './utils/filterUtils';

// Get filters from URL
const [searchParams] = useSearchParams();
const activeFilters = decodeFilters(searchParams.get('f'));

// Apply filters to products
const filtered = applyFilters(products, activeFilters);

// Save to URL
const encoded = encodeFilters(activeFilters);
setSearchParams({ f: encoded });
```

### URL Encoding

```javascript
// Encode filters for URL
const filters = new Set(['safety_helmets', 'disposable_masks']);
const encoded = encodeFilters(filters);
// Result: "safety_helmets%2Cdisposable_masks"

// Decode from URL
const decoded = decodeFilters(encoded);
// Result: Set(['safety_helmets', 'disposable_masks'])
```

---

## ♿ Accessibility

### Focus Indicators

All interactive elements automatically get focus indicators:

```css
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### Keyboard Navigation

- `Tab` - Move to next element
- `Shift + Tab` - Move to previous element
- `Enter` / `Space` - Activate button
- `Escape` - Close modal/menu
- `Arrow Up/Down` - Navigate list

### ARIA Labels

```jsx
// Icon-only button
<button aria-label="Close menu" onClick={close}>✕</button>

// Alert role
<div role="alert" className="alert alert-error">
  Error message
</div>

// Navigation landmark
<nav aria-label="Main navigation">
  Links here
</nav>

// Form validation
<input
  aria-invalid={hasError}
  aria-describedby="error-message"
/>
<span id="error-message" className="form-error-text">
  {error}
</span>
```

### Semantic HTML

```jsx
<header>
  <nav>Navigation</nav>
</header>
<main id="main-content">
  Page content
</main>
<aside>
  Sidebar
</aside>
<footer>
  Footer
</footer>
```

### Contrast Checklist

```
✓ Body text:       4.5:1 ratio
✓ Large text:      3:1 ratio
✓ UI components:   3:1 ratio
✓ Icons:           3:1 ratio
✓ Dark mode:       Same standards
```

---

## 🎬 Dark Mode

### Theme Switcher

```jsx
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

<header>
  <ThemeSwitcher />  {/* Toggles light/dark */}
</header>
```

### Colors Auto-Invert

Colors automatically adjust for dark mode:

```css
/* In tokens.css */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(0, 0%, 10%);        /* Inverted */
    --fg: hsl(0, 0%, 95%);        /* Inverted */
    --primary-500: hsl(188, 100%, 55%); /* Lighter */
  }
}
```

### No Custom Dark Mode CSS Needed

Colors just work - use semantic tokens and they handle dark mode automatically.

---

## 🚀 Performance

### Image Optimization

```jsx
<!-- Hero/LCP Image - Preload & High Priority -->
<link rel="preload" as="image" href="hero.jpg" fetchPriority="high" />

<!-- Responsive Sizes -->
<img
  src="product.jpg"
  srcSet="product-sm.jpg 640w, product-lg.jpg 1920w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  alt="Product"
/>

<!-- Modern Format with Fallback -->
<picture>
  <source srcSet="hero.avif" type="image/avif" />
  <source srcSet="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="Hero" />
</picture>
```

### Lazy-Loading

```jsx
// Components
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

// Images
<img loading="lazy" src="product.jpg" />

// Scripts
<script defer src="analytics.js"></script>
```

---

## 📊 Analytics

### GA4 Events

```jsx
import ReactGA from 'react-ga4';

// Initialize
ReactGA.initialize('G_XXXXXXXXXX');

// Track events
ReactGA.event('filter_apply', {
  filters: Array.from(activeFilters)
});

ReactGA.event('product_click', {
  product_id: productId,
  category: category,
});

ReactGA.event('quote_request', {
  products_count: quantity,
});
```

---

## 🔒 Security

### Form Validation

```jsx
// Honeypot field (hidden)
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex="-1"
/>

// Server-side validation
if (formData.website) {
  return res.status(400).send('Spam detected');
}
```

### Input Sanitization

```jsx
import DOMPurify from 'dompurify';

const sanitized = DOMPurify.sanitize(userInput);
```

---

## 📋 Checklist: New Component

When creating a new component:

- [ ] Use semantic HTML (`<button>`, not `<div onclick>`)
- [ ] Add ARIA labels if needed
- [ ] Keyboard navigable (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Test in light & dark modes
- [ ] Test in English & Arabic
- [ ] Color contrast ≥ 4.5:1
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Use CSS variables for colors
- [ ] Use logical properties for spacing
- [ ] RTL-aware layout
- [ ] Mobile-first design

---

## 📚 File Locations

```
src/
├── components/
│   ├── LanguageSwitcher/
│   ├── ThemeSwitcher/
│   ├── Header/
│   ├── Navbar/
│   ├── Products/
│   └── ... more
├── styles/
│   ├── tokens.css      ← All color/spacing
│   ├── rtl.css         ← RTL utilities
│   └── theme.css       ← Component styles
├── utils/
│   ├── filterUtils.js  ← Filter logic
│   └── seoUtils.js     ← SEO helpers
├── locales/
│   ├── en.json         ← English translations
│   └── ar.json         ← Arabic translations
└── index.css           ← Imports all styles
```

---

## 🆘 Common Issues

### Filter Not Working After Language Switch
```jsx
// Listen for language change event
useEffect(() => {
  const handleLanguageChange = () => {
    // Re-render or re-initialize filters
    setFilters(new Set(filters));
  };
  
  window.addEventListener('languageChange', handleLanguageChange);
  return () => window.removeEventListener('languageChange', handleLanguageChange);
}, []);
```

### RTL Layout Breaking
1. Check `<html dir="rtl">` is set
2. Replace `left`/`right` with `inset-inline-start`/`end`
3. Use `margin-inline`, `padding-inline`

### Dark Mode Not Working
1. Check `ThemeSwitcher` is rendered
2. Verify dark mode tokens in `tokens.css`
3. Clear localStorage: `localStorage.clear()`

### Images Not Loading
1. Check image paths (use HTTPS)
2. Verify image exists
3. Check file permissions
4. Use WebP with JPG fallback

---

**Last Updated**: November 4, 2025  
**Quick Reference Version**: 1.0.0

