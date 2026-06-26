import { cn } from '@/lib/utils'

/**
 * Modern section heading for the analytics theme:
 *  - `eyebrow`: small uppercase monospace label in emerald (the "data" voice)
 *  - `title`: the section name (Inter, tight tracking)
 *  - `line`: an optional supporting sentence
 *  - `divider`: an optional hairline rule under the title
 */
export default function SectionHeading({
  eyebrow,
  title,
  line,
  align = 'left',
  divider = false,
  className,
}: {
  eyebrow?: string
  title: string
  line?: string
  align?: 'left' | 'center'
  divider?: boolean
  className?: string
}) {
  const centered = align === 'center'
  return (
    <div className={cn(centered && 'flex flex-col items-center text-center', className)}>
      {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {divider && (
        <div
          className={cn(
            'mt-4 h-px w-12 bg-primary/50',
            centered ? 'mx-auto' : ''
          )}
        />
      )}
      {line && (
        <p
          className={cn(
            'mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground',
            centered && 'mx-auto'
          )}
        >
          {line}
        </p>
      )}
    </div>
  )
}
