# Laravel + Vue drop-in kit — `vuetify-preset`

A **self-contained** copy of the Vuetify 4 design system. Drop the
[`vuetify-preset/`](vuetify-preset) folder into your Laravel app's
`resources/js/` and you get the theme, component defaults, MD3 tokens, SASS
shape/font overrides, SVG icons, and the full 13-section style guide — **without
installing the npm package**.

Works for both **Inertia + Vue 3** and a plain **Vue SPA**, built with **Vite**
(Laravel 9.19+ default).

## What's in the folder

```
vuetify-preset/
  vuetify.js              # makeVuetify({ ssr }) factory + default instance (imports fonts)
  preset/                 # the design system (self-contained)
    index.js theme.js defaults.js icons.js tokens.js fonts.js
    settings.scss         # SASS overrides (referenced by vite.config.js)
  showcase/
    Showcase.vue          # the full style guide as ONE router-free component
    components/ sections/ data/ styles/
```

## Prerequisites

- **Vue 3** (Vuetify 4 requires Vue 3 — not Vue 2).
- **Vite** front-end build (the modern Laravel default). Using legacy Laravel Mix
  / webpack instead? You'd swap `vite-plugin-vuetify` for `webpack-plugin-vuetify`;
  not covered here.

## 1. Copy the folder + install peers

```bash
cp -r vuetify-preset resources/js/

# runtime libraries
npm i vuetify @mdi/js @fontsource/roboto @fontsource/roboto-mono
# build tooling
npm i -D vite-plugin-vuetify @vitejs/plugin-vue sass
```

(`@fontsource/*` are only needed because `vuetify.js` imports
`preset/fonts.js` — drop that import if you supply fonts yourself.)

## 2. `vite.config.js` (Laravel project root)

Add the Vue and Vuetify plugins alongside the existing `laravel()` plugin. The
`configFile` points at the folder's SASS (a plain project-relative path — no
`require.resolve` needed since it's local):

```js
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    laravel({ input: ['resources/js/app.js'], refresh: true }),
    vue({ template: { transformAssetUrls: { base: null, includeAbsolute: false } } }),
    vuetify({
      autoImport: true,
      styles: { configFile: 'resources/js/vuetify-preset/preset/settings.scss' },
    }),
  ],
})
```

## 3a. Inertia + Vue 3 — `resources/js/app.js`

```js
import 'vuetify/styles'                         // required: reset + grid + utilities
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import vuetify from './vuetify-preset/vuetify.js'

createInertiaApp({
  resolve: (name) => import(`./Pages/${name}.vue`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(vuetify)
      .mount(el)
  },
})
```

For **Inertia SSR** (`resources/js/ssr.js`), build an SSR-flavored instance:

```js
import { makeVuetify } from './vuetify-preset/vuetify.js'
const vuetify = makeVuetify({ ssr: true })
// ...use(vuetify) inside createInertiaApp({ setup })
```

## 3b. Vue SPA — `resources/js/main.js`

```js
import 'vuetify/styles'
import { createApp } from 'vue'
import vuetify from './vuetify-preset/vuetify.js'
import App from './App.vue'

createApp(App).use(vuetify).mount('#app')
```

## 4. Render the style guide (optional)

`Showcase.vue` is a single, router-free component that renders all 13 sections
(it includes its own `<v-app>`, so it works standalone):

```vue
<!-- e.g. resources/js/Pages/DesignSystem.vue (Inertia) -->
<script setup>
import Showcase from '../vuetify-preset/showcase/Showcase.vue'
</script>
<template><Showcase /></template>
```

> If your app already wraps content in a `<v-app>`, remove the outer `<v-app>` in
> `Showcase.vue` (render its inner `<v-main>` block) to avoid nesting.

## 5. Using the design system in your own components

The global **defaults** mean components are on-brand with no props — bare
`<v-btn>` is flat black, `<v-switch>` green, `<v-card>` elevated+rounded-lg,
inputs outlined/green/comfortable. Icons use `@mdi/js`:

```vue
<script setup>
import { mdiPlus } from '@mdi/js'
</script>
<template>
  <v-btn :prepend-icon="mdiPlus">New</v-btn>
</template>
```

Design tokens: `import { ramps, roles, typeScale, ... } from './vuetify-preset/preset/index.js'`.

## ⚠ Tailwind caveat (Breeze / starter kits)

Laravel Breeze/Jetstream and most Vue starter kits ship **Tailwind with
preflight** (a CSS reset) enabled, which will fight Vuetify's own base styles.
If you keep Tailwind:

- **Disable preflight** — Tailwind v3: `corePlugins: { preflight: false }`;
  Tailwind v4: import only `theme` + `utilities` layers (skip `preflight`), or
  use `tailwindcss-scoped-preflight`.
- Optionally add a Tailwind **prefix** (e.g. `tw-`) to avoid class-name clashes.
- On overlapping names (e.g. `rounded-lg`) Vuetify wins when its utilities are
  unlayered and Tailwind's sit in `@layer utilities`.

This kit itself uses **only Vuetify utility classes**, so it needs no Tailwind.

## Keeping the copy fresh

This folder is a self-contained snapshot. If the upstream package changes, re-run
`node laravel-kit/sync-preset.mjs` (in this repo) to refresh `preset/` from
`packages/vuetify-preset`, then re-copy the folder into your app.
