import type { Metadata } from 'next'
import { experience, projects } from '@/lib/data'
import PageHeader from '@/components/theme/PageHeader'
import SectionHeading from '@/components/theme/SectionHeading'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected business analytics work by Chandana S. Gowda, including KPI dashboards, funnel analysis, and operations improvements across the UK and India.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <section className="pb-24">
      <PageHeader
        eyebrow="Work"
        title="Work"
        line="Each role and project, walked from question to outcome — the work, told plainly."
      />

      <div className="mt-16">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div className="mt-10 space-y-12 border-l-2 border-border pl-6 sm:pl-8">
          {experience.map((job) => (
            <article key={job.role} className="relative">
              {/* milestone marker */}
              <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background sm:-left-[2.35rem]" />
              <p className="eyebrow text-primary">{job.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{job.role}</h3>
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
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected Projects"
          line="Each told as a short case study — the challenge, my role, the work, and the result."
        />
        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-elevated relative rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40 sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow text-primary">{p.org}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-3xl font-semibold leading-none tracking-tight text-primary">
                    {p.metric}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{p.metricLabel}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-primary">Context</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.context}</p>
                </div>
                <div>
                  <p className="eyebrow text-primary">My Role</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.role}</p>
                </div>
                <div>
                  <p className="eyebrow text-primary">Actions</p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    {p.actions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-primary">Outcome</p>
                  <p className="mt-2 leading-relaxed text-foreground">{p.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
