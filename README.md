# Vuetify 4 Design System

A reusable **Vue 3 + Vuetify 4** design-system preset and living style guide.
Brand: pure-black `primary` (ink & structure), green `#00cc61` `secondary`
(every interactive/selected state). Material Design 3 type scale, 6-level
elevation, WCAG AA semantic colors.

Built from the specification in [`reference/v1/`](reference/v1) — the single
source of truth. The playground renders **real Vuetify components** under the
preset, so it doubles as visual verification that the preset matches the spec.

This is an **npm workspaces monorepo**:

- [`packages/vuetify-preset`](packages/vuetify-preset) — ★ the publishable
  package (`vuetify-preset` on npm). See its [README](packages/vuetify-preset/README.md).
- [`apps/playground`](apps/playground) — the living style guide that consumes it.

## Technology stack

Vue 3.5 · Vuetify 4.1 · Tailwind CSS 4 (supplementary) · vue-router 4 ·
Vite 6 · `vite-plugin-vuetify` + `sass` · `@mdi/js` (SVG icons) ·
self-hosted Roboto / Roboto Mono (`@fontsource`). JavaScript (no TypeScript),
npm. Client-only SPA — no backend, database, or API.

## Prerequisites

- **Node.js ≥ 18** (developed on Node 24)
- **npm** (a `package-lock.json` is committed)

No environment variables or `.env` files are needed — the app runs with no
configuration.

## Run

```bash
npm install
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the built dist/ locally
```

## What's here

| Path | Purpose |
| --- | --- |
| `packages/vuetify-preset/src/theme.js` | ★ light/dark theme + tonal ramps |
| `packages/vuetify-preset/src/defaults.js` | ★ component defaults |
| `packages/vuetify-preset/src/icons.js` | mdi-svg icon config |
| `packages/vuetify-preset/src/tokens.js` | design tokens (ramps, semantic, roles, type scale, …) |
| `packages/vuetify-preset/styles/settings.scss` | ★ SASS overrides (`$border-radius-root`, fonts, MD3 `$rounded`) |
| `apps/playground/src/sections/*.vue` | the 13 style-guide sections (§1 Color … §13 Handoff) |

## Reusing this in a new project

Install the package — no more copy/paste:

```bash
npm i vuetify-preset vuetify vue @mdi/js
npm i @fontsource/roboto @fontsource/roboto-mono   # optional (fonts)
```

```js
// vite.config.js
import { createRequire } from 'node:module'
import vuetify from 'vite-plugin-vuetify'
const require = createRequire(import.meta.url)
vuetify({ styles: { configFile: require.resolve('vuetify-preset/settings.scss') } })

// main.js — the `vuetify/styles` import is required (utility layer)
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { preset } from 'vuetify-preset'
import 'vuetify-preset/fonts'         // optional self-hosted Roboto
export default createVuetify(preset)
```

Components then inherit the theme and defaults (bare `<v-btn>` is flat black,
`<v-switch>` green, `<v-card>` elevated + rounded-lg, inputs
outlined/green/comfortable, …). Full recipe:
[`packages/vuetify-preset/README.md`](packages/vuetify-preset/README.md).

### Icons — `@mdi/js` (SVG)

Icons use the tree-shakeable SVG set, not the icon font. Vuetify's internal
icons resolve automatically (via the `mdi-svg` iconset in
`src/plugins/vuetify.js`). For explicit icons, import the path constant and
bind it:

```vue
<script setup>
import { mdiPlus } from '@mdi/js'
</script>
<template>
  <v-btn :prepend-icon="mdiPlus">New item</v-btn>
  <v-icon :icon="mdiPlus" />
</template>
```

### Tailwind 4

Tailwind is set up as a **supplementary** utility layer (app-level) via
`@tailwindcss/vite` + `apps/playground/src/styles/tailwind.css`. Preflight (Tailwind's reset)
is disabled so it doesn't fight Vuetify's base styles, and there is **no
prefix** — write standard Tailwind classes (`flex`, `p-4`, `gap-2`). On the few
class names both frameworks define (e.g. `rounded-lg`), Vuetify wins because its
utilities are unlayered while Tailwind's sit in `@layer utilities`.

## Usage rules

- **Primary black** = ink & structure (app bar, filled buttons, pagination active).
- **Secondary green** = every interactive/selected state (switches, checkboxes,
  sliders, tabs, focus rings, FAB, links).
- Never green text smaller than 18px on white lighter than `secondary-700 #009449` (4.5:1).
- Dark mode layers surfaces `#0d0d0d → #161616 → #1f1f1f` — never pure black on pure black.

## Testing

There is no committed automated test suite. `playwright` is installed and was
used ad-hoc to screenshot-verify the guide in both themes (headless Chromium).
To do a manual visual check: `npm run dev`, open the app, and toggle light/dark
via the app-bar button. See `ai/issues/technical-debt.md` for the plan to add a
committed Playwright smoke test.

## Publishing the package

```bash
cd packages/vuetify-preset
npm pack --dry-run   # inspect tarball
npm login            # your npmjs account (interactive)
npm publish          # public, first release 0.1.0
```

## Deploying the playground

The playground build (`apps/playground/dist/`) is a fully static SPA and can be
served by any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront,
nginx). Single `/` route, so no SPA rewrite is strictly required. No CI/CD,
Docker, or cloud infra is configured. Full details in `ai/deployment.md`.

## Project documentation

- **`AGENTS.md`** — AI/contributor development rules and the LIFT workflow.
- **`ai/`** — the project knowledge base: `project-context.md`, `architecture.md`,
  `coding-standards.md`, `deployment.md`, plus `features/`, `issues/`, and
  `decisions/` (ADRs). Start there before making changes.

## Notes

- `playwright` is a dev-only dependency used to screenshot-verify the guide in
  both themes; remove it if you don't need visual regression checks.
