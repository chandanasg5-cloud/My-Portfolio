import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--muted)' }}>
        © 2025 Chandana S. Gowda · Chicago, IL
      </footer>
    </>
  )
}
