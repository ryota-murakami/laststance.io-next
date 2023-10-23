import fs from 'node:fs'

import { globby } from 'globby'

const pages = await globby([
  'src/app/**/*.tsx',
  '!src/app/_*.tsx',
  '!src/app/_**/*',
  '!src/app/api',
  '!src/app/feed.xml',
])

const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/app', '')
            .replace('.tsx', '')
            .replace('/index', '')
          return `
            <url>
              <loc>${`https://your-site.com${path}`}</loc>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

fs.writeFileSync('public/sitemap.xml', sitemap)
