import Link from 'next/link'
import { profile } from '@/lib/data'

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center sm:px-8">
        <p className="font-serif text-base">Chandana S. Gowda</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
