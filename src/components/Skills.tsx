import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Skills</p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '3rem' }}>Core competencies</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skills.map(({ category, items }) => (
            <div key={category} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: 12, padding: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>{category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map(item => (
                  <span key={item} style={{ background: 'var(--teal-light)', color: 'var(--teal-dark)', fontSize: '0.775rem', fontWeight: 500, padding: '0.3rem 0.7rem', borderRadius: 20 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
