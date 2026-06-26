import Link from 'next/link'
import { profile } from '@/lib/data'

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-semibold tracking-tight">
              Chandana S. Gowda
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} Chandana S. Gowda · Built with Next.js
        </p>
      </div>
    </footer>
  )
}
