# Architecture

## Style & shape

A **client-only single-page application** (Vite + Vue 3 SPA). There is no
server-side, backend, database, or API layer. Architecture is therefore
front-end only, organized as **preset (portable) + showcase (documentation)**.

```
Browser
  └─ Vite-built SPA
       ├─ Vuetify plugin (theme + defaults)      ← the portable preset
       ├─ Tailwind utility layer (supplementary)
       ├─ vue-router (single Home route, hash anchors)
       └─ 13 style-guide section components (real Vuetify components)
```

## Directory map

```
index.html                 # Vite entry; mounts #app
vite.config.js             # vue + vite-plugin-vuetify + @tailwindcss/vite; '@' alias → src
jsconfig.json              # editor path alias (@/*)
src/
  main.js                  # createApp → import styles → use(vuetify) → use(router) → mount
  App.vue                  # v-app shell: app bar (brand + theme toggle) + sticky nav + <router-view>
  plugins/
    vuetify.js             # ★ PRESET: createVuetify(theme.light/dark + defaults + mdi-svg icons)
  styles/
    settings.scss          # ★ SASS overrides: $border-radius-root, $body-font-family, MD3 $rounded map
    tailwind.css           # Tailwind 4 theme+utilities layers (preflight disabled, no prefix)
    fonts.js               # @fontsource imports (Roboto + Roboto Mono, self-hosted)
    app.scss               # showcase-only page chrome (canvas bg, mono captions, sticky nav)
  data/
    tokens.js              # design tokens (ramps, semantic, roles, typeScale, spacing, …) + section nav model
  router/
    index.js               # single '/' route → Home; scrollBehavior handles #hash anchors
  views/
    Home.vue               # composes all 13 section components in order
  components/
    DsSection.vue          # section wrapper (NN · GROUP label, h2, intro slot) — a v-card
    SpecCaption.vue        # Roboto-Mono caption echoing the Vuetify props for a specimen
  sections/                # one component per style-guide section (see below)
reference/                 # ORIGINAL SPEC — source of truth, never modified
  v1/Vuetify 4 Design System.dc.html   # static HTML mockup of the design system
  v1/support.js                        # the mockup's React-based render runtime (not reused)
```

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

1. **The preset is the product.** `src/plugins/vuetify.js` + `src/styles/settings.scss`
   + the `@fontsource` imports are the portable artifact. Everything in
   `sections/` exists to document and verify them.

2. **`import 'vuetify/styles'` is mandatory (in `main.js`).** `vite-plugin-vuetify`
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
   `vuetify.js` and `settings.scss` via Vite `?raw`, so the documentation can
   never drift from the actual preset.

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
