# Project Context

## Purpose

A **reusable Vue 3 + Vuetify 4 design-system foundation**. It is two things in one
repository:

1. **A portable Vuetify preset** — a theme (light/dark), component defaults, SASS
   shape/font overrides, self-hosted fonts, and an SVG icon setup — meant to be
   copied into (or cloned as the starter for) future projects so they all share
   one visual language.
2. **A living style guide** — a single-page app that renders **real Vuetify
   components** under the preset across 13 documentation sections, doubling as
   visual verification that the preset matches the source spec.

The brand: pure-black `primary` (ink & structure), green `#00cc61` `secondary`
(every interactive/selected state), Material Design 3 type scale, 6-level
elevation, WCAG AA semantic colors.

## Target users

Developers on Romel Tech projects who need a consistent Vuetify 4 baseline. The
style-guide app is the human-facing reference; the preset files are the reusable
artifact.

## Main "workflows"

This is a static front-end reference app — there are no business workflows, user
accounts, or transactions. The primary flows are:

- Browse the 13 style-guide sections (§1 Color … §13 Handoff).
- Toggle light/dark theme to verify the preset in both modes.
- Copy the preset files into a new project (see `/ai/deployment.md` and README).

## Current status

**MVP / reference asset.** Fully built and visually verified in both themes. Not
published to npm; consumed by copy or clone.

## Technology stack (detected)

| Layer | Technology | Version (from package.json) |
| --- | --- | --- |
| Language | JavaScript (ESM), Vue SFCs | — (no TypeScript) |
| UI framework | Vue | ^3.5.0 |
| Component library | Vuetify | ^4.1.0 |
| Utility CSS | Tailwind CSS | ^4.0.0 (via @tailwindcss/vite) |
| Routing | vue-router | ^4.4.0 |
| Icons | @mdi/js (SVG paths) + Vuetify `mdi-svg` iconset | ^7.4.47 |
| Fonts | @fontsource/roboto, @fontsource/roboto-mono (self-hosted) | ^5.1.0 |
| Build tool | Vite | ^6.0.0 |
| Vuetify integration | vite-plugin-vuetify | ^2.1.0 |
| SASS | sass (dart-sass) | ^1.83.0 |
| Dev-only verification | playwright, @playwright/test | ^1.61.1 |
| Package manager | npm | (package-lock.json present) |

## Repository shape

**npm workspaces monorepo** (see ADR-002): `packages/vuetify-preset` (the
publishable library) + `apps/playground` (the front-end SPA style guide that
consumes it). No backend or database. The `reference/` directory holds the
original design spec (a static HTML mockup + its runtime) that the system was
built from — it is the source of truth and is never modified.

The published artifact is the **`vuetify-preset`** npm package (unscoped, public,
MIT); the playground is private and unpublished.

## External integrations

**None.** No payments, auth providers, email/SMS, storage, analytics, or
third-party APIs. Fonts and icons are self-hosted/bundled (no CDN calls at
runtime).

## What is intentionally absent

- No backend / server-side code.
- No database or any data store.
- No mobile app.
- No authentication or authorization.
- No background jobs, queues, or messaging.
- No `.env` / secrets (nothing to configure).
- No committed automated test suite (Playwright is present but used ad-hoc for
  visual verification — see `/ai/issues/technical-debt.md`).
