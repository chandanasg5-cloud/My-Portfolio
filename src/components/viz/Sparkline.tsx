'use client'

import { motion } from 'framer-motion'

export default function Sparkline({
  points,
  width = 120,
  height = 36,
}: {
  points: number[]
  width?: number
  height?: number
}) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const step = width / (points.length - 1)

  const coords = points.map((p, i) => {
    const x = i * step
    const y = height - ((p - min) / range) * (height - 6) - 3
    return [x, y] as const
  })

  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const area = `${line} L${width},${height} L0,${height} Z`

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <motion.path
        d={area}
        fill="hsl(var(--accent) / 0.10)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </svg>
  )
}
