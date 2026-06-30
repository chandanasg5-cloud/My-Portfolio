'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import GridBackdrop from '@/components/theme/GridBackdrop'

/**
 * Clean, modern hero for the analytics theme: light surface with a faint
 * dot-grid backdrop and soft emerald glow, a tight headline with a single
 * emerald accent phrase, and the portrait presented as a calm framed card
 * with a floating KPI chip.
 */
export default function Hero() {
  return (
    <section className="relative pt-14 sm:pt-20">
      <GridBackdrop className="-z-10" />

      <div className="grid grid-cols-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* left: text */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-primary"
          >
            Business Analyst · Chicago
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            Turning complex data into
            <br className="hidden sm:block" /> decisions you can{' '}
            <span className="accent-gradient">defend.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href="/work"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_hsl(162_84%_24%/0.6)] transition-transform hover:-translate-y-0.5"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* tech stack strip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 font-mono text-xs tracking-wide text-muted-foreground"
          >
            SQL · Tableau · Power BI · Alteryx · BigQuery
          </motion.p>
        </div>

        {/* right: framed portrait */}
        <motion.figure
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[330px] lg:mx-0 lg:ml-auto"
        >
          <div className="card-elevated rounded-3xl border border-border bg-card p-2.5">
            <Image
              src="/portrait.jpg"
              alt={`${profile.name}, ${profile.title}`}
              width={720}
              height={900}
              priority
              className="h-auto w-full rounded-[1.15rem] object-cover"
            />
          </div>

          {/* floating KPI chip — a touch of data flavor */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="card-elevated absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 font-mono text-sm font-semibold text-primary">
              +20%
            </span>
            <span className="text-left text-xs leading-tight text-muted-foreground">
              workflow
              <br />
              efficiency gained
            </span>
          </motion.div>

          <figcaption className="mt-5 text-center text-sm text-muted-foreground">
            {profile.name} · {profile.title}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
