import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('articles', async ({ page }) => {
  await page.goto('http://localhost:3000/articles')
  await expect(
    page.getByText(
      'Writing about new release, update and thought of Web Application Development.',
    ),
  ).toBeVisible()

  await argosScreenshot(page, 'mobile_articles')
})
