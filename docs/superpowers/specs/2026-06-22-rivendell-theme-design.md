# Rivendell — Lord of the Rings themed BA portfolio

**Date:** 2026-06-22
**Owner:** Chandana S. Gowda
**Status:** Approved, building

## Concept

A Lord of the Rings re-skin of the existing Next.js business-analyst portfolio,
in the **subtle & sophisticated** register inspired by **Rivendell** (the elven
valley). It reads as a premium, atmospheric portfolio first; the LOTR
craftsmanship rewards a closer look. All real BA content stays sharp and
recruiter-legible.

Narrative: the visitor **arrives in the misty valley** (a dark cinematic treated
hero), then **descends into the manuscript** of the career on warm parchment.

## Decisions (from brainstorming)

- Theme intensity: **subtle & sophisticated**
- Hero: **hybrid** — licensed photo, heavily treated, + CSS mist/particles
- Mood: **parchment (light) default**; forest green + gold accents; no toggle
- Lore: **light lore copy** — dual labels + one atmospheric line per section
- Scope: **full site** (Home, About, Work, Contact, nav, footer, viz)
- Data-viz: **re-skin into theme**, real data kept

## Palette (CSS variables in globals.css)

- Background — aged parchment cream `hsl(40 38% 94%)`
- Card — lighter vellum `hsl(42 46% 97%)`
- Ink (foreground) — deep walnut `hsl(28 22% 15%)`
- Primary — Rivendell forest green `hsl(156 34% 27%)`
- Accent — mithril/autumn gold `hsl(38 62% 47%)`
- Border — weathered stone `hsl(38 24% 82%)`
- Muted — `hsl(40 22% 89%)`, muted-foreground `hsl(28 12% 38%)`
- Hero overlay — twilight blue-charcoal gradient over photo

## Typography

- **Cinzel** (new, Google Fonts) — wordmark + major display headings (engraved/inscription feel)
- **Fraunces** (existing) — sub-headings / serif accents
- **Inter** (existing) — body text

## Components

- `Ornament` / `ElvenDivider` — decorative SVG flourishes (corners + horizontal divider)
- `LoreHeading` — professional label + small lore subtitle + optional atmospheric line
- `Fireflies` — slow-rising gold particles (Framer Motion), used in hero
- Hero — treated photo backdrop + twilight gradient + parchment fade + mist + fireflies + Cinzel headline
- Nav — Cinzel wordmark, gold active underline, parchment/blur bar, glyph ornament
- Footer — Elvish divider, gold links, faint closing line

## Data-viz reskin (real data kept)

- `Sparkline` → gold ink line on faint vellum
- `SkillBars` → forged meters: engraved dark track, gold→green gradient fill
- `DashboardCard` → illuminated-manuscript panel: gold corner flourishes, green/gold charts, hairline rules

## Lore labels

- Stats → "By the Numbers"
- How I work → "The Three Trials · Frame · Analyze · Recommend"
- Work/Projects → "Quests Undertaken"
- Experience → "The Road So Far"
- Skills → "Crafts Mastered"
- About → "The Traveller"
- Contact → "Send Word"

## Non-goals (YAGNI)

- No dark/light toggle (parchment only)
- No map-based navigation
- No real Tengwar translation engine
- No heavy 3D / WebGL

## Constraints

- Keep all existing SEO metadata, JSON-LD, analytics, sitemap/robots/manifest, and
  the contact API (Resend) wiring intact.
- Hero image must be properly licensed (Unsplash free license or public domain),
  committed to `/public` with attribution noted.
