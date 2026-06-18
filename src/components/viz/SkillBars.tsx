'use client'

import { motion } from 'framer-motion'

export type Skill = { name: string; level: number }

export default function SkillBars({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-5">
      {skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="mb-1.5 flex items-baseline justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-primary"
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
