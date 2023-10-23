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
  ]
}
