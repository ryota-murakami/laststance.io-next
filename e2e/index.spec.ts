// import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('Top Page', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByRole('heading', {
      name: 'Go Straightforward Web Application Development.',
    }),
  ).toBeVisible()

  expect(page.getByText('Github Feed')).toBeVisible()

  await expect(
    page.getByText('© 2024 Laststance.io. All rights reserved.'),
  ).toBeVisible()

  // await argosScreenshot(page, `[${testInfo.project.name}]:   Top Page`)

  if (['iPhone 14'].includes(testInfo.project.name)) {
    await page.getByRole('link', { name: 'About' }).click()
  } else {
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'About' })
      .click()
  }
  await expect(page).toHaveURL('/about')
  await expect(
    page.getByText(
      'Laststance.io is my experimental laboratory for eliminate like this. ➡️',
    ),
  ).toBeVisible()
})
