'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'background 0.3s',
      padding: '0 2rem',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--teal)', letterSpacing: '-0.3px' }}>
          Chandana S. Gowda
        </span>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{ textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, color: 'var(--muted-color)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-color)')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
