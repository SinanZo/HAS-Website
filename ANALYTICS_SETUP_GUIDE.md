# Analytics & Consent Setup Guide

## Phase 13: Analytics & Consent Configuration

This guide covers GA4 setup, GDPR consent, and event tracking for the website redesign project.

## 📊 Analytics Architecture

```
User Visits Website
    ↓
ConsentBanner Displays
    ↓
User Selects Consent Preferences
    ↓
GA4 Initializes with Consent Mode
    ↓
Events Tracked (if analytics enabled)
    ↓
Data Flows to GA4 Dashboard
```

## 🔧 GA4 Setup (5 Minutes)

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (bottom left)
4. In the "Property" column, click "Create Property"
5. Fill in property details:
   - Name: "Website Redesign"
   - Industry: "Health" or "Chemicals"
   - Reporting timezone: "Europe/Amman"
   - Currency: "JOD" or your preference
6. Click "Create"

### Step 2: Get Measurement ID

1. In GA4 admin, go to "Data Streams"
2. Click "Add stream" → "Web"
3. Enter your website URL (e.g., `yourdomain.com`)
4. Enter stream name (e.g., "Production Website")
5. Click "Create stream"
6. Copy the **Measurement ID** (looks like `G-XXXXXXX`)

### Step 3: Add to Environment Variables

Create `.env.local` in project root:

```bash
REACT_APP_GA4_ID=G-XXXXXXX
REACT_APP_ENVIRONMENT=production
```

### Step 4: Initialize in App.js

Already done! GA4 is initialized in `App.js`:

```javascript
import { initGA4, initSessionTracking } from "./utils/analyticsUtils";

useEffect(() => {
  const ga4Id = process.env.REACT_APP_GA4_ID;
  if (ga4Id) {
    initGA4(ga4Id);
    initSessionTracking();
    initScrollDepthTracking();
    initTimeOnPageTracking();
  }
}, []);
```

## 🍪 Consent & GDPR Compliance

### Consent Banner Features

The `ConsentBanner` component (already integrated in App.js) provides:

✅ **Necessary Cookies** - Always enabled, required for site function
✅ **Analytics Cookies** - GA4 tracking (optional)
✅ **Marketing Cookies** - Ads and targeting (optional)
✅ **Preference Cookies** - Language, theme selection (optional)

### Consent Flow

```
1. User visits site
2. ConsentBanner displays if no prior consent
3. User chooses "Accept All", "Reject All", or customize
4. Choice saved to localStorage
5. GA4 consent updated automatically
```

### Consent Storage

Stored in `localStorage`:

```javascript
{
  "cookieConsent": {
    "necessary": true,
    "analytics": true,
    "marketing": true,
    "preferences": true
  },
  "consentTimestamp": "2024-11-04T10:30:00Z"
}
```

### GDPR Requirements Met

- ✅ Explicit consent required before tracking
- ✅ Granular cookie categories
- ✅ Easy to opt out or customize
- ✅ Consent timestamp logged
- ✅ Consent state persisted
- ✅ User can change consent anytime

## 📈 Event Tracking

### Available Events

```javascript
import { analytics } from './utils/analyticsUtils';

// Product interactions
analytics.trackProductView(productId, productName, category);
analytics.trackProductClick(productId, productName, position);
analytics.trackSearch(searchQuery);

// Filters
analytics.trackFilterApplied(filterType, filterValue);

// Forms
analytics.trackFormFocus(formName, fieldName);
analytics.trackFormSubmit(formName, { field: 'value' });

// CTAs
analytics.trackCTAClick('Download PDF', '/files/product.pdf');
analytics.trackWhatsAppClick('Product Page');

// Navigation
analytics.trackNavigation('Products', 'Filters');

// Performance
analytics.trackPerformance('LCP', 2150, 'ms');

// User actions
analytics.trackLanguageChange('en', 'ar');
analytics.trackThemeChange('light', 'dark');
```

### Tracking in Components

**Products Page Example:**

```jsx
import { analytics } from './utils/analyticsUtils';

function ProductCard({ product, position }) {
  const handleClick = () => {
    analytics.trackProductClick(product.id, product.name, position);
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    analytics.trackProductView(product.id, product.name, product.category);
  }, [product]);

  return <button onClick={handleClick}>{product.name}</button>;
}
```

**Contact Form Example:**

```jsx
import { analytics } from './utils/analyticsUtils';

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    analytics.trackFormSubmit('contact_form', {
      'form_source': 'contact_page'
    });

    await fetch('/api/contact', { /* ... */ });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Navigation Example:**

```jsx
import { analytics } from './utils/analyticsUtils';

