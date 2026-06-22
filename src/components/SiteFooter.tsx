import Link from 'next/link'
import { profile } from '@/lib/data'
import ElvenDivider from '@/components/theme/ElvenDivider'

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-accent/25">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
        <ElvenDivider width={260} />
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-semibold uppercase tracking-[0.12em]">
              Chandana S. Gowda
            </p>
            <p className="mt-1 font-serif text-sm italic text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-gold">
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center font-serif text-xs italic text-muted-foreground/80">
          “Even the smallest dataset can change the course of the decision.”
        </p>
      </div>
    </footer>
  )
}
