import { cn } from '@/lib/utils'

/**
 * A plain hairline divider that fades out to either side.
 * Decorative only.
 */
export default function Divider({
  className,
  width = 220,
}: {
  className?: string
  width?: number
}) {
  return (
    <div className={cn('flex justify-center', className)} aria-hidden>
      <div
        className="h-px"
        style={{
          width,
          background:
            'linear-gradient(90deg, transparent, hsl(var(--border)) 18%, hsl(var(--border)) 82%, transparent)',
        }}
      />
    </div>
  )
}
