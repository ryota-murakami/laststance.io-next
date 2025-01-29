import { argosScreenshot } from '@argos-ci/playwright'
// eslint-disable-next-line import/named
import { test } from '@playwright/test'

test('/keybinds', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/keybinds')
  await argosScreenshot(
    page,
    `[${testInfo.project.name}] https://laststance.io/keybinds`,
  )
})
