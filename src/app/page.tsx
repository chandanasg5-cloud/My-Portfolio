import Link from 'next/link'
import { profile, stats } from '@/lib/data'

export default function Home() {
  return (
    <section className="py-24 sm:py-32">
      <p className="mb-6 text-sm uppercase tracking-[0.2em] text-primary">
        {profile.title}
      </p>

      <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
        Data, read carefully and turned into decisions.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
        {profile.summary}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
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

      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {stats.map(({ number, label }) => (
          <div key={label} className="bg-background p-6">
            <dt className="font-serif text-3xl font-semibold text-primary">{number}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
