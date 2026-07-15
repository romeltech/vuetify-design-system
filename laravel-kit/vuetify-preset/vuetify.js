// vuetify.js — the shared Vuetify instance for this app.
// Works for both Inertia + Vue 3 and a plain Vue SPA (same instance).
//
//   import 'vuetify/styles'        // do this once in your entry (app.js / main.js)
//   import vuetify from './vuetify-preset/vuetify.js'
//   createApp(App).use(vuetify)    // SPA
//   // or in Inertia setup(): .use(plugin).use(vuetify)
//
// The design-system SASS (shape/fonts) is wired separately in vite.config.js:
//   vuetify({ styles: { configFile: 'resources/js/vuetify-preset/preset/settings.scss' } })

import { createVuetify } from 'vuetify'
import preset from './preset/index.js'
import './preset/fonts.js' // optional self-hosted Roboto (remove if you provide fonts yourself)

/**
 * Build a Vuetify instance from the preset, with optional overrides.
 * Pass { ssr: true } for Inertia SSR (resources/js/ssr.js).
 */
export function makeVuetify(options = {}) {
  return createVuetify({ ...preset, ...options })
}

export default makeVuetify()
