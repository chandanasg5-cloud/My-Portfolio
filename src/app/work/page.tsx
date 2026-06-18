import type { Metadata } from 'next'
import { experience, projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected business analytics work by Chandana S. Gowda, including KPI dashboards, funnel analysis, and operations improvements across the UK and India.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <section className="py-20 sm:py-28">
      <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">Work</h1>

      <div className="mt-14 space-y-14">
        {experience.map((job) => (
          <article key={job.role} className="grid gap-3 sm:grid-cols-[7rem_1fr]">
            <p className="pt-1 text-sm text-muted-foreground">{job.period}</p>
            <div>
              <h2 className="font-serif text-xl font-semibold">{job.role}</h2>
              <p className="mt-0.5 text-sm text-primary">
                {job.company}, {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-24 font-serif text-2xl font-semibold">Selected projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border p-7 transition-colors hover:border-foreground/30">
            <p className="text-xs uppercase tracking-[0.18em] text-primary">{p.org}</p>
            <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
