import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('What new modal', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await page.getByRole('button', { name: "Waht's New？" }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await argosScreenshot(page, 'mobile_what_new?')
  await expect(page.getByLabel("What's New?").locator('h2')).toContainText(
    "What's New?",
  )
  await expect(page.getByLabel("What's New?")).toContainText(
    '2023-12-18Keybinds: update selection commands',
  )
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible()
  await page.getByRole('button', { name: 'Close' }).click()
  await expect(page.getByRole('dialog')).not.toBeVisible()
})
