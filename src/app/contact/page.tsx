import type { Metadata } from 'next'
import { profile } from '@/lib/data'
import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/theme/PageHeader'
import SectionHeading from '@/components/theme/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Chandana S. Gowda, Senior Business Analyst based in Chicago. Open to new Business Analyst roles.',
  alternates: { canonical: '/contact' },
}

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'in/chandanasgowda26', href: profile.linkedin },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\D/g, '')}` },
  { label: 'Location', value: profile.location, href: '' },
]

export default function ContactPage() {
  return (
    <section className="pb-24">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        line="I am open to Business Analyst roles in Chicago and beyond. If you have a problem worth framing, I would like to hear about it."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <dl className="divide-y divide-border border-y border-border">
          {channels.map(({ label, value, href }) => (
            <div key={label} className="flex items-center justify-between py-5">
              <dt className="eyebrow text-muted-foreground">{label}</dt>
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

        <div>
          <SectionHeading eyebrow="Inbox" title="Send a message" />
          <p className="mt-3 text-sm text-muted-foreground">
            For recruiters and hiring teams. Drop a note and it reaches my inbox directly.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