function Navbar() {
  const handleMenuClick = (menuItem) => {
    analytics.trackNavigation('main_menu', menuItem);
  };

  return (
    <nav>
      <a onClick={() => handleMenuClick('products')}>Products</a>
    </nav>
  );
}
```

## 📊 GA4 Dashboard & Reports

### Key Metrics to Monitor

1. **Engagement Metrics**
   - Sessions (new visitors)
   - Users (total unique users)
   - Engagement rate (% of engaged sessions)
   - Average session duration

2. **Conversion Metrics**
   - Form submissions
   - Product downloads
   - WhatsApp clicks
   - Link clicks

3. **Device Metrics**
   - Mobile vs Desktop traffic
   - Device categories
   - Screen resolutions

4. **Geography Metrics**
   - Countries
   - Cities
   - Languages

### Creating Custom Reports

1. Go to GA4 Dashboard
2. Click "Reports" (left sidebar)
3. Select "Realtime" to see live visitors
4. Create custom report:
   - Dimensions: Event name, Device category, Country
   - Metrics: Event count, Engagement rate

### Events to Monitor

| Event | Purpose | Alert Threshold |
|-------|---------|-----------------|
| `filter_applied` | Product filtering usage | Monitor trends |
| `form_submit` | Contact form submissions | 0 forms in 24hrs |
| `product_click` | Product interest | Track top clicked |
| `whatsapp_click` | WhatsApp inquiries | Peak hours tracking |
| `language_change` | Language preference | Monitor AR/EN ratio |
| `exception` | Errors/bugs | Any errors trigger alert |

## 🔐 Privacy & Security

### What Data is Collected

**Collected:**
- ✅ Page views
- ✅ Events (clicks, form submissions)
- ✅ Device info (OS, browser)
- ✅ Geographic data (city, country)
- ✅ Traffic source

**NOT Collected:**
- ❌ IP addresses (anonymized by default)
- ❌ Personal names
- ❌ Email addresses (unless explicitly set)
- ❌ Financial data
- ❌ Health/medical info

### Consent Mode

GA4 "Consent Mode" means:
- **Before consent**: Events collected but marked as "consent pending"
- **After "Accept All"**: Full tracking enabled
- **After "Reject All"**: Only necessary events tracked
- **After "Customize"**: Tracks only selected categories

### Privacy Policy

Add to your Privacy Policy:

```markdown
## Analytics & Cookies

We use Google Analytics 4 (GA4) to understand how visitors use our website.
GA4 uses cookies to collect anonymized usage data.

### Cookie Categories

1. **Necessary** - Required for site function (cannot be disabled)
2. **Analytics** - Understand visitor behavior (optional)
3. **Marketing** - Personalized ads (optional)  
4. **Preferences** - Remember your language/theme choice (optional)

You can manage your cookie preferences anytime using our Consent Banner.

For more information, see our full [Cookie Policy](/cookie-policy).
```

## 🚀 Advanced Setup

### User Identification (Optional)

After user logs in:

```javascript
import { setUserId, setUserProperty } from './utils/analyticsUtils';

function handleLogin(user) {
  setUserId(user.id);
  setUserProperty('user_type', 'premium');
  setUserProperty('company', user.company);
}
```

### Custom Event Example

```javascript
import { trackEvent } from './utils/analyticsUtils';

// Track quote request
trackEvent('quote_request', {
  'product_category': 'safety_equipment',
  'quantity': 50,
  'estimated_value': 'high'
});

// Track download
trackEvent('download', {
  'file_name': 'product_datasheet.pdf',
  'file_category': 'technical'
});
```

### Debugging GA4

Enable debug mode in browser console:

```javascript
// In browser DevTools console
window.gtag('config', 'G-XXXXXXX', {
  'debug_mode': true
});
```

Then check "Realtime" → "Debug view" in GA4 dashboard.

## ✅ Implementation Checklist

- [ ] GA4 property created and property ID obtained
- [ ] `.env.local` file created with `REACT_APP_GA4_ID`
- [ ] ConsentBanner displays on first visit
- [ ] Consent choices persist in localStorage
- [ ] GA4 script loads (check DevTools Network tab)
- [ ] Test events appear in GA4 Real-time view
- [ ] Test consent rejection (GA4 should not track)
- [ ] Test custom tracking in each component
- [ ] Privacy policy updated with cookie info
- [ ] GDPR compliance verified

## 🧪 Testing GA4

### Test Consent Acceptance

1. Clear localStorage: `localStorage.clear()`
2. Reload page
3. Consent banner appears
4. Click "Accept All"
5. Open DevTools → Network → filter by `gtag`
6. Should see GA4 requests with consent granted

### Test Tracking Events

```javascript
// In browser console, after GA4 loads
window.gtag('event', 'test_event', {
  'test_parameter': 'test_value'
});

// Check GA4 Real-time view - event should appear in 1-2 seconds
```

### Monitor Real-time Data

1. Go to GA4 Dashboard
2. Click "Real-time" (left sidebar)
3. Open your site in another tab
4. Actions should appear immediately

## 📚 Resources

- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/12270356)
- [GA4 Event Tracking](https://support.google.com/analytics/answer/9267735)
- [Consent Mode](https://support.google.com/analytics/answer/9976101)
- [GDPR Compliance](https://support.google.com/analytics/answer/9019185)
- [Privacy Best Practices](https://support.google.com/analytics/answer/11513945)

## 🎯 Next Steps (Task 14 & 15)

**Phase 14 - Security Hardening:**
- Configure HTTPS/HSTS headers
- Set up Content Security Policy (CSP)
- Implement X-Frame-Options
- Security headers validation

**Phase 15 - E2E Testing & Reports:**
- Playwright E2E tests
- Lighthouse audits (desktop & mobile)
- Accessibility audit with axe-core
- Final performance metrics

---

**Updated:** November 4, 2025  
**Task:** Phase 13 - Set up analytics & consent  
**Status:** ✅ Complete  
**Components:** ConsentBanner.jsx, analyticsUtils.js  
**Integration:** App.js with GA4 initialization
