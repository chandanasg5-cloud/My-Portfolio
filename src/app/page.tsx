import Link from 'next/link'
import { profile, stats } from '@/lib/data'
import DashboardCard from '@/components/viz/DashboardCard'
import Sparkline from '@/components/viz/Sparkline'
import Reveal from '@/components/viz/Reveal'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Subtle dotted grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 30% 30%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 30% 30%, black, transparent)',
          }}
        />

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.title}
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Data, read carefully and turned into decisions.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <DashboardCard />
      </section>

      {/* Stat cards with sparklines */}
      <Reveal>
        <section className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ number, label, trend }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <p className="font-serif text-3xl font-semibold text-primary">{number}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              <div className="mt-4">
                <Sparkline points={trend} />
              </div>
            </div>
          ))}
        </section>
      </Reveal>

      {/* Capability strip */}
      <Reveal delay={0.1}>
        <section className="mt-10 rounded-3xl border border-border bg-card p-8 sm:p-10">
          <h2 className="font-serif text-2xl font-semibold">How I work with data</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Frame',
                body: 'Define the business question, the decision it serves, and the hypothesis worth testing.',
              },
              {
                step: '02',
                title: 'Analyze',
                body: 'Model the data in SQL, Tableau, and Power BI. Validate, segment, and pressure-test the signal.',
              },
              {
                step: '03',
                title: 'Recommend',
                body: 'Translate findings into a clear, defensible recommendation and a plan to monitor it.',
              },
            ].map(({ step, title, body }) => (
              <div key={step}>
                <p className="font-serif text-sm text-primary">{step}</p>
                <p className="mt-2 text-lg font-medium">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  )
}
