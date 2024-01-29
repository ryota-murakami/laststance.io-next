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
  reporter: 'html',
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
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /desktop\/.*spec.ts/,
    },
    // {
    //   name: 'Safari',
    //   use: { ...devices['Desktop Safari'] },
    //   testMatch: /desktop\/.*spec.ts/,
    // },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //   testMatch: /desktop\/.*spec.ts/,
    // },
    // {
    //   name: 'iPad Pro 11',
    //   use: { ...devices['iPad Pro 11'] },
    //   testMatch: /desktop\/.*spec.ts/,
    // },
    // {
    //   name: 'iPad Pro 11 landscape',
    //   use: { ...devices['iPad Pro 11 landscape'] },
    //   testMatch: /tablet_landscape\/.*spec.ts/,
    // },
    // {
    //   name: 'iPad Pro 11',
    //   use: { ...devices['iPad Pro 11'] },
    //   testMatch: /tablet\/.*spec.ts/,
    // },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
      testMatch: /mobile\/.*spec.ts/,
    },
    //{
    //  name: 'Mobile Chrome landscape',
    //  use: { ...devices['Pixel 5 landscape'] },
    //  testMatch: /mobile\/.*spec.ts/,
    //},
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
