import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { profile } from '@/lib/data'

const GA_ID = 'G-LTWNJDHYFD'
const CLARITY_ID = 'x8pwnlxk68'
const SITE_URL = 'https://chandanasgowda.com'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chandana S. Gowda · Business Analyst',
    template: '%s · Chandana S. Gowda',
  },
  description:
    'Senior Business Analyst with four years of experience turning complex data into clear, defensible recommendations using SQL, Tableau, and Power BI. Based in Chicago.',
  keywords: [
    'Chandana Gowda',
    'Business Analyst',
    'Senior Business Analyst',
    'Data Analyst',
    'SQL',
    'Tableau',
    'Power BI',
    'Chicago',
    'Business Analytics',
    'KPI Development',
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Chandana S. Gowda',
    title: 'Chandana S. Gowda · Business Analyst',
    description:
      'Senior Business Analyst turning complex data into clear, defensible recommendations.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandana S. Gowda · Business Analyst',
    description:
      'Senior Business Analyst turning complex data into clear, defensible recommendations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'portfolio',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: SITE_URL,
  address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
  sameAs: [profile.linkedin, profile.github],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'DePaul University' },
    { '@type': 'CollegeOrUniversity', name: 'Kingston University' },
  ],
  knowsAbout: ['SQL', 'Tableau', 'Power BI', 'Business Analytics', 'KPI Development', 'Risk Analysis'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteNav />
        <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">{children}</main>
        <SiteFooter />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  )
}
