'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import Fireflies from '@/components/theme/Fireflies'
import ElvenDivider from '@/components/theme/ElvenDivider'
import Ornament from '@/components/theme/Ornament'

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
      <div className="relative mx-auto grid min-h-[90vh] w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-28 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* left: text */}
        <div className="text-center lg:text-left">
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
            className="my-5 flex justify-center lg:justify-start"
          >
            <ElvenDivider width={200} className="[&_*]:!text-amber-300/80" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-display text-[1.7rem] font-semibold leading-[1.15] tracking-tight text-amber-50 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl"
          >
            Data, read with care.
            <br />
            <span className="gold-gradient">Decisions worth the journey.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-stone-200/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] lg:mx-0"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
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
        </div>

        {/* right: framed portrait */}
        <motion.figure
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[330px] lg:mx-0 lg:ml-auto"
        >
          {/* gold frame + parchment mat */}
          <div className="rounded-[1.5rem] bg-gradient-to-b from-amber-300/90 via-amber-500/80 to-amber-700/80 p-[3px] shadow-[0_40px_90px_-35px_rgba(0,0,0,0.85)]">
            <div className="relative rounded-[1.35rem] bg-[hsl(40_38%_94%)] p-2.5">
              <Ornament position="tl" className="z-10" />
              <Ornament position="tr" className="z-10" />
              <Ornament position="bl" className="z-10" />
              <Ornament position="br" className="z-10" />
              <Image
                src="/portrait.jpg"
                alt={`${profile.name}, ${profile.title}`}
                width={720}
                height={900}
                priority
                className="h-auto w-full rounded-[1rem] object-cover"
              />
            </div>
          </div>
          <figcaption className="mt-4 text-center font-serif text-sm italic text-amber-100/85">
            {profile.name} · {profile.title}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
