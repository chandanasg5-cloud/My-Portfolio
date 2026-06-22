'use client'

import { motion } from 'framer-motion'

/**
 * Compact column chart for stat cards — a clean, dashboard-style trend.
 * Bars rise in forest green with the most recent bar highlighted in gold,
 * sitting on a faint baseline. Heights are normalized to the series.
 */
export default function TrendBars({
  points,
  height = 44,
}: {
  points: number[]
  height?: number
}) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1

  return (
    <div className="flex items-end gap-[5px] border-b border-border/70 pb-px" style={{ height }}>
      {points.map((p, i) => {
        const isLast = i === points.length - 1
        // keep a visible minimum so early/low bars don't disappear
        const pct = 24 + ((p - min) / range) * 76
        return (
          <motion.span
            key={i}
            className={`flex-1 rounded-t-[3px] ${
              isLast ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-primary/75'
            }`}
            style={isLast ? { boxShadow: '0 0 8px hsl(38 62% 47% / 0.45)' } : undefined}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${pct}%`, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.06 }}
          />
        )
      })}
    </div>
  )
}
