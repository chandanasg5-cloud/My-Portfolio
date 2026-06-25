# Portfolio Rebrand — "Clean Analytics"

**Date:** 2026-06-25
**Goal:** Replace the fantasy/Rivendell theme (visuals + copy) with a modern, professional, sophisticated data/analytics aesthetic.

## Direction (approved)
- **Scope:** Full rebrand — visuals AND copy.
- **Look:** Light & clean (near-white base, charcoal text, generous whitespace).
- **Accent:** Deep emerald (`#047857` family) as the single brand color.
- **Content:** `data.ts` résumé content is already professional and stays as-is. This is a presentation rebrand.

## Color system (`globals.css` tokens)
| token | value (HSL) | role |
|---|---|---|
| background | `210 20% 98%` | near-white cool base |
| foreground | `222 24% 14%` | charcoal slate text |
| card | `0 0% 100%` | white surfaces |
| primary | `162 84% 24%` | deep emerald (buttons, headings accents) |
| accent | `160 84% 30%` | emerald (links, charts, highlights) |
| muted-foreground | `215 14% 42%` | secondary text |
| border | `214 20% 90%` | hairline borders |
| radius | `0.75rem` | rounded, modern |

Remove parchment grain background and fantasy utilities (`gold-gradient`, `gold-glow`,
`ornate-border`, `mist`, firefly/mist keyframes). Add `accent-gradient` (emerald text),
and a faint dot-grid backdrop used only behind the hero.

## Typography
- **Headings + body:** Inter (already loaded) — tight tracking on large headings.
- **Data accent:** JetBrains Mono for eyebrow labels, stat numbers, KPI chips.
- Drop Cinzel (display serif) and Fraunces (serif italic). `font-display` → Inter.

## Components
- `theme/` fantasy components replaced:
  - `LoreHeading` → `SectionHeading` (mono uppercase eyebrow + title + line + optional rule)
  - `PageHeader` → rewritten (h1 variant of SectionHeading)
  - `ElvenDivider` → `Divider` (plain hairline)
  - `Ornament`, `Fireflies` → removed
  - new `GridBackdrop` (faint dot grid for hero)
- `viz/` kept, recolored gold/amber → emerald/slate (`DashboardCard`, `SkillBars`,
  `Sparkline`, `Reveal`). Charts already read `--accent`, so they follow the token change.
- `Hero` rebuilt: contained light hero, dot-grid + soft emerald glow, tight headline with
  one emerald accent phrase, solid-emerald + outline CTAs, portrait as a clean rounded card
  with a floating KPI chip. Drops `hero-valley.jpg`.

## Copy rewrite (de-fantasize)
- Eyebrow: "SENIOR BUSINESS ANALYST · CHICAGO"
- Headline: "Turning complex data into decisions you can **defend.**"
- CTAs: "View Work" / "Get in Touch" (was "View the Quests" / "Send Word")
- Section labels: "By the Numbers", "How I Work" (Frame/Analyze/Recommend kept),
  "Experience", "Selected Projects", "Get in touch".
- Remove Tolkien quotes (home closing, footer) → professional CTA lines.
- Apply across all pages, nav, footer, contact form, and the contact email is unaffected.

## Brand assets
- `icon.svg`, `opengraph-image.tsx`, `manifest.ts`: emerald + light/slate palette
  (was green + gold on parchment).

## Files touched
`globals.css`, `layout.tsx`, `tailwind.config.ts`, `Hero.tsx`, `page.tsx`,
`about/page.tsx`, `work/page.tsx`, `contact/page.tsx`, `SiteNav.tsx`, `SiteFooter.tsx`,
`ContactForm.tsx`, `theme/*` (replace), `viz/*` (recolor), `icon.svg`,
`opengraph-image.tsx`, `manifest.ts`.

## Out of scope
Résumé content changes, new pages/sections, case-study restructuring.

## Verification
`npm run build` succeeds; manual check of every page at desktop + mobile widths;
no remaining fantasy terms (`grep -riE 'quest|trial|elven|firefl|imladris|rivendell'`).
