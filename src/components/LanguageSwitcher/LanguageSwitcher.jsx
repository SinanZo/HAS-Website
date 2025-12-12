// src/components/LanguageSwitcher/LanguageSwitcher.jsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Update currentLang when i18n language changes
    setCurrentLang(i18n.language);
    
    // Set HTML dir attribute based on language
    const dir = i18n.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;

    // Persist language preference to localStorage
    localStorage.setItem('preferredLanguage', i18n.language);
    localStorage.setItem('preferredDirection', dir);

    // Trigger re-initialization of components that depend on language/direction
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: i18n.language, dir } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleLanguageChange = async (lang) => {
    await i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const languages = [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'ar', label: 'العربية', nativeLabel: 'Arabic' },
  ];

  return (
    <div className={`language-switcher ${className}`}>
      <div className="language-switcher-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`language-btn ${currentLang === lang.code ? 'active' : ''}`}
            aria-label={`Switch to ${lang.label}`}
            aria-current={currentLang === lang.code ? 'true' : 'false'}
            title={lang.label}
          >
            {lang.nativeLabel}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
