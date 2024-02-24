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
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // Use "dot" reporter on CI, "list" otherwise (Playwright default)
    process.env.CI ? ['dot'] : ['list'],
    // Add Argos reporter.
    [
      '@argos-ci/playwright/reporter',
      {
        // Upload to Argos on CI only.
        uploadToArgos: !!process.env.CI,
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    launchOptions: {
      slowMo: isHeadedOrUIMode() ? 500 : 100,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Safari',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    {
      name: 'Tablet',
      use: { ...devices['iPad Pro 11'] },
    },
    {
      name: 'Tablet landscape',
      use: { ...devices['iPad Pro 11 landscape'] },
    },
    {
      name: 'Mobile',
      use: { ...devices['Pixel 5'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})

function isHeadedOrUIMode() {
  // important to use env var - for workers
  if (process.argv.includes('--headed') || process.argv.includes('--ui'))
    process.env.HEADED_MODE = '1'
  return Boolean(process.env.HEADED_MODE)
}
