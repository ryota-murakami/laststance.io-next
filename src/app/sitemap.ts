import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 1,
      url: 'https://laststance.io',
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.8,
      url: 'https://laststance.io/about',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/blog',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/uses',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/keybinds',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/uses/projects',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles/what-is-font-family',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles/vite-trk-query-update-v0.4.0',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles/update-eslint-config-ts-prefixer@v0.23.3',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles/first-blog-post',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles/Deno-npm-compatibility-is-not-perfect-yet',
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://laststance.io/articles/access-nested-class-with-nodule-scss-file',
    },
  ]
}
