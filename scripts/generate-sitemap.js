const fs = require('fs')
const globby = require('globby')

;(async () => {
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ])

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/pages', '')
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
})()
