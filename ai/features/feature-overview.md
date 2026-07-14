# Feature Overview

This project's "features" are the design-system preset and the style-guide
sections that document it. There are no user-facing application features (no
accounts, transactions, CRUD).

## Core deliverable — the Vuetify preset

- **Theme** (`src/plugins/vuetify.js`): light + dark themes with pure-black
  `primary`, green `#00cc61` `secondary`, WCAG-AA semantic colors, and the
  primary/secondary tonal ramps (50–900) registered as custom color keys.
- **Component defaults**: system-wide defaults so components look on-brand with
  no props (buttons flat black, inputs outlined/green/comfortable, switches
  green+inset, cards elevated+rounded-lg, etc.).
- **SASS overrides** (`src/styles/settings.scss`): `$border-radius-root: 4px`,
  Roboto body font, full MD3 `$rounded` shape scale.
- **Self-hosted fonts** (`src/styles/fonts.js`): Roboto (300/400/500/700) +
  Roboto Mono (400/500), offline.
- **SVG icons**: `mdi-svg` iconset backed by `@mdi/js`.
- **Tailwind 4 utility layer** (`src/styles/tailwind.css`): supplementary,
  no-prefix, preflight disabled.

## Style-guide sections (documentation surface)

A single scrolling page (`Home.vue`) with a sticky anchor nav and a light/dark
toggle, composed of 13 sections that render **real Vuetify components**:

1. **Color** — tonal ramps, semantic colors, theme-role table
2. **Typography** — MD3 type scale + v3 legacy mapping
3. **Layout** — spacing, elevation, border-radius, breakpoints
4. **Buttons** — v-btn variants/sizes/states, v-fab
5. **Form inputs** — text-field variants/states, textarea, select, autocomplete, combobox, file-input
6. **Selection controls** — checkbox, radio, switch, slider
7. **Surfaces** — card, chip, alert, banner, avatar, badge, list
8. **Navigation** — app-bar + drawer, tabs, breadcrumbs, pagination, stepper
9. **Data table** — v-data-table with status chips + selection
10. **Overlays** — dialog, bottom-sheet, snackbar, tooltip, menu, expansion panels
11. **Progress** — linear & circular
12. **Light vs Dark** — the same panel rendered in both themes
13. **Handoff** — renders the live preset config + usage rules + v4 rename cheat-sheet

## Status

All sections implemented and visually verified in both themes (headless Chromium,
zero console errors). See `/ai/issues/bugs-fixed.md` for the two issues found and
fixed during the build.
