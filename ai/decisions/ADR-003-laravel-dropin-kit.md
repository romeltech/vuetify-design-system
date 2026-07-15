# ADR-003: Self-contained Laravel + Vue drop-in kit

- **Status:** Accepted
- **Date:** 2026-07-15
- **Relates to:** ADR-002 (the npm package)

## Context

The design system needs to be usable in **Laravel + Vue (Vite)** apps for both
**Inertia + Vue 3** and plain **Vue SPA** setups. The team wanted a **single
self-contained folder** they can copy into `resources/js/` — no `npm i
vuetify-preset` — that also includes the **full 13-section showcase**.

The npm package (ADR-002) already works in Laravel (Laravel builds with Vite, and
`vite-plugin-vuetify` runs there). But the explicit ask was a zero-dependency,
copy-paste folder.

## Decision

Add **`laravel-kit/`** to the repo, containing the copy-paste
**`vuetify-preset/`** folder:

- `preset/` — a **self-contained copy** of the package (theme, defaults, icons,
  tokens, fonts, `settings.scss`). No dependency on the published package.
- `vuetify.js` — `makeVuetify({ ssr })` factory + default instance; one instance
  reused by both Inertia and SPA entry points.
- `showcase/Showcase.vue` — the App shell + all 13 sections merged into **one
  router-free component** (nav uses `#anchor` links, theme via `useTheme()`), so
  it mounts on any Inertia page or SPA route. Section files use **local relative
  imports** (no `@/` alias, no npm specifier).
- `laravel-kit/README.md` — Inertia + SPA + `vite.config.js` recipe and the
  **Tailwind preflight** caveat.
- `laravel-kit/sync-preset.mjs` — refreshes `preset/` from
  `packages/vuetify-preset` to limit drift.

Peers the consuming app installs: `vue`, `vuetify`, `@mdi/js`, `@fontsource/*`
(runtime) and `vite-plugin-vuetify`, `@vitejs/plugin-vue`, `sass` (build). Vue 3
+ Vite required. Tailwind is **not** part of the kit.

## Consequences

**Benefits**
- Drop-in for Laravel with no package install; works for Inertia and SPA from one
  folder and one Vuetify instance.
- Local `settings.scss` path in `vite.config.js` (no `require.resolve` needed).

**Limitations / obligations**
- **Duplication** of the package (and showcase) source — accepted for
  self-containment. `sync-preset.mjs` refreshes the `preset/` copy; showcase files
  are re-copied manually if the playground evolves.
- Legacy Laravel Mix/webpack isn't covered (would need `webpack-plugin-vuetify`).

## Verification performed

Built the kit through a throwaway **Vite + Vue harness** (the same build context
Laravel uses) that imports only `vue`/`vuetify`/`@mdi/js`/`@fontsource/*` plus the
kit's relative files — no `vuetify-preset` package:
- `vite build` succeeded (427 modules) — all relative imports, the SASS
  `configFile`, `?raw`, and fonts resolved with zero package dependency.
- Rendered in both themes: 58/58 icons as SVG, zero console errors, output matches
  the playground.
- The playground (`npm run build`) still builds — the kit is purely additive.
