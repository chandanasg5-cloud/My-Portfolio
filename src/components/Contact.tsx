'use client'
import { profile } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Contact</p>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '1rem' }}>{"Let's connect"}</h2>
          <p style={{ color: 'var(--muted-color)', fontSize: '0.9375rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            {"I'm currently open to new Business Analyst opportunities in Chicago and beyond. Whether you have a role in mind or just want to talk data — I'd love to hear from you."}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { href: `mailto:${profile.email}`, label: profile.email, icon: '✉️' },
              { href: profile.linkedin, label: 'LinkedIn', icon: '🔗' },
              { href: `tel:${profile.phone.replace(/\D/g, '')}`, label: profile.phone, icon: '📞' },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)', border: '1px solid var(--border-color)', borderRadius: 8, padding: '0.65rem 1.2rem', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--teal)'; el.style.color = 'var(--teal)'; el.style.background = 'var(--teal-light)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border-color)'; el.style.color = 'var(--text)'; el.style.background = 'transparent' }}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
