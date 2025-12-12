/* ────────────────────────────────────────────────────────── */
/*  src/components/ConsentBanner/ConsentBanner.jsx             */
/* ────────────────────────────────────────────────────────── */

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ConsentBanner.css';

/**
 * ConsentBanner Component
 * GDPR-compliant cookie/privacy consent banner
 * 
 * Features:
 * - Multilingual (EN/AR via i18n)
 * - Persistent consent state in localStorage
 * - Customizable cookie categories
 * - Easy integration with GA4
 */
const ConsentBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [consentChoices, setConsentChoices] = useState({
    necessary: true, // Always true - cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    
    if (!storedConsent) {
      // No consent saved - show banner
      setIsVisible(true);
    } else {
      // Consent already given - load preferences
      const saved = JSON.parse(storedConsent);
      setConsentChoices(saved);
      
      // Re-initialize GA4 if analytics enabled
      if (saved.analytics && window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('consentTimestamp', new Date().toISOString());
    setConsentChoices(allAccepted);
    
    // Initialize GA4 with full consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
    
    // Track consent acceptance
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        'choice': 'all',
        'timestamp': new Date().toISOString()
      });
    }
    
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    localStorage.setItem('consentTimestamp', new Date().toISOString());
    setConsentChoices(rejected);
    
    // Update GA4 consent to denied
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
    
    // Track rejection
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        'choice': 'none',
        'timestamp': new Date().toISOString()
      });
    }
    
    setIsVisible(false);
  };

  const handleCustomize = () => {
    const updated = { ...consentChoices };
    
    localStorage.setItem('cookieConsent', JSON.stringify(updated));
    localStorage.setItem('consentTimestamp', new Date().toISOString());
    
    // Update GA4 with custom choices
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': updated.analytics ? 'granted' : 'denied',
        'ad_storage': updated.marketing ? 'granted' : 'denied'
      });
    }
    
    // Track custom choices
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        'choice': 'custom',
        'analytics': updated.analytics,
        'marketing': updated.marketing,
        'preferences': updated.preferences,
        'timestamp': new Date().toISOString()
      });
    }
    
    setIsVisible(false);
  };

  const toggleCategory = (category) => {
    if (category === 'necessary') return; // Necessary cookies cannot be disabled
    
    setConsentChoices(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="consent-banner-overlay">
      <div className="consent-banner">
        {/* Header */}
        <div className="consent-header">
          <h2>{t('consent.title', 'Cookie & Privacy Policy')}</h2>
          <button
            className="consent-close"
            onClick={handleRejectAll}
            aria-label={t('consent.close', 'Close')}
            title={t('consent.close', 'Close')}
          >
            ×
          </button>
        </div>

        {/* Description */}
        <div className="consent-description">
          <p>
            {t('consent.description', 
              'We use cookies to enhance your experience. Some cookies are essential for the site to function, while others help us understand how you use our website and improve your experience.'
            )}
          </p>
        </div>

        {/* Categories */}
        <div className="consent-categories">
          {/* Necessary Cookies */}
          <div className="consent-category">
            <div className="category-header">
              <label className="category-toggle">
                <input
                  type="checkbox"
                  checked={consentChoices.necessary}
                  disabled={true}
                  readOnly
                  aria-label={t('consent.necessary', 'Necessary Cookies')}
                />
                <span className="toggle-slider"></span>
              </label>
              <div className="category-info">
                <h3>{t('consent.necessary', 'Necessary Cookies')}</h3>
                <p className="category-desc">
                  {t('consent.necessaryDesc',
                    'Essential for basic site functionality. Cannot be disabled.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="consent-category">
            <div className="category-header">
              <label className="category-toggle">
                <input
                  type="checkbox"
                  checked={consentChoices.analytics}
                  onChange={() => toggleCategory('analytics')}
                  aria-label={t('consent.analytics', 'Analytics Cookies')}
                />
                <span className="toggle-slider"></span>
              </label>
              <button
                className="category-expand"
                onClick={() => setExpandedCategory(
                  expandedCategory === 'analytics' ? null : 'analytics'
                )}
                aria-label={t('consent.expand', 'Expand')}
              >
                {expandedCategory === 'analytics' ? '−' : '+'}
              </button>
              <div className="category-info">
                <h3>{t('consent.analytics', 'Analytics Cookies')}</h3>
                {expandedCategory === 'analytics' && (
                  <p className="category-desc">
                    {t('consent.analyticsDesc',
                      'Help us understand how visitors use our website. Enables us to improve performance and content.'
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="consent-category">
            <div className="category-header">
              <label className="category-toggle">
                <input
                  type="checkbox"
                  checked={consentChoices.marketing}
                  onChange={() => toggleCategory('marketing')}
                  aria-label={t('consent.marketing', 'Marketing Cookies')}
                />
                <span className="toggle-slider"></span>
              </label>
              <button
                className="category-expand"
                onClick={() => setExpandedCategory(
                  expandedCategory === 'marketing' ? null : 'marketing'
                )}
                aria-label={t('consent.expand', 'Expand')}
              >
                {expandedCategory === 'marketing' ? '−' : '+'}
              </button>
              <div className="category-info">
                <h3>{t('consent.marketing', 'Marketing Cookies')}</h3>
                {expandedCategory === 'marketing' && (
                  <p className="category-desc">
                    {t('consent.marketingDesc',
                      'Used to deliver personalized ads based on your interests across multiple websites.'
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Preferences Cookies */}
          <div className="consent-category">
            <div className="category-header">
              <label className="category-toggle">
                <input
                  type="checkbox"
                  checked={consentChoices.preferences}
                  onChange={() => toggleCategory('preferences')}
                  aria-label={t('consent.preferences', 'Preference Cookies')}
                />
                <span className="toggle-slider"></span>
              </label>
              <button
                className="category-expand"
                onClick={() => setExpandedCategory(
                  expandedCategory === 'preferences' ? null : 'preferences'
                )}
                aria-label={t('consent.expand', 'Expand')}
              >
                {expandedCategory === 'preferences' ? '−' : '+'}
              </button>
              <div className="category-info">
                <h3>{t('consent.preferences', 'Preference Cookies')}</h3>
                {expandedCategory === 'preferences' && (
                  <p className="category-desc">
                    {t('consent.preferencesDesc',
                      'Remember your choices, like language and theme, for a personalized experience.'
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="consent-links">
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            {t('consent.privacyPolicy', 'Privacy Policy')}
          </a>
          <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
            {t('consent.cookiePolicy', 'Cookie Policy')}
          </a>
        </div>

        {/* Actions */}
        <div className="consent-actions">
          <button
            className="btn btn-secondary"
            onClick={handleRejectAll}
          >
            {t('consent.rejectAll', 'Reject All')}
          </button>
          <button
            className="btn btn-tertiary"
            onClick={handleCustomize}
          >
            {t('consent.customize', 'Customize')}
          </button>
          <button
            className="btn btn-primary"
            onClick={handleAcceptAll}
          >
            {t('consent.acceptAll', 'Accept All')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
