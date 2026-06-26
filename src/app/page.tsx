import Link from 'next/link'
import { stats } from '@/lib/data'
import Hero from '@/components/Hero'
import DashboardCard from '@/components/viz/DashboardCard'
import Reveal from '@/components/viz/Reveal'
import SectionHeading from '@/components/theme/SectionHeading'

const steps = [
  {
    n: '01',
    title: 'Frame',
    body: 'Define the business question, the decision it serves, and the hypothesis worth testing.',
  },
  {
    n: '02',
    title: 'Analyze',
    body: 'Model the data in SQL, Tableau, and Power BI. Validate, segment, and pressure-test the signal.',
  },
  {
    n: '03',
    title: 'Recommend',
    body: 'Translate findings into a clear, defensible recommendation and a plan to monitor it.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats — By the Numbers */}
      <Reveal>
        <section className="pt-16 sm:pt-20">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Four years, measured in outcomes"
            line="The work, told plainly in the marks it left behind."
            align="center"
            divider
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ number, label }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-center transition-all hover:border-primary/40 hover:shadow-[0_10px_30px_-18px_hsl(162_84%_24%/0.4)]"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-primary/0 transition-colors group-hover:bg-primary/60" />
                <p className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                  {number}
                </p>
                <div className="mx-auto mt-4 h-px w-10 bg-border" />
                <p className="mt-4 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* How I Work + dashboard */}
      <Reveal delay={0.1}>
        <section className="mt-20 grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="How I Work"
              title="From question to outcome"
              line="Every engagement follows the same path — framed, analyzed, and resolved."
            />
            <div className="mt-8 space-y-7">
              {steps.map(({ n, title, body }) => (
                <div key={n} className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-mono text-sm font-semibold text-primary">
                    {n}
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-2">
            <DashboardCard />
          </div>
        </section>
      </Reveal>

      {/* Closing call */}
      <Reveal delay={0.1}>
        <section className="mt-24 rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-10">
          <p className="eyebrow text-primary">Let&rsquo;s talk</p>
          <p className="mx-auto mt-4 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
            Have a problem worth framing? The best analysis starts with the right question.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/work"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:border-primary/60"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  )
}
