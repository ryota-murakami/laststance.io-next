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
