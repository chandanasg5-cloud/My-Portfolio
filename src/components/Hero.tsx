import { profile } from '@/lib/data'

export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 2rem 5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <span style={{ width: 24, height: 2, background: 'var(--teal)', display: 'block' }} />
            Business Analyst
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Turning data into{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--teal)' }}>strategic decisions</em>
          </h1>

          <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 600, marginBottom: '2rem' }}>
            Senior Business Analyst with 4+ years of experience in operations, risk, and marketing analytics.
            I bridge the gap between complex data and clear business strategy — using SQL, Tableau, Power BI,
            and rigorous hypothesis-driven thinking to drive measurable outcomes.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ display: 'inline-block', padding: '0.65rem 1.4rem', borderRadius: 6, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', background: 'var(--teal)', color: '#fff', border: '2px solid var(--teal)', transition: 'all 0.2s' }}>
              Get in touch
            </a>
            <a href="#experience" style={{ display: 'inline-block', padding: '0.65rem 1.4rem', borderRadius: 6, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', background: 'transparent', color: 'var(--teal)', border: '2px solid var(--teal)', transition: 'all 0.2s' }}>
              View my work
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '📍', text: profile.location },
              { icon: '🎓', text: 'M.S. Business Analytics — DePaul University' },
              { icon: '✅', text: 'Open to new opportunities' },
            ].map(({ icon, text }) => (
              <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--muted)' }}>
                {icon} {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
