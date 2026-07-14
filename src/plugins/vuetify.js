// src/plugins/vuetify.js — Vuetify 4 design-system preset
//
// The single source of truth for theme + component defaults. Transcribed
// verbatim from the reference (§13 Handoff config). This file is the portable
// artifact: copy it (plus styles/settings.scss and the @fontsource imports)
// into any Vuetify 4 project to inherit the design system.
//
// Brand: pure-black primary (ink & structure), green #00cc61 secondary
// (every interactive/selected state). MD3 type scale, 6-level elevation.
//
// NOTE: `import 'vuetify/styles'` lives in main.js (vite-plugin-vuetify
// recompiles it through styles.configFile → src/styles/settings.scss).

import { createVuetify } from 'vuetify'
// SVG icon set: internal component icons (dropdown, checkbox, sort, clear, …)
// resolve to @mdi/js path data. Explicit icons are passed as imported path
// constants (e.g. :icon="mdiPlus") in the components themselves.
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Tonal ramps registered as custom color keys → Vuetify generates
// bg-primary-300 / text-primary-300 utilities and --v-theme-primary-300 vars.
const primaryRamp = {
  'primary-50': '#f6f6f6', 'primary-100': '#e7e7e7', 'primary-200': '#c9c9c9',
  'primary-300': '#a3a3a3', 'primary-400': '#6f6f6f', 'primary-500': '#4a4a4a',
  'primary-600': '#2b2b2b', 'primary-700': '#1a1a1a', 'primary-800': '#0d0d0d',
  'primary-900': '#000000',
}
const secondaryRamp = {
  'secondary-50': '#e7fbf1', 'secondary-100': '#c2f4dc', 'secondary-200': '#8fe9bd',
  'secondary-300': '#57dd9c', 'secondary-400': '#26d47f', 'secondary-500': '#00cc61',
  'secondary-600': '#00b356', 'secondary-700': '#009449', 'secondary-800': '#00753a',
  'secondary-900': '#005c2e',
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',      'on-background': '#0d0d0d',
          surface: '#ffffff',         'on-surface': '#0d0d0d',
          'surface-bright': '#ffffff',
          'surface-light': '#f6f6f6',
          'surface-variant': '#2b2b2b', 'on-surface-variant': '#e7e7e7',
          primary: '#000000',         'on-primary': '#ffffff',
          'primary-darken-1': '#1a1a1a',
          secondary: '#00cc61',       'on-secondary': '#002812',
          'secondary-darken-1': '#00b356',
          success: '#0d8040',         'on-success': '#ffffff',
          info: '#1976d2',            'on-info': '#ffffff',
          warning: '#f5a623',         'on-warning': '#000000',
          error: '#d92d31',           'on-error': '#ffffff',
          ...primaryRamp, ...secondaryRamp,
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#0d0d0d',      'on-background': '#f6f6f6',
          surface: '#161616',         'on-surface': '#f6f6f6',
          'surface-bright': '#2b2b2b',
          'surface-light': '#1f1f1f',
          'surface-variant': '#c9c9c9', 'on-surface-variant': '#1a1a1a',
          primary: '#ffffff',         'on-primary': '#0d0d0d',
          'primary-darken-1': '#e7e7e7',
          secondary: '#00cc61',       'on-secondary': '#002812',
          'secondary-darken-1': '#00b356',
          success: '#26d47f',         'on-success': '#0d0d0d',
          info: '#64b5f6',            'on-info': '#0d0d0d',
          warning: '#f5a623',         'on-warning': '#0d0d0d',
          error: '#ff4d4f',           'on-error': '#0d0d0d',
          ...primaryRamp, ...secondaryRamp,
        },
      },
    },
  },
  defaults: {
    VBtn:            { variant: 'flat', color: 'primary' },
    VFab:            { color: 'secondary' },
    VTextField:      { variant: 'outlined', color: 'secondary', density: 'comfortable' },
    VTextarea:       { variant: 'outlined', color: 'secondary', density: 'comfortable' },
    VSelect:         { variant: 'outlined', color: 'secondary', density: 'comfortable' },
    VAutocomplete:   { variant: 'outlined', color: 'secondary', density: 'comfortable' },
    VCombobox:       { variant: 'outlined', color: 'secondary', density: 'comfortable' },
    VFileInput:      { variant: 'outlined', color: 'secondary', density: 'comfortable' },
    VCheckbox:       { color: 'secondary' },
    VRadioGroup:     { color: 'secondary' },
    VSwitch:         { color: 'secondary', inset: true },
    VSlider:         { color: 'secondary' },
    VCard:           { variant: 'elevated', elevation: 1, rounded: 'lg' },
    VChip:           { color: 'secondary' },
    VAlert:          { variant: 'tonal' },
    VTabs:           { color: 'secondary', sliderColor: 'secondary' },
    VList:           { color: 'secondary' },
    VPagination:     { activeColor: 'primary', rounded: 'circle' },
    VProgressLinear: { color: 'secondary', rounded: true },
    VProgressCircular: { color: 'secondary' },
    VAppBar:         { color: 'primary' },
    VBadge:          { color: 'error' },
    VSnackbar:       { timeout: 4000 },
  },
})
