import * as cheerio from 'cheerio'
import fetch, { Headers } from 'node-fetch'

const meta = {
  'Content-Type': 'text/xml',
}
const headers = new Headers(meta)

export async function extractSitemapPathnames(
  sitemapURL: string,
): Promise<string[]> {
  const response = await fetch(sitemapURL, { headers })
  const sitemap = await response.text()
  const $ = cheerio.load(sitemap, { xmlMode: true })
  const urls: string[] = []
  $('loc').each(function handleLoc() {
    urls.push($(this).text())
  })
  return urls.map((url) => new URL(url).pathname)
}

// Converts a pathname to a decent screenshot name
export function pathnameToArgosName(pathname: string): string {
  return pathname.replace(/^\/|\/$/g, '') || 'index'
}
