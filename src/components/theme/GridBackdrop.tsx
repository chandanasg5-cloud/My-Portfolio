/**
 * Faint dot-grid backdrop with a soft emerald glow — a subtle nod to
 * graph paper / dashboards. Decorative; place inside a relatively
 * positioned container.
 */
export default function GridBackdrop({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="grid-backdrop absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, hsl(160 84% 36% / 0.10), transparent 70%)',
        }}
      />
    </div>
  )
}
