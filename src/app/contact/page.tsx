import type { Metadata } from 'next'
import { profile } from '@/lib/data'

export const metadata: Metadata = { title: 'Contact · Chandana S. Gowda' }

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'in/chandanasgowda26', href: profile.linkedin },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\D/g, '')}` },
  { label: 'Location', value: profile.location, href: '' },
]

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        Let&apos;s talk.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        I am open to Business Analyst roles in Chicago and beyond. If you have a problem worth
        framing, I would like to hear about it.
      </p>

      <dl className="mt-14 max-w-lg divide-y divide-border border-y border-border">
        {channels.map(({ label, value, href }) => (
          <div key={label} className="flex items-center justify-between py-5">
            <dt className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
            <dd className="text-right">
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="font-medium transition-colors hover:text-primary"
                >
                  {value}
                </a>
              ) : (
                <span className="font-medium">{value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
