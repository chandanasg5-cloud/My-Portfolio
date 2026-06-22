import ElvenDivider from './ElvenDivider'

/**
 * Page-level header (h1) with light lore framing, used at the top of
 * inner pages. Mirrors LoreHeading but renders an h1 for SEO/semantics.
 */
export default function PageHeader({
  label,
  lore,
  line,
}: {
  label: string
  lore: string
  line?: string
}) {
  return (
    <header className="pt-20 sm:pt-24">
      <p className="font-serif text-sm italic text-gold">{lore}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
        {label}
      </h1>
      <ElvenDivider width={200} className="mt-5 justify-start" />
      {line && (
        <p className="mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground">
          {line}
        </p>
      )}
    </header>
  )
}
