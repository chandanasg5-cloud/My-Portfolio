# USA250 Project Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the America250 travel-demand forecast platform as the first case study in the Work page's projects list.

**Architecture:** Pure content change. The Work page (`src/app/work/page.tsx`) renders every case study from the `projects` array in `src/lib/data.ts`; adding one object in first position is the entire change. No components, styles, or routes are touched.

**Tech Stack:** Next.js 15.3.6, TypeScript. No test framework in this repo; verification is `tsc --noEmit`.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-14-usa250-project-entry-design.md` — facts, metric (`4.5%` / `live forecast error`), links, and first-position placement are fixed; only light copy line-editing for rhythm is allowed.
- **Local `next build` and `next dev` hang on this machine** (worker-spawn deadlock — see memory/project notes). Do NOT run them. Use `node_modules/.bin/tsc --noEmit` for local verification; visual verification happens on the Vercel deployment after push.
- Do not reorder or edit the five existing project entries other than the capstone moving from index 0 to index 1 as a consequence of the insertion.

---

### Task 1: Add the USA250 entry to the projects array

**Files:**
- Modify: `src/lib/data.ts` (insert at the top of the `projects` array, currently starting at line 97; the first existing entry is "Funnel and KPI Analysis, Hazmat Industry" at line 98)

**Interfaces:**
- Consumes: the existing inline `projects` element type in `src/lib/data.ts` (`{ title, org, context, role, actions, outcome, metric, metricLabel, links: ProjectLink[] }`).
- Produces: nothing new — later code already maps over `projects`.

- [x] **Step 1: Insert the new entry**

In `src/lib/data.ts`, insert the following object as the FIRST element of the `projects` array (immediately after the opening `]= [` of the array literal, before the `Funnel and KPI Analysis, Hazmat Industry` entry):

```ts
  {
    title: 'America250 Travel-Demand Forecast',
    org: 'Self-Directed Project',
    context:
      'July 4, 2026 — America’s 250th anniversary — was projected to be a record travel window, but no public tool forecast its daily demand or showed where impact would concentrate using only free, cited data.',
    role: 'Sole analyst and builder, from data pipeline through model selection, dashboard, and live validation.',
    actions: [
      'Built an ingestion pipeline over TSA, EIA, weather, and holiday data, then selected Prophet with a COVID-period indicator over SARIMA on a 2024–2025 holdout (6.33% vs 9.22% MAPE).',
      'Validated the forecast against reality as TSA published actuals: all 9 days of the July 4th window landed inside the uncertainty interval.',
      'Added a City Impact layer scoring 8 cities on exposure to anniversary demand — air capacity, events, and demographics — with live-adjustable weights.',
    ],
    outcome:
      'A deployed dashboard whose forecast held up against real-world actuals — 4.5% live error, beating its own 6.33% holdout benchmark.',
    metric: '4.5%',
    metricLabel: 'live forecast error',
    links: [
      { label: 'Live demo', href: 'https://usa-250th-wrdksypyzzwjjdcucxn9pe.streamlit.app/' },
      { label: 'GitHub', href: 'https://github.com/chandanasg5-cloud/USA-250th' },
    ],
  },
```

Note: keep the typographic characters (`’`, `—`, `–`) exactly as shown — other entries in this file use them directly in single-quoted strings.

- [x] **Step 2: Type-check**

Run: `cd ~/Desktop/Portfolio && node_modules/.bin/tsc --noEmit`
Expected: exits 0 with no output.

- [x] **Step 3: Commit**

```bash
git add src/lib/data.ts
git commit -m "Add America250 travel-demand forecast case study"
```

- [x] **Step 4: Push and verify on Vercel**

```bash
git push origin main
```

Then confirm on the Vercel production deployment that `/work` shows the new card first with the `4.5%` metric and both links working. (Pushing to `main` publishes to the live site — this is expected and approved in the spec.)
