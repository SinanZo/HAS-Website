/* ────────────────────────────────────────────────────────── */
/*  playwright.config.js – E2E Test Configuration              */
/* ────────────────────────────────────────────────────────── */

/**
 * Playwright E2E Test Configuration
 * 
 * Installation:
 * npm install --save-dev @playwright/test
 * npx playwright install
 * 
 * Running tests:
 * npm test:e2e
 * npx playwright test
 * 
 * Debug mode:
 * npx playwright test --debug
 * 
 * UI mode (interactive):
 * npx playwright test --ui
 * 
 * Headed mode (see browser):
 * npx playwright test --headed
 */

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Test directory
  testDir: './src/__tests__/e2e',

  // Match test files
  testMatch: '**/*.spec.ts',

  // Timeout per test
  timeout: 30 * 1000,

  // Global timeout
  globalTimeout: 60 * 1000,

  // Expect timeout
  expect: {
    timeout: 5000
  },

  // Fail on console errors
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Report configuration
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'junit-results.xml' }],
    ['list']
  ],

  // Web server configuration
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  },

  // Browser configuration
  use: {
    // Base URL for tests
    baseURL: 'http://localhost:3000',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Video on failure
    video: 'retain-on-failure',

    // Trace on failure
    trace: 'on-first-retry',

    // Browser context options
    viewport: { width: 1280, height: 720 },
  },

  // Multiple browser configurations
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },

    // Mobile testing
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }
    },

    /* Test against branded browsers */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
