'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-accent/25 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* small elven leaf glyph */}
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="text-accent">
            <path
              d="M9 1 C12 5 12 13 9 17 C6 13 6 5 9 1 Z"
              fill="currentColor"
              fillOpacity="0.85"
            />
            <path d="M9 3 V15" stroke="hsl(var(--background))" strokeWidth="0.8" />
          </svg>
          <span className="font-display text-base font-semibold uppercase tracking-[0.14em]">
            Chandana Gowda
          </span>
        </Link>
        <ul className="flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'relative text-sm tracking-wide transition-colors',
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
