import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chandana S. Gowda · Business Analyst',
    short_name: 'Chandana Gowda',
    description:
      'Senior Business Analyst turning complex data into clear, defensible recommendations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3ecdf',
    theme_color: '#2e5a49',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
