'use client'

import { motion } from 'framer-motion'

export type Skill = { name: string; level: number }

export default function SkillBars({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-5">
      {skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="mb-1.5 flex items-baseline justify-between">
            <span className="text-sm font-medium tracking-wide">{skill.name}</span>
            <span className="font-display text-xs text-gold">{skill.level}%</span>
          </div>
          {/* engraved stone track */}
          <div
            className="h-2 w-full overflow-hidden rounded-full"
            style={{
              background: 'hsl(var(--foreground) / 0.12)',
              boxShadow: 'inset 0 1px 2px hsl(var(--foreground) / 0.25)',
            }}
          >
            {/* forged gold→green fill */}
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, hsl(38 70% 52%) 0%, hsl(44 60% 50%) 35%, hsl(156 34% 30%) 100%)',
                boxShadow: '0 0 8px hsl(38 62% 47% / 0.4)',
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: i * 0.08 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
