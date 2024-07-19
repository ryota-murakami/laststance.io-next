import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('/uses', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/uses')
  await expect(
    page.getByText(
      'Stay comfortable, Here’s a big list of all of my favorite stuff.',
    ),
  ).toBeVisible()

  await argosScreenshot(page, `[${testInfo.project.name}]:   /uses`)
})
