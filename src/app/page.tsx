import Link from 'next/link'
import { stats } from '@/lib/data'
import Hero from '@/components/Hero'
import DashboardCard from '@/components/viz/DashboardCard'
import TrendBars from '@/components/viz/TrendBars'
import Reveal from '@/components/viz/Reveal'
import LoreHeading from '@/components/theme/LoreHeading'
import ElvenDivider from '@/components/theme/ElvenDivider'
import Ornament from '@/components/theme/Ornament'

const trials = [
  {
    step: 'I',
    title: 'Frame',
    body: 'Define the business question, the decision it serves, and the hypothesis worth testing.',
  },
  {
    step: 'II',
    title: 'Analyze',
    body: 'Model the data in SQL, Tableau, and Power BI. Validate, segment, and pressure-test the signal.',
  },
  {
    step: 'III',
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
          <LoreHeading
            label="By the Numbers"
            lore="Tokens of the Road Travelled"
            line="Four years of work, told plainly in the marks it left behind."
            align="center"
            divider
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ number, label, trend }) => (
              <div
                key={label}
                className="ornate-border relative rounded-2xl bg-card p-5 transition-colors hover:border-accent/50"
              >
                <Ornament position="tl" />
                <Ornament position="br" />
                <p className="font-display text-3xl font-semibold text-primary">{number}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                <div className="mt-4">
                  <TrendBars points={trend} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* The Three Trials + illuminated dashboard */}
      <Reveal delay={0.1}>
        <section className="mt-20 grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <LoreHeading
              label="How I Work"
              lore="The Three Trials"
              line="Every quest follows the same path — from question to outcome."
            />
            <div className="mt-8 space-y-7">
              {trials.map(({ step, title, body }) => (
                <div key={step} className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 font-display text-sm font-semibold text-gold">
                    {step}
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium tracking-wide">{title}</p>
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
        <section className="mt-24 text-center">
          <ElvenDivider width={240} />
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-foreground">
            “Not all those who wander are lost.” The best analysis begins with the
            right question — let’s find yours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/work"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the Quests
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:border-accent"
            >
              Send Word
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  )
}
