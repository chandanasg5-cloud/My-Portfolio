import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Experience</p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '3rem' }}>Professional history</h2>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 8, bottom: 0, width: 2, background: 'var(--border-color)' }} />

          {experience.map((job, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: i < experience.length - 1 ? '2.5rem' : 0 }}>
              <div style={{ position: 'absolute', left: -5, top: 6, width: 12, height: 12, borderRadius: '50%', background: 'var(--teal)', border: '2px solid white', boxShadow: '0 0 0 2px var(--teal)' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '1.0625rem', fontWeight: 600 }}>{job.role}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--teal)', fontWeight: 500, whiteSpace: 'nowrap' }}>{job.period}</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted-color)', marginBottom: '0.875rem' }}>{job.company} — {job.location}</div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: '0.875rem', color: 'var(--muted-color)', paddingLeft: '1rem', position: 'relative', lineHeight: 1.65 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--teal)', fontSize: '0.7rem', top: 3 }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
