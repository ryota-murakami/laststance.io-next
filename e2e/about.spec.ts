import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('/about', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/about')
  await expect(
    page.getByText(
      'Laststance.io is my experimental laboratory for eliminate like this. ➡️',
    ),
  ).toBeVisible()

  await argosScreenshot(page, `${testInfo.project.name}: /about`)
})
