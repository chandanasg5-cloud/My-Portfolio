import type { Metadata } from 'next'
import { about, certifications, education, skills, skillLevels } from '@/lib/data'
import SkillBars from '@/components/viz/SkillBars'
import PageHeader from '@/components/theme/PageHeader'
import SectionHeading from '@/components/theme/SectionHeading'

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
        eyebrow="About"
        title="About"
        line="A short account of the work, the tools, and the method behind the recommendations."
      />

      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-20 grid gap-16 sm:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Toolkit" title="Tools & Proficiency" />
          <div className="card-elevated mt-6 rounded-2xl border border-border bg-card p-6">
            <SkillBars skills={skillLevels} />
          </div>

          <div className="mt-8 space-y-5">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="eyebrow text-primary">{category}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Background" title="Education" />
          <ul className="mt-6 space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {e.school}
                  {e.year ? `, ${e.year}` : ''}
                </p>
                {e.gpa && <p className="mt-0.5 font-mono text-sm text-primary">GPA {e.gpa}</p>}
              </li>
            ))}
          </ul>

          <SectionHeading className="mt-12" eyebrow="Credentials" title="Certifications" />
          <ul className="mt-6 space-y-2 text-muted-foreground">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
