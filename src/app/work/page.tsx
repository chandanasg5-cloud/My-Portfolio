import type { Metadata } from 'next'
import { experience, projects } from '@/lib/data'
import PageHeader from '@/components/theme/PageHeader'
import LoreHeading from '@/components/theme/LoreHeading'
import Ornament from '@/components/theme/Ornament'

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
        label="Work"
        lore="Quests Undertaken"
        line="Each role a road walked from question to outcome — the deeds, told plainly."
      />

      <div className="mt-16">
        <LoreHeading label="Experience" lore="The Road So Far" />
        <div className="mt-10 space-y-12 border-l-2 border-accent/25 pl-6 sm:pl-8">
          {experience.map((job) => (
            <article key={job.role} className="relative">
              {/* milestone marker */}
              <span className="absolute -left-[1.95rem] top-1.5 h-2.5 w-2.5 rotate-45 border border-accent bg-background sm:-left-[2.45rem]" />
              <p className="font-display text-xs uppercase tracking-[0.16em] text-gold">
                {job.period}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold tracking-wide">{job.role}</h3>
              <p className="mt-0.5 text-sm text-primary">
                {job.company}, {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <LoreHeading label="Selected Projects" lore="Artifacts Forged" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="ornate-border relative rounded-2xl bg-card p-7 transition-colors hover:border-accent/50"
            >
              <Ornament position="tl" />
              <Ornament position="br" />
              <div className="flex items-start justify-between gap-4">
                <p className="font-display text-xs uppercase tracking-[0.16em] text-gold">{p.org}</p>
                <div className="text-right">
                  <p className="font-display text-2xl font-semibold leading-none text-primary">
                    {p.metric}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{p.metricLabel}</p>
                </div>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-wide">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
