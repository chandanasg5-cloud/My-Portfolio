# USA250 Project Entry — Design

**Date:** 2026-07-14
**Status:** Approved

## Goal

Add the America250 Economic Impact Intelligence Platform (`~/Desktop/USA250`,
live at Streamlit Community Cloud) as a case study on the Work page. This also
closes a recorded follow-up: linking the live app from chandanasgowda.com.

## Approach

Single data change: add one object to the `projects` array in
`src/lib/data.ts`, in **first position** (the DePaul capstone moves to second).
The Work page renders entirely from that array, so no component, layout, or
styling changes are needed.

Rejected alternatives:
- Home-page tie-in (swapping a hero stat) — touches the tuned hero for
  marginal gain.
- A visually distinct "featured project" card — contradicts the uniform card
  system from the 2026-06 analytics rebrand.

## Entry content

Follows the existing case-study shape (`title / org / context / role /
actions / outcome / metric / metricLabel / links`):

- **title:** `America250 Travel-Demand Forecast`
- **org:** `Self-Directed Project`
- **context:** July 4, 2026 — America's 250th anniversary — was projected to
  be a record travel window, but there was no public tool forecasting its
  daily demand or showing where impact would concentrate, using only free,
  cited data.
- **role:** Sole analyst and builder — data pipeline, model selection,
  dashboard, and live validation.
- **actions:**
  1. Built an ingestion pipeline over TSA, EIA, weather, and holiday data,
     then selected Prophet with a COVID-period indicator over SARIMA on a
     2024–2025 holdout (6.33% vs 9.22% MAPE).
  2. Validated the forecast against reality as TSA published actuals: all
     9 days of the July 4th window landed inside the uncertainty interval.
  3. Added a City Impact layer scoring 8 cities on exposure to anniversary
     demand (air capacity, events, demographics), with live-adjustable
     weights.
- **outcome:** A deployed dashboard whose forecast held up against
  real-world actuals — 4.5% live error, beating its own 6.33% holdout
  benchmark.
- **metric:** `4.5%`
- **metricLabel:** `live forecast error`
- **links:**
  - Live demo → `https://usa-250th-wrdksypyzzwjjdcucxn9pe.streamlit.app/`
  - GitHub → `https://github.com/chandanasg5-cloud/USA-250th`

Copy may be lightly line-edited during implementation for length/rhythm
against the rendered card, but facts, metric, and links are fixed as above.

## Verification

- `node_modules/.bin/tsc --noEmit` locally (local `next build`/`next dev`
  hang on this machine — known worker-spawn deadlock; see project notes).
- Visual verification on the Vercel deployment after push.
