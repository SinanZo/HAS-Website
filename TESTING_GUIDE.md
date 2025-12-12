# Testing & Reports Guide

## Phase 15: E2E Testing, Lighthouse Audits & Accessibility

This guide covers end-to-end testing with Playwright, Lighthouse performance audits, and accessibility verification.

## 🚀 Quick Start

### Installation

```bash
# Install Playwright
npm install --save-dev @playwright/test

# Install browsers
npx playwright install

# Install Lighthouse CLI
npm install --save-dev @lhci/cli

# Install axe-core for accessibility
npm install --save-dev axe-playwright @axe-core/react
```

### Run Tests

```bash
# All E2E tests
npm test:e2e

# Specific test file
npx playwright test core-features.spec.ts

# Debug mode (interactive)
npx playwright test --debug

# UI mode (visual test runner)
npx playwright test --ui

# Headed mode (see browser)
npx playwright test --headed

# Specific browser
npx playwright test --project=chromium

# Single test
npx playwright test --grep "should switch"
```

## 📋 E2E Tests Overview

### Test Structure

```
src/__tests__/e2e/
├── core-features.spec.ts       # Language, theme, filters, nav
├── contact-form.spec.ts        # Form validation & submission
├── accessibility.spec.ts       # A11y compliance
└── performance.spec.ts         # Load times & metrics
```

### Test Categories

#### 1. Language Switching Tests
```
✓ Switch from EN to AR
✓ Persist language preference
✓ Direction changes to RTL
✓ UI text translates correctly
```

#### 2. Theme Switching Tests
```
✓ Toggle light/dark theme
✓ Persist theme preference
✓ CSS colors update correctly
✓ All components themed properly
```

#### 3. Product Filtering Tests
```
✓ Apply category filter
✓ Apply manufacturer filter
✓ Search by product name
✓ Remove individual filter
✓ Clear all filters
✓ URL persists filter state
```

#### 4. Navigation Tests
```
✓ Navigate between main pages
✓ Breadcrumb navigation works
✓ Mobile menu toggles
✓ Links navigate correctly
```

#### 5. Contact Form Tests
```
✓ Validation errors show
✓ Valid form submits
✓ Email validation works
✓ Phone validation works
✓ Success message appears
✓ Form resets after submit
```

#### 6. Accessibility Tests
```
✓ Proper heading hierarchy
✓ Images have alt text
✓ Keyboard navigation works
✓ ARIA labels present
✓ Focus management
✓ Color contrast adequate
```

## 🔍 Running Lighthouse Audits

### Method 1: Chrome DevTools (Manual)

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Mobile" or "Desktop"
4. Click "Generate report"
5. Wait for analysis

### Method 2: CLI (Automated)

```bash
# Install Lighthouse
npm install --save-dev lighthouse

# Run audit
npx lighthouse http://localhost:3000 --view

# With specific categories
npx lighthouse http://localhost:3000 \
  --only-categories=performance,accessibility,seo
```

### Method 3: Lighthouse CI (Best for CI/CD)

```bash
# Configuration file: .lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3,
      "staticDistDir": "./build"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.85 }],
        "categories:accessibility": ["error", { "minScore": 0.90 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }]
      }
    }
  }
}

# Run CI
lhci autorun
```

## 📊 Expected Lighthouse Scores

### Target Scores
| Category | Desktop | Mobile | Status |
|----------|---------|--------|--------|
| Performance | 85+ | 75+ | ✅ Target |
| Accessibility | 90+ | 90+ | ✅ Target |
| Best Practices | 90+ | 90+ | ✅ Target |
| SEO | 90+ | 90+ | ✅ Target |

### Performance Metrics
| Metric | Target | Status |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | ⏳ Monitor |
| FID (First Input Delay) | < 100ms | ⏳ Monitor |
| CLS (Cumulative Layout Shift) | < 0.1 | ⏳ Monitor |
| TTFB (Time to First Byte) | < 800ms | ⏳ Monitor |
| Speed Index | < 3.4s | ⏳ Monitor |

## ♿ Accessibility Auditing

### axe-core Accessibility Audit

```bash
# Install
npm install --save-dev axe-playwright @axe-core/react

# In test file
import { injectAxe, checkA11y } from 'axe-playwright';

test('should pass accessibility checks', async ({ page }) => {
  await page.goto('/');
  await injectAxe(page);
  await checkA11y(page);
});
```

### WCAG 2.2 Compliance Checklist

**Level A (Must have):**
- [ ] Perceivable: Alternative text for non-text content
- [ ] Operable: Keyboard accessible
- [ ] Understandable: Clear and plain language
- [ ] Robust: Compatible with assistive tech

**Level AA (Should have):**
- [ ] Color contrast 4.5:1
- [ ] Text resize to 200%
- [ ] Captions for audio/video
- [ ] Focus indicators visible

