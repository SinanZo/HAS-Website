// src/components/ThemeSwitcher/ThemeSwitcher.jsx
import React, { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
    setIsLoaded(true);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newIsDark = e.matches;
      setIsDark(newIsDark);
      applyTheme(newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.style.colorScheme = 'light';
    }
  };

  const handleToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    // Dispatch event for components that need to react to theme change
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDark: newIsDark } }));
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      className={`theme-switcher ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
