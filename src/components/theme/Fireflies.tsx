'use client'

import { motion } from 'framer-motion'

/**
 * Slow-rising gold "fireflies" for the hero. Positions are a fixed list so
 * server and client render identically (no hydration mismatch), and the
 * animation respects prefers-reduced-motion via Framer Motion defaults.
 */
const FLIES = [
  { left: '8%', size: 3, delay: 0, dur: 9, drift: 14 },
  { left: '18%', size: 2, delay: 2.5, dur: 11, drift: -10 },
  { left: '27%', size: 4, delay: 1.2, dur: 8, drift: 18 },
  { left: '38%', size: 2, delay: 4, dur: 12, drift: -16 },
  { left: '46%', size: 3, delay: 0.6, dur: 10, drift: 12 },
  { left: '57%', size: 2, delay: 3.2, dur: 9.5, drift: -8 },
  { left: '66%', size: 4, delay: 1.8, dur: 8.5, drift: 20 },
  { left: '74%', size: 2, delay: 5, dur: 11.5, drift: -14 },
  { left: '83%', size: 3, delay: 2, dur: 10.5, drift: 10 },
  { left: '91%', size: 2, delay: 3.8, dur: 9, drift: -12 },
  { left: '13%', size: 2, delay: 6, dur: 12.5, drift: 8 },
  { left: '62%', size: 3, delay: 6.5, dur: 9.2, drift: -18 },
]

export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {FLIES.map((f, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-amber-200"
          style={{
            left: f.left,
            bottom: '-6%',
            width: f.size,
            height: f.size,
            boxShadow: '0 0 6px 1px rgba(245, 215, 130, 0.8)',
          }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 0.9, 0.9, 0],
            y: ['0%', '-560%'],
            x: [0, f.drift, 0],
          }}
          transition={{
            duration: f.dur,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
