# vuetify-preset

A **Vuetify 4** design-system preset: light/dark theme, component defaults, MD3
design tokens, SASS shape/font overrides, optional self-hosted fonts, and an SVG
icon setup. Brand: pure-black `primary` (ink & structure), green `#00cc61`
`secondary` (every interactive/selected state).

## Install

```bash
npm i vuetify-preset
# peers you likely already have / want:
npm i vuetify vue @mdi/js
# optional, only if you use vuetify-preset/fonts:
npm i @fontsource/roboto @fontsource/roboto-mono
```

## Usage

### 1. Register the preset

```js
// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import { preset } from 'vuetify-preset'
import 'vuetify-preset/fonts'        // optional: self-hosted Roboto + Roboto Mono

export default createVuetify(preset)
```

`preset` is `{ theme, defaults, icons }` — pass it straight to `createVuetify`.
Need tweaks? Use `createPreset()`:

```js
import { createPreset } from 'vuetify-preset'
export default createVuetify(createPreset({
  theme: { defaultTheme: 'dark' },
}))
```

### 2. Load Vuetify styles + the SASS settings (required)

The preset's shape/font tokens are **SASS variables**, so they must be compiled
into Vuetify at *your* build. Point `vite-plugin-vuetify` at the shipped
`settings.scss`:

```js
// vite.config.js
import { createRequire } from 'node:module'
import vuetify from 'vite-plugin-vuetify'

const require = createRequire(import.meta.url)

export default {
  plugins: [
    vuetify({
      autoImport: true,
      // Resolves the file inside the package (pnpm/yarn-safe):
      styles: { configFile: require.resolve('vuetify-preset/settings.scss') },
    }),
  ],
}
```

```js
// main.js — order matters
import 'vuetify/styles'   // required: pulls in reset + grid + utility classes
import vuetify from './plugins/vuetify.js'
```

> **Why `require.resolve`?** `vite-plugin-vuetify`'s `configFile` is a path.
> A bare `node_modules/...` string breaks under pnpm/yarn symlinked installs;
> `require.resolve('vuetify-preset/settings.scss')` returns the correct absolute
> path in all package managers.

## What you get

- **Theme** — `light` / `dark` with the full brand palette + primary/secondary
  tonal ramps (50–900) as custom color keys.
- **Defaults** — bare `<v-btn>` is flat black, inputs outlined/green/comfortable,
  `<v-switch>` green+inset, `<v-card>` elevated+rounded-lg, and more.
- **Tokens** — `import { ramps, semantic, roles, typeScale, spacing, elevations,
  radii, breakpoints } from 'vuetify-preset'` (or `vuetify-preset/tokens`).
- **Icons** — SVG `mdi-svg` set (via `@mdi/js`); use imported path constants:
  `import { mdiPlus } from '@mdi/js'; <v-btn :icon="mdiPlus" />`.

## Exports

| Import | Contents |
| --- | --- |
| `vuetify-preset` | `preset`, `createPreset`, `theme`, `defaults`, `icons`, all tokens |
| `vuetify-preset/tokens` | design tokens only |
| `vuetify-preset/fonts` | side-effect import of Roboto + Roboto Mono |
| `vuetify-preset/settings.scss` | raw SASS settings (for `configFile`) |

## Peer dependencies

`vue` `^3.5`, `vuetify` `^4.1` (required); `@fontsource/roboto` +
`@fontsource/roboto-mono` `^5.1` (optional — only for `vuetify-preset/fonts`).
`@mdi/js` is a direct dependency.

## Tailwind (optional)

This package is Vuetify-only. If you also use Tailwind, add it in your app as a
supplementary layer with preflight disabled so it doesn't fight Vuetify's base
styles.

## License

MIT © Romel Tech
