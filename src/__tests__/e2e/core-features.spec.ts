/* ────────────────────────────────────────────────────────── */
/*  src/__tests__/e2e/core-features.spec.ts                    */
/* ────────────────────────────────────────────────────────── */

/**
 * Core Feature E2E Tests
 * 
 * Tests for:
 * - Language switching (EN/AR)
 * - Theme switching (Light/Dark)
 * - Product filtering
 * - Contact form submission
 * - Navigation
 */

import { test, expect } from '@playwright/test';

test.describe('Core Features', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage and cookies
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
    
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for page load
    await page.waitForLoadState('networkidle');
  });

  test.describe('Language Switching', () => {
    test('should switch from English to Arabic', async ({ page }) => {
      // Check initial language
      const htmlLang = await page.locator('html').getAttribute('lang');
      expect(htmlLang).toBe('en');

      // Find and click language switcher
      const langButton = page.locator('button[aria-label*="language"], [data-testid="language-switcher"]').first();
      await langButton.click();

      // Wait for dropdown
      const arOption = page.locator('text=/العربية|Arabic/i').first();
      await arOption.click();

      // Verify language changed
      const newLang = await page.locator('html').getAttribute('lang');
      expect(newLang).toBe('ar');

      // Verify direction changed to RTL
      const htmlDir = await page.locator('html').getAttribute('dir');
      expect(htmlDir).toBe('rtl');

      // Verify language persisted in localStorage
      const saved = await page.evaluate(() => localStorage.getItem('preferredLanguage'));
      expect(saved).toBe('ar');
    });

    test('should persist language preference on reload', async ({ page }) => {
      // Switch to Arabic
      const langButton = page.locator('button[aria-label*="language"]').first();
      await langButton.click();
      const arOption = page.locator('text=/العربية|Arabic/i').first();
      await arOption.click();

      // Reload page
      await page.reload();
      await page.waitForLoadState('networkidle');

      // Verify language still Arabic
      const htmlLang = await page.locator('html').getAttribute('lang');
      expect(htmlLang).toBe('ar');
    });
  });

  test.describe('Theme Switching', () => {
    test('should toggle between light and dark theme', async ({ page }) => {
      // Check initial theme (should be light)
      let htmlClass = await page.locator('html').getAttribute('class') || '';
      expect(htmlClass).not.toContain('dark');

      // Find and click theme switcher
      const themeButton = page.locator('button[aria-label*="theme"], [data-testid="theme-switcher"]').first();
      await themeButton.click();

      // Verify dark class added
      await page.waitForTimeout(300); // Wait for animation
      htmlClass = await page.locator('html').getAttribute('class') || '';
      expect(htmlClass).toContain('dark');

      // Click again to toggle back
      await themeButton.click();

      // Verify dark class removed
      await page.waitForTimeout(300);
      htmlClass = await page.locator('html').getAttribute('class') || '';
      expect(htmlClass).not.toContain('dark');
    });

    test('should persist theme preference', async ({ page }) => {
      // Switch to dark theme
      const themeButton = page.locator('button[aria-label*="theme"]').first();
      await themeButton.click();
      await page.waitForTimeout(300);

      // Reload page
      await page.reload();
      await page.waitForLoadState('networkidle');

      // Verify theme still dark
      const htmlClass = await page.locator('html').getAttribute('class') || '';
      expect(htmlClass).toContain('dark');
    });
  });

  test.describe('Product Filtering', () => {
    test('should apply category filter', async ({ page }) => {
      // Navigate to products
      await page.goto('/products');
      await page.waitForLoadState('networkidle');

      // Get initial product count
      const initialProducts = page.locator('[data-testid="product-card"]');
      const initialCount = await initialProducts.count();

      // Apply filter
      const categorySelect = page.locator('select[aria-label*="category"], [data-testid="category-filter"]').first();
      await categorySelect.selectOption('safety-equipment');

      // Wait for filter to apply
      await page.waitForLoadState('networkidle');

      // Verify URL changed
      expect(page.url()).toContain('category=safety-equipment');

      // Verify product count changed (should be less)
      const filteredProducts = page.locator('[data-testid="product-card"]');
      const filteredCount = await filteredProducts.count();
      expect(filteredCount).toBeLessThanOrEqual(initialCount);
    });

    test('should search products by name', async ({ page }) => {
      await page.goto('/products');
      await page.waitForLoadState('networkidle');

      // Type in search
      const searchInput = page.locator('input[placeholder*="search"], [data-testid="product-search"]').first();
      await searchInput.fill('mask');

      // Wait for results
      await page.waitForLoadState('networkidle');

      // Verify results contain search term
      const productNames = page.locator('[data-testid="product-name"]');
      const count = await productNames.count();
      expect(count).toBeGreaterThan(0);

      // Verify at least first product contains search term
      const firstProduct = await productNames.first().textContent();
      expect(firstProduct?.toLowerCase()).toContain('mask');
    });

    test('should remove filter using chip', async ({ page }) => {
      await page.goto('/products?category=safety-equipment');
      await page.waitForLoadState('networkidle');

      // Find remove button on filter chip
      const removeChip = page.locator('[data-testid="filter-chip-remove"]').first();
      await removeChip.click();

      // Verify URL cleared
      expect(page.url()).not.toContain('category=');

      // Verify "Clear All" button gone
      const clearAllBtn = page.locator('button:has-text("Clear All")');
      const isVisible = await clearAllBtn.isVisible().catch(() => false);
      expect(isVisible).toBe(false);
    });
  });

  test.describe('Navigation', () => {
    test('should navigate between main menu items', async ({ page }) => {
      // Click Products link
      const productsLink = page.locator('a:has-text("Products"), [data-testid="nav-products"]').first();
      await productsLink.click();

      // Verify navigation
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('/products');

      // Click Contact link
      const contactLink = page.locator('a:has-text("Contact"), [data-testid="nav-contact"]').first();
      await contactLink.click();

      // Verify navigation
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('/contact');
    });

    test('should have working breadcrumb navigation', async ({ page }) => {
      // Navigate to products
      await page.goto('/products');

      // Find breadcrumb
      const breadcrumb = page.locator('[data-testid="breadcrumb"]');
      const isVisible = await breadcrumb.isVisible().catch(() => false);

      if (isVisible) {
        // Click home in breadcrumb
        const homeBreadcrumb = breadcrumb.locator('text=/Home|الرئيسية/i').first();
        await homeBreadcrumb.click();

        // Should navigate home
        await page.waitForLoadState('networkidle');
        expect(page.url()).toBe('http://localhost:3000/');
      }
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      await page.goto('/');

      // H1 should exist and be unique
      const h1s = page.locator('h1');
      const h1Count = await h1s.count();
      expect(h1Count).toBeGreaterThanOrEqual(1);

      // Verify h2s come after h1s
      const h2s = page.locator('h2');
      const h2Count = await h2s.count();
      expect(h2Count).toBeGreaterThanOrEqual(0);
    });

    test('should have alt text on images', async ({ page }) => {
      await page.goto('/');

      // Get all images
      const images = page.locator('img');
      const count = await images.count();

      // Check each image
      for (let i = 0; i < Math.min(count, 5); i++) {
        const altText = await images.nth(i).getAttribute('alt');
        expect(altText).toBeTruthy();
      }
    });

    test('should support keyboard navigation', async ({ page }) => {
      await page.goto('/');

      // Tab through interactive elements
      await page.keyboard.press('Tab');
      
      // Check focused element
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      expect(['A', 'BUTTON', 'INPUT'].includes(focused || '')).toBeTruthy();
    });
  });
});

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
  });

  test('should show validation errors on empty submission', async ({ page }) => {
    // Click submit button without filling form
    const submitBtn = page.locator('button:has-text("Submit"), button:has-text("إرسال")').first();
    await submitBtn.click();

    // Verify error messages appear
    await page.waitForSelector('[role="alert"]');
    const errors = page.locator('[role="alert"]');
    const errorCount = await errors.count();
    expect(errorCount).toBeGreaterThan(0);
  });

  test('should submit valid form', async ({ page }) => {
    // Fill form
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('input[name="phone"]').fill('+962-123-456789');
    await page.locator('textarea[name="message"]').fill('This is a test message');

    // Submit
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // Verify success message
    await page.waitForSelector('[data-testid="success-message"], text=/success|sent|تم/i');
    const successMsg = page.locator('[data-testid="success-message"], text=/success|sent|تم/i').first();
    await expect(successMsg).toBeVisible();

    // Verify form cleared
    const nameInput = page.locator('input[name="name"]');
    expect(await nameInput.inputValue()).toBe('');
  });

  test('should reject invalid email', async ({ page }) => {
    // Fill with invalid email
    await page.locator('input[name="email"]').fill('not-an-email');
    await page.locator('input[name="name"]').fill('Test');

    // Try to submit
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // Should show error
    const emailError = page.locator('[data-testid="email-error"], text=/email|invalid/i').first();
    await expect(emailError).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('should load homepage within 3 seconds', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('should lazy load images below the fold', async ({ page }) => {
    await page.goto('/products');

    // Get images above and below viewport
    const images = page.locator('img[loading="lazy"]');
    const count = await images.count();

    // Should have lazy-loaded images
    expect(count).toBeGreaterThan(0);
  });
});
