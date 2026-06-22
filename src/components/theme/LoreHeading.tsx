import ElvenDivider from './ElvenDivider'
import { cn } from '@/lib/utils'

/**
 * Section heading with light LOTR "lore" flavor:
 *  - `label`: the plain professional name (Cinzel display caps)
 *  - `lore`: a small elven/lore subtitle (gold serif italic)
 *  - `line`: an optional single atmospheric sentence
 *
 * Content underneath stays professional; this only frames it.
 */
export default function LoreHeading({
  label,
  lore,
  line,
  align = 'left',
  divider = false,
  className,
}: {
  label: string
  lore?: string
  line?: string
  align?: 'left' | 'center'
  divider?: boolean
  className?: string
}) {
  const centered = align === 'center'
  return (
    <div className={cn(centered && 'flex flex-col items-center text-center', className)}>
      {lore && (
        <p className="font-serif text-sm italic text-gold">{lore}</p>
      )}
      <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-foreground sm:text-3xl">
        {label}
      </h2>
      {divider && <ElvenDivider className={cn('mt-4', centered ? '' : 'justify-start')} />}
      {line && (
        <p
          className={cn(
            'mt-3 max-w-xl font-serif text-[15px] italic leading-relaxed text-muted-foreground',
            centered && 'mx-auto'
          )}
        >
          {line}
        </p>
      )}
    </div>
  )
}
