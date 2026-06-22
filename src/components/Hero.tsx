'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import Fireflies from '@/components/theme/Fireflies'
import ElvenDivider from '@/components/theme/ElvenDivider'

/**
 * Full-bleed cinematic hero — the "arrival in the misty valley".
 * Uses a breakout wrapper so it spans the viewport despite the centered
 * content container, then fades into parchment at its lower edge.
 */
export default function Hero() {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      {/* base painting */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-valley.jpg')" }}
      />
      {/* twilight tint + readability gradients */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, hsl(220 42% 8% / 0.62) 0%, hsl(215 38% 12% / 0.55) 40%, hsl(156 34% 14% / 0.6) 70%, hsl(40 38% 94%) 100%)',
        }}
      />
      {/* forest-green/gold vignette for mood */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 20%, transparent 40%, hsl(220 45% 6% / 0.55) 100%)',
        }}
      />
      {/* drifting mist near the base */}
      <div aria-hidden className="mist animate-mist absolute inset-x-0 bottom-0 h-2/3" />

      <Fireflies />

      {/* content */}
      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-28 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-sm italic text-amber-200/90"
        >
          The House of Analysis · Imladris
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="my-5"
        >
          <ElvenDivider width={200} className="[&_*]:!text-amber-300/80" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-amber-50 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-6xl"
        >
          Data, read with care.
          <br />
          <span className="gold-gradient">Decisions worth the journey.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/work"
            className="rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-7 py-3 text-sm font-semibold text-stone-900 shadow-[0_10px_30px_-10px_rgba(217,160,60,0.7)] transition-transform hover:-translate-y-0.5"
          >
            View the Quests
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-amber-200/40 bg-white/5 px-7 py-3 text-sm font-medium text-amber-50 backdrop-blur-sm transition-colors hover:border-amber-200/80"
          >
            Send Word
          </Link>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 font-serif text-xs italic tracking-wide text-amber-100/70"
        >
          {profile.title} · {profile.location}
        </motion.span>
      </div>
    </section>
  )
}
