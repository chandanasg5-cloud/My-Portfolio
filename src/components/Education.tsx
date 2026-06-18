import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" style={{ padding: '5rem 2rem', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Education</p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '3rem' }}>Academic background</h2>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {education.map((edu, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: 4, minHeight: 40, background: i === 0 ? 'var(--teal)' : '#99f6e4', borderRadius: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.2rem' }}>{edu.degree}</div>
                <div style={{ fontSize: '0.8375rem', color: 'var(--muted)' }}>{edu.school}{edu.year ? ` — ${edu.year}` : ''}</div>
                {edu.gpa && <div style={{ fontSize: '0.775rem', fontWeight: 600, color: 'var(--teal)', marginTop: '0.25rem' }}>GPA: {edu.gpa}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
