'use client'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem' }}>Projects</p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '3rem' }}>Featured work</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project) => (
            <div key={project.title} style={{ border: '1px solid var(--border-color)', borderRadius: 12, padding: '1.75rem', transition: 'box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(13,148,136,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--teal)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-color)' }}
            >
              <div style={{ width: 44, height: 44, background: 'var(--teal-light)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.25rem' }}>
                📊
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.title}</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--teal)', fontWeight: 500, marginBottom: '0.75rem' }}>{project.org}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)', lineHeight: 1.7, marginBottom: '1rem' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', fontSize: '0.72rem', color: 'var(--muted-color)', padding: '0.2rem 0.55rem', borderRadius: 4, fontWeight: 500 }}>
                    {tag}
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
