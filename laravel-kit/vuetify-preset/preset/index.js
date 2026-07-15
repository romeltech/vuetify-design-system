// vuetify-preset — main entry.
//
// Usage:
//   import { createVuetify } from 'vuetify'
//   import { preset } from 'vuetify-preset'
//   export default createVuetify(preset)
//
// Or compose the pieces yourself, or override with createPreset({ ... }).
// Remember: the SASS `settings.scss` must be wired into your build separately —
// see this package's README (vite-plugin-vuetify `styles.configFile`).

import { theme } from './theme.js'
import { defaults } from './defaults.js'
import { icons } from './icons.js'

export { theme, light, dark, primaryRamp, secondaryRamp } from './theme.js'
export { defaults } from './defaults.js'
export { icons } from './icons.js'
export * from './tokens.js'

/** Ready-made options object — pass straight to createVuetify(). */
export const preset = { theme, defaults, icons }

/**
 * Build preset options with overrides. Shallow-merges the top-level `theme`,
 * `defaults`, and `icons` (deeper overrides should be composed by the caller).
 *
 * @param {object} overrides - partial createVuetify options
 * @returns {object} createVuetify options
 */
export function createPreset(overrides = {}) {
  return {
    ...preset,
    ...overrides,
    theme: { ...theme, ...(overrides.theme || {}) },
    defaults: { ...defaults, ...(overrides.defaults || {}) },
    icons: { ...icons, ...(overrides.icons || {}) },
  }
}

export default preset
