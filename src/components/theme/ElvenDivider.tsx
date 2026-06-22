import { cn } from '@/lib/utils'

/**
 * A slim Elvish-style horizontal divider: a central leaf/diamond motif
 * with vine flourishes that fade out to either side. Decorative only.
 */
export default function ElvenDivider({
  className,
  width = 220,
}: {
  className?: string
  width?: number
}) {
  return (
    <div className={cn('flex justify-center', className)} aria-hidden>
      <svg
        width={width}
        height="18"
        viewBox="0 0 220 18"
        fill="none"
        className="text-accent/70"
      >
        <defs>
          <linearGradient id="elven-fade" x1="0" x2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="1" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M2 9 H86" stroke="url(#elven-fade)" strokeWidth="1" />
        <path d="M134 9 H218" stroke="url(#elven-fade)" strokeWidth="1" />
        {/* vine curls flanking the center */}
        <path
          d="M86 9 q6 -7 12 0 q6 7 12 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M134 9 q-6 -7 -12 0 q-6 7 -12 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        {/* central leaf/diamond */}
        <path
          d="M110 2 L116 9 L110 16 L104 9 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <circle cx="110" cy="9" r="1.4" fill="hsl(var(--card))" />
      </svg>
    </div>
  )
}
