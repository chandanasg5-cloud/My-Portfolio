/**
 * Page-level header (h1) for inner pages. The h1 counterpart of
 * SectionHeading: monospace eyebrow, large tight title, hairline rule,
 * and an optional supporting line.
 */
export default function PageHeader({
  eyebrow,
  title,
  line,
}: {
  eyebrow: string
  title: string
  line?: string
}) {
  return (
    <header className="pt-20 sm:pt-24">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <div className="mt-5 h-px w-16 bg-primary/50" />
      {line && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {line}
        </p>
      )}
    </header>
  )
}
