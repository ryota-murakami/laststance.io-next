import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'

test('articles_post', async ({ page }) => {
  await page.goto(
    'http://localhost:3000/articles/dropped-eslint-plugin-sort-keys-custom-order-from-eslint-config-ts-prefixerv1120',
  )
  await expect(
    page.getByText(
      'dropped eslint-plugin-sort-keys-custom-order from eslint-config-ts-prefixer@v1.12.0',
    ),
  ).toBeVisible()

  await argosScreenshot(page, 'mobile_articles_post')
})
