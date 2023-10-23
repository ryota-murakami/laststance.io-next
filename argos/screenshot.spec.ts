import * as fs from 'fs'

import { argosScreenshot } from '@argos-ci/playwright'
//eslint-disable-next-line import/named
import { test } from '@playwright/test'

import { extractSitemapPathnames, pathnameToArgosName } from './utils'

const siteUrl = 'http://localhost:3000'
const sitemapURL = 'http://localhost:3000/sitemap.xml'
const stylesheetPath = './screenshot.css'
const stylesheet = fs.readFileSync(stylesheetPath).toString()

function screenshotPathname(pathname: string) {
  test(`pathname ${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname
    await page.goto(url)
    await page.addStyleTag({ content: stylesheet })
    await argosScreenshot(page, pathnameToArgosName(pathname))
  })
}

test.describe('Laststance.io site screenshots', async () => {
  const pathnames = await extractSitemapPathnames(sitemapURL)
  console.log('Pathnames to screeshot:', pathnames)
  pathnames.forEach(screenshotPathname)
})
