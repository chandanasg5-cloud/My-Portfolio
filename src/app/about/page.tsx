import type { Metadata } from 'next'
import Image from 'next/image'
import { about, certifications, education, skills, skillLevels, profile } from '@/lib/data'
import SkillBars from '@/components/viz/SkillBars'
import PageHeader from '@/components/theme/PageHeader'
import LoreHeading from '@/components/theme/LoreHeading'
import Ornament from '@/components/theme/Ornament'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Chandana S. Gowda is a Senior Business Analyst with a Master of Science in Business Analytics from DePaul University, skilled in SQL, Tableau, Power BI, and hypothesis-driven analysis.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <section className="pb-24">
      <PageHeader
        label="About"
        lore="The Traveller"
        line="A short account of the road walked, the crafts learned, and the lore gathered along the way."
      />

      <div className="mt-12 grid items-start gap-10 sm:grid-cols-[300px_1fr] sm:gap-12">
        {/* Framed portrait — illuminated manuscript style */}
        <figure className="ornate-border gold-glow relative mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl bg-card p-2">
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
            className="h-auto w-full rounded-xl object-cover"
          />
        </figure>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-16 sm:grid-cols-2">
        <div>
          <LoreHeading label="Tools & Proficiency" lore="Crafts Mastered" />
          <div className="ornate-border relative mt-6 rounded-2xl bg-card p-6">
            <Ornament position="tl" />
            <Ornament position="br" />
            <SkillBars skills={skillLevels} />
          </div>

          <div className="mt-8 space-y-5">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="font-display text-xs uppercase tracking-[0.18em] text-gold">
                  {category}
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <LoreHeading label="Education" lore="Lore Learned" />
          <ul className="mt-6 space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-accent/40 pl-4">
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {e.school}
                  {e.year ? `, ${e.year}` : ''}
                </p>
                {e.gpa && <p className="mt-0.5 text-sm text-gold">GPA {e.gpa}</p>}
              </li>
            ))}
          </ul>

          <LoreHeading className="mt-12" label="Certifications" lore="Marks of Mastery" />
          <ul className="mt-6 space-y-2 text-muted-foreground">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-accent/70" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
