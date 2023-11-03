import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e/desktop',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: isHeadedMode() ? 2000 : undefined,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    //{
    //  name: 'Mobile Chrome',
    //  use: { ...devices['Pixel 5'] },
    //},
    //{
    //  name: 'Mobile Safari',
    //  use: { ...devices['iPhone 12'] },
    //},

    /* Test against tabret viewports. */
    //{
    //  name: 'iPad (gen 7)',
    //  use: { ...devices['iPad (gen 7)'] },
    //},
    //{
    //  name: 'iPad (gen 7) landscape',
    //  use: { ...devices['iPad (gen 7) landscape'] },
    //},
    //{
    //  name: 'iPad Pro 11',
    //  use: { ...devices['iPad Pro 11'] },
    //},
    //{
    //  name: 'iPad Pro 11',
    //  use: { ...devices['iPad Pro 11 landscape'] },
    //},

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})

function isHeadedMode() {
  // important to use env var - for workers
  if (process.argv.includes('--headed')) process.env.HEADED_MODE = '1'
  return Boolean(process.env.HEADED_MODE)
}
