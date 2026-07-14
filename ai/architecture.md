# Architecture

## Style & shape

An **npm workspaces monorepo** (see ADR-002) with two members:

1. **`packages/vuetify-preset`** — the publishable library (plain-ESM JS +
   raw SASS). No app, no runtime framework of its own; `vue`/`vuetify` are peers.
2. **`apps/playground`** — a **client-only Vite + Vue 3 SPA** (the 13-section
   style guide) that consumes `vuetify-preset` and renders real Vuetify
   components, doubling as living verification.

There is still no backend, database, or API anywhere.

```
apps/playground (Vite SPA)
  └─ imports  vuetify-preset  (workspace-linked / published)
       ├─ preset = { theme, defaults, icons }  → createVuetify(preset)
       ├─ vuetify-preset/settings.scss         → vite-plugin-vuetify configFile
       ├─ vuetify-preset/fonts                 → self-hosted Roboto (optional)
       └─ tokens (ramps, semantic, …)          → the doc sections
  + Tailwind 4 utility layer (app-level, supplementary)
```

## Directory map

```
package.json               # ROOT: private, workspaces:["packages/*","apps/*"], dev/build proxy to playground

packages/vuetify-preset/   # ★ the published package
  package.json             # name, exports, files, peerDeps, sideEffects, publishConfig
  README.md · LICENSE      # npm page + MIT license
  src/
    index.js               # entry: preset, createPreset(), + named theme/defaults/icons/tokens
    theme.js               # light/dark themes + primary/secondary ramps
    defaults.js            # component defaults
    icons.js               # mdi-svg iconset config (uses @mdi/js)
    tokens.js              # design tokens (ramps, semantic, roles, typeScale, spacing, …)
    fonts.js               # optional @fontsource side-effect import (subpath: vuetify-preset/fonts)
  styles/
    settings.scss          # ★ SASS overrides via @forward 'vuetify/settings' with (...)

apps/playground/           # the living style guide (consumes vuetify-preset)
  package.json             # private; deps include "vuetify-preset":"*"
  index.html · vite.config.js · jsconfig.json
  src/
    main.js                # import 'vuetify/styles' → tailwind → fonts → createVuetify(preset)
    App.vue                # v-app shell: app bar (brand + theme toggle) + sticky nav + <router-view>
    styles/{app.scss, tailwind.css}   # app-only chrome + Tailwind (preflight off, no prefix)
    data/sections.js       # in-page nav model (app-specific; tokens come from the package)
    router/index.js        # single '/' route → Home
    views/Home.vue         # composes all 13 section components
    components/{DsSection.vue, SpecCaption.vue}
    sections/              # one component per style-guide section (see below)

reference/                 # ORIGINAL SPEC — source of truth, never modified
```

> Migration note: `src/plugins/vuetify.js` was split into the package's
> `theme.js`/`defaults.js`/`icons.js`; `src/data/tokens.js` → the package's
> `tokens.js` (its `sections` nav model stayed in the app as `data/sections.js`);
> `src/styles/{settings.scss,fonts.js}` → the package.

## The 13 sections

`src/sections/*.vue`, composed by `Home.vue`, mirroring the reference:

| # | File | Anchor id | Content |
| --- | --- | --- | --- |
| 01 | ColorsSection.vue | `colors` | Tonal ramps, semantic colors, theme-role table |
| 02 | TypographySection.vue | `typography` | MD3 type scale + v3 legacy mapping |
| 03 | LayoutSection.vue | `layout` | Spacing, elevation, radius, breakpoints |
| 04 | ButtonsSection.vue | `buttons` | v-btn variants/sizes/states, v-fab |
| 05 | FormsSection.vue | `forms` | v-text-field variants/states + other inputs |
| 06 | SelectionSection.vue | `selection` | checkbox / radio / switch / slider |
| 07 | SurfacesSection.vue | `surfaces` | card / chip / alert / banner / avatar / badge / list |
| 08 | NavigationSection.vue | `navigation` | app-bar + drawer, tabs, breadcrumbs, pagination, stepper |
| 09 | DataTableSection.vue | `data` | v-data-table with status chips + selection |
| 10 | OverlaysSection.vue | `overlays` | dialog / bottom-sheet / snackbar / tooltip / menu / expansion panels |
| 11 | ProgressSection.vue | `feedback` | progress-linear / progress-circular |
| 12 | ThemesSection.vue | `themes` | same panel in both themes via v-theme-provider |
| 13 | HandoffSection.vue | `handoff` | renders the live preset files (`?raw`) + usage rules |

## Key architectural decisions & non-obvious wiring

1. **The preset is the product.** The `packages/vuetify-preset` package (theme,
   defaults, tokens, icons, `settings.scss`, optional fonts) is the shippable
   artifact. `apps/playground` exists to document and verify it, consuming it via
   the workspace link (`node_modules/vuetify-preset` → `packages/vuetify-preset`).

2. **`import 'vuetify/styles'` is mandatory (in the app's `main.js`).** `vite-plugin-vuetify`
   with `styles.configFile` recompiles that import through `settings.scss`,
   pulling in the reset + grid + all utility classes (`d-flex`, `ga/ma/pa`,
   `text-*`). Removing it silently drops the entire utility layer and layouts
   collapse. (This was a real bug during development — see
   `/ai/issues/bugs-fixed.md`.)

3. **Component defaults over per-component props.** `createVuetify({ defaults })`
   sets system-wide defaults (bare `<v-btn>` is flat black, `<v-switch>` green,
   `<v-card>` elevated+rounded-lg, inputs outlined/green/comfortable). Section
   code deliberately omits props to demonstrate the defaults.

4. **Tokens are data-driven.** `src/data/tokens.js` holds the exact values from
   the reference; sections iterate them rather than hard-coding — same approach
   as the original mockup.

5. **Handoff section is self-describing.** `HandoffSection.vue` imports the real
   shipped `vuetify-preset/settings.scss` via Vite `?raw` and shows the package
   install/usage snippets, so the documentation can't drift from the package.

6. **Tailwind is supplementary, not primary.** Preflight is disabled and there is
   no prefix; Tailwind utilities sit in `@layer utilities` while Vuetify's are
   unlayered, so Vuetify wins on any overlapping class name (e.g. `rounded-lg`).
   Vuetify owns base/reset styling.

7. **Icons are SVG.** `mdi-svg` iconset resolves internal component icons from
   `@mdi/js`; explicit icons are imported path constants bound with `:icon` /
   `:prepend-icon` (never string names like `"mdi-plus"`).

## Data flow

`tokens.js` (static module) → imported by section components → rendered.
Theme state lives in Vuetify's `useTheme()`; the App-bar toggle flips
`theme.global.name`. There is no external data fetching, store, or persistence.
