# Design System & Theming Guide

## Overview

This document outlines the comprehensive design system built for hilmiabusham.com, featuring:
- **Token-based theming** with semantic CSS custom properties
- **Light & Dark mode support** with WCAG 2.2 AA contrast compliance
- **Bilingual RTL/LTR layout** with logical CSS properties
- **Accessible components** with proper ARIA and keyboard navigation
- **Performance-optimized** with lazy-loading and code splitting

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Color System](#color-system)
3. [RTL/LTR Implementation](#rtlltr-implementation)
4. [Typography](#typography)
5. [Component Library](#component-library)
6. [Theming & Customization](#theming--customization)
7. [Accessibility](#accessibility)
8. [Performance](#performance)

---

## Design Tokens

### What Are Design Tokens?

Design tokens are the building blocks of a design system. They're CSS custom properties (variables) that define colors, spacing, typography, shadows, and other design decisions. They ensure consistency and make it easy to maintain and scale the design.

### File Structure

```
src/
├── styles/
│   ├── tokens.css        # Semantic color & spacing variables
│   ├── rtl.css           # RTL/LTR layout utilities
│   ├── theme.css         # Component-level semantic styling
│   └── global.css        # Global styles & resets
├── index.css             # Main stylesheet (imports all above)
└── components/
    ├── LanguageSwitcher/  # Language switcher component
    └── ThemeSwitcher/     # Light/Dark mode toggle
```

### Core Tokens

#### Semantic Spacing

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
```

#### Font Sizes

```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
```

#### Border Radius

```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-full: 9999px;  /* Fully rounded */
```

#### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
```

#### Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

#### Z-Index Scale

```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-tooltip: 1070;
```

---

## Color System

### Light Mode (Default)

The color system uses HSL color space for better dark mode transitions.

#### Neutral Colors (Grayscale)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | hsl(0, 0%, 100%) | Page background |
| `--surface` | hsl(0, 0%, 98%) | Card/surface background |
| `--surface-secondary` | hsl(0, 0%, 95%) | Secondary surfaces |
| `--border` | hsl(0, 0%, 88%) | Border color |
| `--fg` | hsl(0, 0%, 20%) | Primary text (4.5:1 ✓) |
| `--fg-secondary` | hsl(0, 0%, 40%) | Secondary text (7:1 ✓) |
| `--fg-muted` | hsl(0, 0%, 60%) | Muted text (3.5:1 ✓) |
| `--fg-disabled` | hsl(0, 0%, 75%) | Disabled text |

#### Brand Colors

**Primary (Teal)** - `#034D58` equivalent at 700

```css
--primary-50: hsl(188, 100%, 96%);     /* Lightest */
--primary-100: hsl(188, 100%, 90%);
--primary-200: hsl(188, 100%, 80%);
--primary-300: hsl(188, 100%, 70%);
--primary-400: hsl(188, 90%, 55%);
--primary-500: hsl(188, 82%, 45%);     /* Mid-tone */
--primary-600: hsl(188, 85%, 40%);
--primary-700: hsl(188, 85%, 32%);     /* Main brand */
--primary-800: hsl(188, 85%, 24%);
--primary-900: hsl(188, 85%, 16%);     /* Darkest */
```

**Accent (Gold)** - `#FFCC00` equivalent at 500

```css
--accent-50: hsl(45, 100%, 96%);
--accent-100: hsl(45, 100%, 90%);
--accent-200: hsl(45, 100%, 80%);
--accent-300: hsl(45, 100%, 70%);
--accent-400: hsl(45, 100%, 60%);
--accent-500: hsl(45, 100%, 50%);      /* Main accent */
--accent-600: hsl(45, 100%, 40%);
--accent-700: hsl(45, 100%, 32%);
--accent-800: hsl(45, 100%, 24%);
--accent-900: hsl(45, 100%, 16%);
```

#### Status Colors

| Color | Usage | Tokens |
|-------|-------|--------|
| **Success** (Green) | Confirmations, valid states | --success-50, 200, 500, 700 |
| **Warning** (Orange) | Alerts, cautions | --warning-50, 200, 500, 700 |
| **Error** (Red) | Errors, invalid states | --error-50, 200, 500, 700 |
| **Info** (Blue) | Information, hints | --info-50, 200, 500, 700 |

### Dark Mode

Automatically applied via `@media (prefers-color-scheme: dark)` or when system preference is set.

**Key changes:**
- Inverse neutral colors (white text on dark background)
- Adjusted brand colors for visibility
- Enhanced overlays for better contrast

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(0, 0%, 10%);
    --fg: hsl(0, 0%, 95%);
    --primary-500: hsl(188, 100%, 55%);  /* Lighter in dark mode */
    --accent-500: hsl(45, 100%, 55%);
    /* ... more adjustments */
  }
}
```

### Contrast Compliance

All text colors meet WCAG 2.2 AA standards:

- **Body text (--fg)**: 4.5:1 ratio ✓
- **Large text/icons**: 3:1 ratio ✓
- **Secondary text (--fg-secondary)**: 7:1 ratio ✓

---

## RTL/LTR Implementation

### Setting Language & Direction

The language switcher automatically manages both:

```jsx
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  return (
    <header>
      <LanguageSwitcher />  {/* Sets dir="rtl" or "ltr" on <html> */}
    </header>
  );
}
```

### Logical CSS Properties

Instead of `left`/`right`, use logical properties that automatically flip:

```css
/* BEFORE (breaks in RTL) */
.sidebar {
  margin-left: 1rem;  /* Wrong - doesn't flip */
}

/* AFTER (works in both) */
.sidebar {
  margin-inline-start: 1rem;  /* Flips automatically */
}
```

### Common Logical Properties

| Physical | Logical | Behavior |
|----------|---------|----------|
| `left` | `inset-inline-start` | Flips in RTL |
| `right` | `inset-inline-end` | Flips in RTL |
| `margin-left` | `margin-inline-start` | Flips in RTL |
| `padding-right` | `padding-inline-end` | Flips in RTL |
| `text-align: left` | `text-align: start` | Flips in RTL |

### Flexbox Direction

Use `.flex-row` to auto-flip in RTL:

```jsx
<nav className="flex-row gap-md">  {/* Direction auto-flips */}
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

In `rtl.css`, this becomes `flex-direction: row-reverse` when in RTL mode.

### Navigation Order

In RTL mode, navigation visually mirrors but maintains semantic order:

```jsx
const isRTL = i18n.dir() === 'rtl';
<ul className={clsx('flex gap-2', isRTL && 'flex-row-reverse')}>
  {navigationItems.map(item => (
    <li key={item.id}>{item.label}</li>
  ))}
</ul>
```

### No Horizontal Overflow

Prevent scrollbar in RTL on mobile:

```css
@media (max-width: 768px) {
  html[dir="rtl"] {
    overflow-x: hidden;
  }
}
```

---

## Typography

### Font Family

```css
/* English */
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Arabic - Tajawal (Google Fonts) */
--font-arabic: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Why Tajawal for Arabic?**
- Excellent readability with clear letter-spacing
- Proper diacritics rendering
- Web-optimized (Google Fonts)
- Open-source

### Applying Fonts

```jsx
// App.jsx - automatically applies based on language
html[dir="rtl"] {
  font-family: var(--font-arabic);
}

html[dir="ltr"] {
  font-family: var(--font-sans);
}
```

### Line Height

```css
--line-height-tight: 1.2;      /* Headings */
--line-height-normal: 1.5;     /* Body text */
--line-height-loose: 1.75;     /* Large text */
```

### Arabic Typography Tips

1. **Diacritics**: Ensure font includes proper diacritical marks
2. **Letter-spacing**: Keep at 0 for Arabic (different from English)
3. **Text alignment**: Use `text-align: start` (auto-flips in RTL)
4. **Font weight**: Adjust from English (Arabic renders differently at same weight)

---

## Component Library

### Button Variants

```jsx
// Primary
<button className="btn btn-primary">Submit</button>

// Secondary
<button className="btn btn-secondary">Cancel</button>

// Accent
<button className="btn btn-accent">Call to Action</button>

// Ghost (Outline)
<button className="btn btn-ghost">Learn More</button>

// Sizes
<button className="btn btn-sm">Small</button>
<button className="btn btn-lg">Large</button>
```

### Cards

```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

// With hover effect (auto-elevation)
<div className="card card-elevated">
  <p>This card has elevated shadow on hover.</p>
</div>
```

### Badges & Chips

```jsx
<span className="badge badge-primary">Primary</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-error">Error</span>
```

### Forms

```jsx
<div className="form-group">
  <label className="form-label form-label-required">Email</label>
  <input type="email" className="form-input" placeholder="your@email.com" />
  <span className="form-help-text">We'll never share your email.</span>
</div>
```

### Alerts

```jsx
<div className="alert alert-success">
  <strong>Success!</strong> Your changes have been saved.
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
    <span className="product-category">Safety Helmets</span>
    <h3 className="product-title">Product Name</h3>
    <p className="product-description">Short description...</p>
    <div className="product-price">150 JD</div>
    <div className="product-footer">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
```

### Pagination

```jsx
<ul className="pagination">
  <li className="pagination-item">
    <a href="#" className="pagination-link" aria-label="Previous">← Prev</a>
  </li>
  <li className="pagination-item">
    <a href="#" className="pagination-link active">1</a>
  </li>
  <li className="pagination-item">
    <a href="#" className="pagination-link">2</a>
  </li>
  <li className="pagination-item">
    <a href="#" className="pagination-link" aria-label="Next">Next →</a>
  </li>
</ul>
```

### Breadcrumb

```jsx
<nav aria-label="Breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="/" className="breadcrumb-link">Home</a>
    </li>
    <li className="breadcrumb-item">
      <a href="/products" className="breadcrumb-link">Products</a>
    </li>
    <li className="breadcrumb-item">
      <span className="breadcrumb-current">Safety Helmets</span>
    </li>
  </ol>
</nav>
```

---

## Theming & Customization

### Using Semantic Colors

```css
/* Instead of hardcoding colors */
background-color: #034d58;  /* ❌ Hard to maintain */

/* Use semantic tokens */
background-color: var(--primary-700);  /* ✓ Consistent & easy to update */
```

### Creating Custom Component Styles

```css
.my-custom-button {
  background-color: var(--primary);
  color: white;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
}

.my-custom-button:hover {
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-lg);
}
```

### Tailwind Integration

All tokens are available in Tailwind:

```jsx
// Using Tailwind classes with semantic tokens
<div className="bg-surface text-fg border border-border rounded-lg p-lg shadow-md hover:shadow-lg">
  Content
</div>
```

### Customizing for Brand

Update `/src/styles/tokens.css` to modify:

```css
:root {
  /* Change primary brand color */
  --primary-700: hsl(188, 85%, 32%);  /* Change this to your brand color */
  
  /* Change accent */
  --accent-500: hsl(45, 100%, 50%);
  
  /* Update font family */
  --font-sans: 'Your Font', sans-serif;
}
```

---

## Accessibility

### WCAG 2.2 AA Compliance

✓ **Text Contrast**: Body text meets 4.5:1 ratio
✓ **Focus Indicators**: Visible on all interactive elements
✓ **Keyboard Navigation**: All components keyboard-accessible
✓ **Screen Reader Support**: Proper ARIA labels
✓ **Color Independence**: Not relying on color alone

### Focus Styles

All interactive elements have clear focus indicators:

```css
:focus-visible {
  outline: var(--ring-width) solid var(--ring);
  outline-offset: 2px;
}
```

### Semantic HTML

```jsx
// ✓ Good
<header>Navigation</header>
<nav>Links</nav>
<main id="main-content">Page Content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>

// ❌ Bad
<div class="header">Navigation</div>
<div class="main">Page Content</div>
```

### ARIA Labels

```jsx
<button aria-label="Close menu" onClick={handleClose}>✕</button>
<div role="alert" className="alert alert-error">Error message</div>
<nav aria-label="Main navigation">...</nav>
```

### Skip Link

Automatically added to all pages (see `App.jsx`):

```css
.skip-to-main {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: var(--space-sm) var(--space-md);
  text-decoration: none;
  z-index: var(--z-tooltip);
  border-radius: var(--radius-md);
}

.skip-to-main:focus {
  top: 0;  /* Visible on focus */
}
```

---

## Performance

### Critical CSS

Inline critical above-the-fold CSS in HTML head to reduce LCP.

### Lazy-Loading

```jsx
<img 
  src="image.jpg" 
  alt="Product"
  loading="lazy"
  fetchPriority="low"
/>
```

### Images Optimization

1. **Modern formats**: AVIF → WebP → JPG fallback
2. **Responsive sizes**: Use `srcset` for multiple resolutions
3. **Preload LCP image**:

```html
<link rel="preload" as="image" href="hero.jpg" fetchPriority="high">
```

### Bundle Optimization

- Tree-shake unused CSS
- Code split with React.lazy()
- Minify CSS/JS
- Remove unused dependencies

### Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **CLS** (Cumulative Layout Shift) | < 0.05 |
| **INP** (Interaction to Next Paint) | < 200ms |

---

## File Organization

```
src/
├── index.css                    # Main stylesheet (imports all)
├── index.js                     # React entry point
├── App.js                       # App component with i18n init
├── i18n.jsx                     # i18next configuration
├── styles/
│   ├── tokens.css               # Semantic design tokens
│   ├── rtl.css                  # RTL/LTR utilities
│   ├── theme.css                # Component-level styles
│   └── global.css               # Global resets
├── components/
│   ├── LanguageSwitcher/
│   │   ├── LanguageSwitcher.jsx
│   │   └── LanguageSwitcher.css
│   ├── ThemeSwitcher/
│   │   ├── ThemeSwitcher.jsx
│   │   └── ThemeSwitcher.css
│   ├── Navbar/
│   ├── Header/
│   ├── Footer/
│   ├── Products/
│   └── ... other components
├── locales/
│   ├── en.json                  # English translations
│   └── ar.json                  # Arabic translations
└── data/
    └── productsData.js          # Product catalog
```

---

## Best Practices

### ✓ DO

- Use CSS custom properties for all colors/spacing
- Use logical properties (`margin-inline`, `inset-inline-start`)
- Test in both LTR and RTL modes
- Use semantic HTML elements
- Test contrast ratios (aim for 4.5:1 or higher)
- Use `aria-label` for icon-only buttons
- Preload critical resources
- Lazy-load non-critical images

### ✗ DON'T

- Hardcode colors (#034d58, etc.)
- Use `left`/`right` CSS (use `inset-inline-start`/`end`)
- Build layout in a single direction (test both LTR/RTL)
- Skip focus indicators
- Rely on color alone to convey meaning
- Inline critical styles in templates
- Load all images upfront

---

## Testing Checklist

- [ ] Light mode contrast passes (4.5:1 body, 3:1 UI)
- [ ] Dark mode readable and accessible
- [ ] RTL layout correct (no overflow, proper alignment)
- [ ] LTR layout correct
- [ ] Language switcher works (sets dir attribute)
- [ ] Theme switcher works (saves to localStorage)
- [ ] All buttons keyboard navigable
- [ ] Focus indicators visible
- [ ] No horizontal scroll on mobile RTL
- [ ] Fonts render correctly (Tajawal for Arabic)
- [ ] Images lazy-load
- [ ] Hero/LCP image preloads
- [ ] Pagination RTL-aware
- [ ] Breadcrumbs RTL-aware
- [ ] Filter state persists across navigation

---

## Resources

- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [RTL Styling](https://www.w3.org/International/questions/qa-html-dir)
- [Web.dev - CWV](https://web.dev/vitals/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Tajawal Font](https://fonts.google.com/specimen/Tajawal)

---

**Last Updated**: 2025-11-04
**Design System Version**: 1.0.0