**Level AAA (Nice to have):**
- [ ] Color contrast 7:1
- [ ] Captions and audio descriptions
- [ ] Content available in multiple formats

### Manual Accessibility Testing

**Keyboard Only:**
1. Unplug mouse
2. Use Tab to navigate
3. Use Enter/Space to activate
4. Use arrows to scroll
5. Check focus indicators visible

**Screen Reader Testing:**
```bash
# NVDA (Windows) - Free
# JAWS (Windows) - Paid
# VoiceOver (Mac) - Built-in
# TalkBack (Android) - Built-in

# Test with screen reader on
1. Verify all content is accessible
2. Check link text is descriptive
3. Verify form labels announced
4. Test navigation
```

**Color Contrast:**
Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

## 📈 Test Reports

### Generate HTML Report

```bash
# After running tests
npx playwright show-report

# Report location
test-results/index.html
```

### Report Contents

- ✅ Passed tests (green)
- ❌ Failed tests (red) with stacktrace
- ⏭️ Skipped tests (yellow)
- Screenshots of failures
- Video recordings
- Performance metrics

## 🎯 Test Scenarios

### Happy Path (Success Cases)

```
Homepage Load
    ↓
Language Switch (EN → AR)
    ↓
Theme Switch (Light → Dark)
    ↓
Navigate to Products
    ↓
Apply Filters
    ↓
Click Product
    ↓
Go to Contact Form
    ↓
Fill & Submit Form
    ↓
See Success Message
```

### Error Paths (Edge Cases)

```
Invalid Email Format
    ↓
Show Validation Error
    ↓
User Corrects Input
    ↓
Form Submits Successfully

Empty Required Field
    ↓
Submit Form
    ↓
Show Required Error
    ↓
User Fills Field
    ↓
Form Submits Successfully

Network Error
    ↓
Show Error Message
    ↓
User Retries
    ↓
Request Succeeds
```

## 🐛 Debugging Tests

### Print Debug Info

```typescript
test('debug example', async ({ page }) => {
  // Print page URL
  console.log('Current URL:', page.url());

  // Print HTML
  const html = await page.content();
  console.log(html);

  // Get element info
  const element = page.locator('button').first();
  console.log('Text:', await element.textContent());
  console.log('Visible:', await element.isVisible());
  console.log('Enabled:', await element.isEnabled());
});
```

### Take Screenshots

```typescript
// Screenshot on failure (automatic)
test('with screenshot', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'screenshot.png' });
});
```

### Video Recording

```typescript
// Enabled in playwright.config.js
// Videos saved for failures
test('with video', async ({ page }) => {
  await page.goto('/');
  // Video automatically recorded
});
```

### Trace Debugging

```typescript
// Enable tracing
test('with trace', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });
  
  await page.goto('/');
  
  await context.tracing.stop({ path: 'trace.zip' });
  // Open in: npx playwright show-trace trace.zip
});
```

## 📦 Package.json Scripts

Add these to `package.json`:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug",
    "test:e2e:headed": "playwright test --headed",
    "test:a11y": "playwright test --grep accessibility",
    "lighthouse": "lighthouse http://localhost:3000",
    "lighthouse:ci": "lhci autorun",
    "test:all": "npm run test && npm run test:e2e && npm run lighthouse"
  }
}
```

## ✅ Pre-Deployment Checklist

### Test Coverage
- [ ] E2E tests pass (all browsers)
- [ ] Accessibility tests pass
- [ ] Performance meets targets
- [ ] No console errors/warnings
- [ ] Mobile tests pass

### Lighthouse Results
- [ ] Performance: 85+ (desktop), 75+ (mobile)
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Accessibility Compliance
- [ ] WCAG 2.2 Level AA
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast adequate
- [ ] Focus indicators visible

### Performance Metrics
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TTFB < 800ms
- [ ] Bundle size < 400KB

### Security
- [ ] No console errors
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] CSP policy active
- [ ] No sensitive data in localStorage

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Lighthouse Guide](https://developers.google.com/web/tools/lighthouse)
- [WCAG 2.2 Standards](https://www.w3.org/WAI/WCAG22/quickref/)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## 🎯 Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Tests timeout | Slow network | Increase timeout in config |
| Element not found | Wrong selector | Use `--debug` mode to inspect |
| Flaky tests | Race conditions | Use `waitForLoadState` |
| CI failures | Different environment | Use `baseURL` in config |
| Screenshots blank | Element not visible | Check viewport size |

---

**Updated:** November 4, 2025  
**Task:** Phase 15 - E2E testing & reports  
**Status:** ✅ Complete  
**Files:** playwright.config.js, core-features.spec.ts, TESTING_GUIDE.md  
**Ready to:** Deploy and monitor
