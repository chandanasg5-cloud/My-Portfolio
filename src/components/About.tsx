import { stats, certifications } from '@/lib/data'

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>About Me</p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '3rem' }}>Analytical thinker. Strategic partner.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            {[
              "I'm a Senior Business Analyst with a track record of translating complex, ambiguous data into clear recommendations that move the needle. My work spans operations efficiency, KPI development, risk analysis, and customer behavior — always with a focus on measurable business impact.",
              "With a Master's in Business Analytics from DePaul University (GPA 3.98) and hands-on experience across UK and India-based organizations, I bring both quantitative rigor and cross-cultural stakeholder fluency to every engagement.",
              "I thrive in environments that reward structured thinking: framing the problem, developing hypotheses, executing analysis, and presenting findings that drive action — not just reports.",
            ].map((p, i) => (
              <p key={i} style={{ color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.8 }}>{p}</p>
            ))}

            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Certifications</p>
              {certifications.map(cert => (
                <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8375rem', color: 'var(--muted)', padding: '0.4rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {stats.map(({ number, label }) => (
              <div key={label} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--teal)', lineHeight: 1, marginBottom: '0.25rem' }}>{number}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
