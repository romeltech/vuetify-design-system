# Coding Standards

Derived from the actual codebase. Match these conventions; do not impose foreign
ones. There is currently **no ESLint/Prettier config committed** — consistency is
maintained by following the patterns below.

## Language & components

- **JavaScript + ESM only.** No TypeScript. Use `import`/`export`, `.js` and
  `.vue` files.
- **Vue 3 `<script setup>` SFCs.** Every component uses `<script setup>` (see any
  file in `src/sections/`). Order within a `.vue` file: `<script setup>`, then
  `<template>`, then optional `<style scoped>`.
- **Composition API** with `ref`/`computed` from `vue`. No Options API, no Vuex.

## Imports & aliases

- Use the `@` alias for `src` (configured in `vite.config.js` and `jsconfig.json`):
  `import DsSection from '@/components/DsSection.vue'`.
- Group imports: Vue core → third-party (vuetify, `@mdi/js`) → local (`@/...`).

## Styling

- **Prefer Vuetify utility classes** for layout/spacing/typography: `d-flex`,
  `ga-*`, `pa-*`/`ma-*`, `text-title-medium`, `rounded-lg`, `text-medium-emphasis`,
  etc. These are the primary styling mechanism.
- **Tailwind is supplementary** — available (no prefix) for gaps Vuetify doesn't
  cover, but don't reach for it when a Vuetify utility exists. Remember preflight
  is off and Vuetify wins on overlapping class names.
- Component-local CSS goes in `<style scoped>`. Global page chrome lives in
  `src/styles/app.scss`; prefix showcase-only classes with `ds-` (e.g.
  `.ds-mono`, `.ds-section`, `.ds-code`).
- Reference theme colors via CSS vars where needed:
  `rgb(var(--v-theme-surface-variant))`.

## Theming & tokens

- **Never hard-code brand colors in components.** Use theme color names
  (`color="secondary"`) or, for documentation swatches, iterate
  `src/data/tokens.js`.
- Changes to the design system (colors, defaults, shape, fonts) go in the
  **preset files** — `src/plugins/vuetify.js` and `src/styles/settings.scss` —
  not scattered across components.
- Keep `src/data/tokens.js`, the theme config, and the reference spec
  (`reference/v1/…`) in agreement.

## Icons (`@mdi/js`)

- Import path constants: `import { mdiPlus } from '@mdi/js'`.
- Bind them: `:icon="mdiPlus"`, `:prepend-icon="mdiPlus"`, `<v-icon :icon="mdiPlus" />`.
- **Never** use string icon names (`icon="mdi-plus"`) — the `mdi-svg` iconset
  won't resolve them.

## Component defaults

- Rely on the global `defaults` in `src/plugins/vuetify.js`. Omit props that the
  defaults already provide (e.g. don't set `variant="flat"` on a `<v-btn>` — it's
  the default). Only override when a specimen specifically demonstrates the
  override.

## Naming

- Section components: `PascalCase` + `Section` suffix (`ButtonsSection.vue`).
- Shared components: `Ds` prefix for design-system chrome (`DsSection.vue`);
  descriptive names otherwise (`SpecCaption.vue`).
- Anchor ids and token keys are `kebab-case` / lowercase, matching the reference.

## Formatting

- 2-space indentation, single quotes in JS, no semicolons in `.js`/`<script>`
  (matches existing files). Keep lines reasonable; wrap long attribute lists
  across lines as existing sections do.

## Do-not list

- Do not modify anything in `reference/` — it is the immutable source spec.
- Do not remove `import 'vuetify/styles'` from `main.js`.
- Do not add a runtime network dependency (keep fonts/icons bundled).
- Do not introduce TypeScript, a state-management library, or a backend without
  an ADR (see `AGENTS.md`).
