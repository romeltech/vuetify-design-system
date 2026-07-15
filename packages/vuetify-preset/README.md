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

## Laravel + Vue

This package works in Laravel apps that build with Vite (register `preset` in
`createVuetify`, wire `settings.scss` via
`require.resolve('vuetify-preset/settings.scss')`). If you'd rather **not** add
an npm dependency, the repo also ships a self-contained copy-paste folder
(`laravel-kit/`) for both Inertia + Vue 3 and Vue SPA setups.

## Nuxt 3 / 4

Use the official [`vuetify-nuxt-module`](https://nuxt.vuetifyjs.com) — it handles
SSR, treeshaking, and compiling the SASS `configFile`. Verified with Nuxt 3.21,
Vuetify 4.1, and `vuetify-nuxt-module` 1.0.0-rc.

```bash
npm i vuetify-preset vuetify @mdi/js @fontsource/roboto @fontsource/roboto-mono
npm i -D vuetify-nuxt-module sass
```

```ts
// nuxt.config.ts
import { theme, defaults } from 'vuetify-preset'   // plain data — safe at config time

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  features: { inlineStyles: false },                // required for SSR + custom settings.scss
  vuetify: {
    moduleOptions: {
      styles: { configFile: 'node_modules/vuetify-preset/styles/settings.scss' },
    },
    vuetifyOptions: {
      theme,
      defaults,
      icons: { defaultSet: 'mdi-svg' },             // module wires @mdi/js aliases
    },
  },
})
```

```ts
// plugins/fonts.ts — optional self-hosted Roboto
import 'vuetify-preset/fonts'
export default defineNuxtPlugin(() => {})
```

Then use components normally (`import { mdiPlus } from '@mdi/js'` →
`<v-btn :icon="mdiPlus" />`) and tokens via `import { ramps } from 'vuetify-preset'`.

**SSR notes**
- `features: { inlineStyles: false }` is required when customizing SASS via
  `configFile` under SSR (Nuxt 3.9+).
- Nuxt renders `defaultTheme` (light) on the server; a light/dark **toggle**
  (`useTheme()`) switches on the client after hydration — expected with SSR.
- pnpm/yarn: if the `configFile` path doesn't resolve under symlinked
  `node_modules`, point it at the resolved absolute path.

> The 13-section showcase is **not** part of this package (it's the repo's demo).
> To render it in Nuxt, copy `laravel-kit/vuetify-preset/showcase/` into your app.

## License

MIT © Romel Tech
