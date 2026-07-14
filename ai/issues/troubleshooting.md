# Troubleshooting

Common issues when working on or reusing this project.

## Vuetify utility classes (`d-flex`, `pa-*`, `text-*`) do nothing / layout is broken
- Ensure `import 'vuetify/styles'` is present in `src/main.js` **before** other
  style imports. With `vite-plugin-vuetify`'s `styles.configFile`, this import is
  what pulls in the reset + grid + utility layer (recompiled through
  `settings.scss`). See `bugs-fixed.md` #1.

## SASS variable overrides in `settings.scss` aren't applied
- Confirm `vite.config.js` has
  `vuetify({ styles: { configFile: 'src/styles/settings.scss' } })`.
- Ensure `sass` (dart-sass) is installed.
- Restart the dev server after editing `settings.scss` (SASS config is read at
  build start).

## An icon shows a blank box / doesn't render
- The iconset is `mdi-svg` — string names like `"mdi-plus"` won't resolve. Import
  the path constant: `import { mdiPlus } from '@mdi/js'` and bind `:icon="mdiPlus"`.
- Make sure the name is a valid `@mdi/js` export (camelCase `mdi` + PascalCase icon).

## Theme colors look wrong / dark mode not switching
- Colors come from `theme.themes.light|dark.colors` in `src/plugins/vuetify.js`.
- The toggle flips `useTheme().global.name`. Reference colors via theme names
  (`color="secondary"`) or `rgb(var(--v-theme-<key>))`, not hard-coded hex.

## A Tailwind class isn't behaving as in a "pure Tailwind" app
- Preflight (Tailwind's base reset) is **disabled** by design, so bare elements
  keep Vuetify's base styling.
- On class names both frameworks define (e.g. `rounded-lg`), **Vuetify wins**
  because its utilities are unlayered and Tailwind's are in `@layer utilities`.
  Use a Vuetify equivalent, or a distinct Tailwind utility.

## Dev server port already in use
- Port is `5173` (set in `vite.config.js`). Change it there or stop the other
  process.

## Build warns about a >500 kB chunk
- Expected (Vuetify is large). Not an error. See `technical-debt.md` for optional
  code-splitting.

## Editing `reference/` files
- Don't. `reference/v1/…` is the immutable source spec; the app is built to match
  it, not the other way around.
