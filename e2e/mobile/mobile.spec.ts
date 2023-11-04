import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect, devices } from '@playwright/test'

test.use({
  ...devices['iPhone 13 Pro'],
})

test('toppage', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByRole('heading', {
      name: 'Go Straightforward Web Application Development.',
    }),
  ).toBeVisible()

  await argosScreenshot(page, 'toppage')

  // <MobileMenu />
  //await page.getByRole('button', { name: 'Menu' }).click()
  //await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible()

  // <Link href="/about">About</Link>
  await page
    .locator('[id="headlessui-popover-panel-\\:r1\\:"]')
    .getByRole('link', { name: 'About' })
    .click()

  // http://localhost:8000/about
  await expect(page).toHaveURL('/about')
  await argosScreenshot(page, 'about')
})
