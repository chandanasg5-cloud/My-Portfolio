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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* bar-chart mark */}
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <rect x="2" y="9" width="2.6" height="5" rx="0.6" fill="white" fillOpacity="0.95" />
              <rect x="6.7" y="6" width="2.6" height="8" rx="0.6" fill="white" fillOpacity="0.8" />
              <rect x="11.4" y="3" width="2.6" height="11" rx="0.6" fill="white" />
            </svg>
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
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
                    'relative text-sm transition-colors',
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary" />
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
