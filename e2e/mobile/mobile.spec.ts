//import { argosScreenshot } from '@argos-ci/playwright'
//import { test, expect } from '@playwright/test'
//
//test.beforeAll(async () => {
//  // fix for https://github.com/laststance/laststance.io/actions/runs/6754591078/job/18362267611#step:8:24
//  // Wait for 5 seconds before starting the tests
//  await new Promise((resolve) => setTimeout(resolve, 5000))
//})
//
//test('toppage', async ({ page }) => {
//  await page.goto('http://localhost:3000/')
//  await expect(
//    page.getByRole('heading', {
//      name: 'Go Straightforward Web Application Development.',
//    }),
//  ).toBeVisible()
//
//  await argosScreenshot(page, 'toppage')
//
//  // <MobileMenu />
//  await page.getByRole('button', { name: 'Menu' }).click()
//  await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible()
//
//  // <Link href="/about">About</Link>
//  await page
//    .locator('[id="headlessui-popover-panel-\\:r1\\:"]')
//    .getByRole('link', { name: 'About' })
//    .click()
//
//  // http://localhost:8000/about
//  await expect(page).toHaveURL('/about')
//  await argosScreenshot(page, 'about')
//})

import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('toppage', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByRole('heading', {
      name: 'Go Straightforward Web Application Development.',
    }),
  ).toBeVisible()
  await expect(page.getByText('Github Feed')).toBeVisible()
  await expect(
    page.getByText('© 2023 Laststance.io. All rights reserved.'),
  ).toBeVisible()

  await argosScreenshot(page, 'toppage')

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'About' })
    .click()

  await expect(page).toHaveURL('/about')
  await expect(
    page.getByText(
      'Laststance.io is my experimental laboratory for eliminate like this. ➡️',
    ),
  ).toBeVisible()

  await argosScreenshot(page, 'about')
})
