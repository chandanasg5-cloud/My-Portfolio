'use client'

import { motion } from 'framer-motion'

const bars = [38, 52, 44, 67, 58, 80, 72]
const line = [20, 34, 28, 46, 40, 60, 76]
const months = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const W = 320
const H = 150
const stepX = W / (line.length - 1)
const max = 100
const linePath = line
  .map((v, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${H - (v / max) * H}`)
  .join(' ')
const areaPath = `${linePath} L${W},${H} L0,${H} Z`

export default function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      className="card-elevated relative w-full rounded-3xl border border-border bg-card p-6"
    >
      {/* Header row */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="eyebrow text-primary">Operations · Last 7 days</p>
          <p className="mt-2 font-display text-lg font-semibold tracking-tight">KPI Overview</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </div>
      </div>

      {/* Metric tiles */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        {[
          { v: '+20%', l: 'Efficiency' },
          { v: '15+', l: 'KPIs' },
          { v: '98%', l: 'Quality' },
        ].map((m, i) => (
          <motion.div
            key={m.l}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="rounded-xl border border-border/60 bg-muted/50 p-3"
          >
            <p className="font-display text-lg font-semibold text-primary">{m.v}</p>
            <p className="text-[11px] text-muted-foreground">{m.l}</p>
          </motion.div>
        ))}
      </div>

      {/* Line chart */}
      <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-[120px] w-full overflow-visible">
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1="0"
              x2={W}
              y1={H * g}
              y2={H * g}
              stroke="hsl(var(--accent) / 0.18)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          ))}
          <motion.path
            d={areaPath}
            fill="hsl(var(--accent) / 0.12)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.path
            d={linePath}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.5 }}
          />
          {line.map((v, i) => (
            <motion.circle
              key={i}
              cx={i * stepX}
              cy={H - (v / max) * H}
              r="3"
              fill="hsl(var(--card))"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06 }}
            />
          ))}
        </svg>
      </div>

      {/* Bar chart */}
      <div className="mt-4 flex items-end justify-between gap-2 px-1">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-16 w-full items-end">
              <motion.div
                className="w-full rounded-t-[4px]"
                style={{
                  background:
                    'linear-gradient(180deg, hsl(156 34% 34%), hsl(156 34% 24%))',
                }}
                initial={{ height: 0 }}
                animate={{ height: `${b}%` }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 + i * 0.07 }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground">{months[i]}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
