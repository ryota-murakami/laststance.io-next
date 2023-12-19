import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('/keybinds', async ({ page }) => {
  await page.goto('http://localhost:3000/keybinds')
  await expect(page.getByText('My Editor Keybinds.')).toBeVisible()

  await argosScreenshot(page, 'Mobile /keybinds')
})
