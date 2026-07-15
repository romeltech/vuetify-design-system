# ADR-004: Nuxt 3/4 support via vuetify-nuxt-module

- **Status:** Accepted
- **Date:** 2026-07-15
- **Relates to:** ADR-002 (npm package), ADR-003 (Laravel kit)

## Context

Goal: the design system should install in **Laravel + Vue**, a **Vue 3 SPA**, and
**Nuxt**. The first two were already covered. Nuxt is SSR-first and needs
specific wiring, so it had to be confirmed and documented.

## Decision

Support Nuxt through the official **`vuetify-nuxt-module`**, consuming the
published **`vuetify-preset`** npm package (idiomatic for Nuxt). **No package
code changes** — its `theme`/`defaults` are plain serializable data passed via
`vuetifyOptions`, `settings.scss` feeds `moduleOptions.styles.configFile`, and
icons use the module's `defaultSet: 'mdi-svg'` (backed by `@mdi/js`).

Documented in `packages/vuetify-preset/README.md` ("Nuxt 3 / 4"). SSR caveats
captured:
- `features: { inlineStyles: false }` required with a custom `configFile` under SSR.
- Multi-theme + SSR: server renders `defaultTheme` (light); `useTheme()` toggle is
  client-side after hydration.

## Verification performed

Real, external install (not a workspace link): `npm pack` the package, then in a
throwaway Nuxt app installed the **tarball** alongside `nuxt`, `vuetify`,
`@mdi/js`, `@fontsource/*`, `vuetify-nuxt-module`, `sass`.

- Versions: **Nuxt 3.21.8, Vuetify 4.1.5, vuetify-nuxt-module 1.0.0-rc.2** — no
  peer conflicts (module accepted Vuetify 4).
- **`nuxi build` (SSR) succeeded** with the config above (config-time
  `import { theme, defaults }`, `mdi-svg` icons, `configFile`, fonts plugin).
- `nuxi dev` render: bare `<v-btn>` flat black with an `@mdi/js` **SVG** icon,
  `secondary` green, `<v-switch>` green+inset, card elevated+rounded-lg (MD3
  12px from `settings.scss`), token import correct — **zero console errors**,
  clean SSR hydration.

## Consequences

- Nuxt is a first-class target with a verified recipe; the package stays unchanged
  across all three environments.
- Slight version sensitivity: `vuetify-nuxt-module` is at RC for the Vuetify-4
  line; pin/track it as it stabilizes.
