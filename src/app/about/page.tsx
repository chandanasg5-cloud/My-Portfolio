import type { Metadata } from 'next'
import { about, certifications, education, skills } from '@/lib/data'

export const metadata: Metadata = { title: 'About · Chandana S. Gowda' }

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">About</h1>

      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-20 grid gap-16 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-semibold">Skills</h2>
          <div className="mt-6 space-y-6">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">{category}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold">Education</h2>
          <ul className="mt-6 space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-l border-border pl-4">
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {e.school}
                  {e.year ? `, ${e.year}` : ''}
                </p>
                {e.gpa && <p className="mt-0.5 text-sm text-primary">GPA {e.gpa}</p>}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-serif text-2xl font-semibold">Certifications</h2>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
