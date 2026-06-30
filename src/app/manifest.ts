import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chandana S. Gowda · Business Analyst',
    short_name: 'Chandana Gowda',
    description:
      'Business Analyst turning complex data into clear, defensible recommendations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0a7152',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
