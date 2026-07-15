// tokens.js — design-system data, extracted verbatim from the reference spec
// (reference/v1/Vuetify 4 Design System.dc.html). Exposed for building
// documentation, swatches, or programmatic use. These mirror the theme values
// in theme.js and the framework's built-in scales.

const P = ['#f6f6f6', '#e7e7e7', '#c9c9c9', '#a3a3a3', '#6f6f6f', '#4a4a4a', '#2b2b2b', '#1a1a1a', '#0d0d0d', '#000000']
const S = ['#e7fbf1', '#c2f4dc', '#8fe9bd', '#57dd9c', '#26d47f', '#00cc61', '#00b356', '#009449', '#00753a', '#005c2e']
const STEPS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
const mk = (arr, key) => arr.map((hex, i) => ({ s: STEPS[i], hex, key: `${key}-${STEPS[i]}` }))

export const ramps = [
  { name: 'Primary — neutral to black', note: 'base: primary-900 #000000 · neutral text/surface scale', steps: mk(P, 'primary') },
  { name: 'Secondary — brand green', note: 'base: secondary-500 #00cc61 · interactive accent', steps: mk(S, 'secondary') },
]

export const semantic = [
  { name: 'Success', light: '#0d8040', onLight: '#ffffff', ratioLight: 'AA 5.0:1', dark: '#26d47f', ratioDark: 'AA 10.9:1', note: 'key: success · darkened from suggested #1faa59 (3.0:1 fails AA on white)' },
  { name: 'Info', light: '#1976d2', onLight: '#ffffff', ratioLight: 'AA 4.6:1', dark: '#64b5f6', ratioDark: 'AA 8.6:1', note: 'key: info · darkened from suggested #2196f3 (3.1:1 fails AA on white)' },
  { name: 'Warning', light: '#f5a623', onLight: '#000000', ratioLight: 'AA 10.4:1', dark: '#f5a623', ratioDark: 'AA 10.4:1', note: 'key: warning · as suggested; always pairs with black text' },
  { name: 'Error', light: '#d92d31', onLight: '#ffffff', ratioLight: 'AA 4.8:1', dark: '#ff4d4f', ratioDark: 'AA 6.4:1', note: 'key: error · darkened from suggested #ff4d4f (3.3:1 fails AA on white)' },
]

export const roles = [
  { key: 'background', light: '#ffffff', dark: '#0d0d0d', role: 'App canvas (v-app / v-main)' },
  { key: 'on-background', light: '#0d0d0d', dark: '#f6f6f6', role: 'Text on canvas' },
  { key: 'surface', light: '#ffffff', dark: '#161616', role: 'Cards, sheets, menus, dialogs' },
  { key: 'on-surface', light: '#0d0d0d', dark: '#f6f6f6', role: 'Text on surfaces' },
  { key: 'surface-bright', light: '#ffffff', dark: '#2b2b2b', role: 'Brightest surface (snackbar in dark)' },
  { key: 'surface-light', light: '#f6f6f6', dark: '#1f1f1f', role: 'Subtle fills — filled inputs, hover washes' },
  { key: 'surface-variant', light: '#2b2b2b', dark: '#c9c9c9', role: 'Inverse surface — tooltips (Vuetify convention)' },
  { key: 'on-surface-variant', light: '#e7e7e7', dark: '#1a1a1a', role: 'Text on surface-variant' },
  { key: 'primary', light: '#000000', dark: '#ffffff', role: 'Brand ink. Inverts to white in dark mode' },
  { key: 'on-primary', light: '#ffffff', dark: '#0d0d0d', role: '21:1 both themes' },
  { key: 'primary-darken-1', light: '#1a1a1a', dark: '#e7e7e7', role: 'Pressed/hover tone of primary' },
  { key: 'secondary', light: '#00cc61', dark: '#00cc61', role: 'Interactive accent — FAB, switches, focus, links' },
  { key: 'on-secondary', light: '#002812', dark: '#002812', role: 'Deep green ink · 7.5:1 on #00cc61' },
  { key: 'secondary-darken-1', light: '#00b356', dark: '#00b356', role: 'Pressed/hover tone of secondary' },
]

const _ts = [
  { cls: 'text-display-large', legacy: 'text-h1', spec: '57px · w400 · lh 64 · ls −0.25', size: '57px', w: '400', lh: '64px', ls: '-0.25px' },
  { cls: 'text-display-medium', legacy: 'text-h2', spec: '45px · w400 · lh 52', size: '45px', w: '400', lh: '52px', ls: '0' },
  { cls: 'text-display-small', legacy: 'text-h3', spec: '36px · w400 · lh 44', size: '36px', w: '400', lh: '44px', ls: '0' },
  { cls: 'text-headline-large', legacy: 'text-h4', spec: '32px · w400 · lh 40', size: '32px', w: '400', lh: '40px', ls: '0' },
  { cls: 'text-headline-medium', legacy: '—', spec: '28px · w400 · lh 36', size: '28px', w: '400', lh: '36px', ls: '0' },
  { cls: 'text-headline-small', legacy: 'text-h5', spec: '24px · w400 · lh 32', size: '24px', w: '400', lh: '32px', ls: '0' },
  { cls: 'text-title-large', legacy: 'text-h6', spec: '22px · w400 · lh 28', size: '22px', w: '400', lh: '28px', ls: '0' },
  { cls: 'text-title-medium', legacy: 'text-subtitle-1', spec: '16px · w500 · lh 24 · ls 0.15', size: '16px', w: '500', lh: '24px', ls: '0.15px' },
  { cls: 'text-title-small', legacy: 'text-subtitle-2', spec: '14px · w500 · lh 20 · ls 0.1', size: '14px', w: '500', lh: '20px', ls: '0.1px' },
  { cls: 'text-body-large', legacy: 'text-body-1', spec: '16px · w400 · lh 24 · ls 0.5', size: '16px', w: '400', lh: '24px', ls: '0.5px' },
  { cls: 'text-body-medium', legacy: 'text-body-2', spec: '14px · w400 · lh 20 · ls 0.25', size: '14px', w: '400', lh: '20px', ls: '0.25px' },
  { cls: 'text-body-small', legacy: 'text-caption', spec: '12px · w400 · lh 16 · ls 0.4', size: '12px', w: '400', lh: '16px', ls: '0.4px' },
  { cls: 'text-label-large', legacy: 'text-button', spec: '14px · w500 · lh 20 · ls 0.1 · no uppercase', size: '14px', w: '500', lh: '20px', ls: '0.1px' },
  { cls: 'text-label-medium', legacy: '—', spec: '12px · w500 · lh 16 · ls 0.5', size: '12px', w: '500', lh: '16px', ls: '0.5px' },
  { cls: 'text-label-small', legacy: 'text-overline', spec: '11px · w500 · lh 16 · ls 0.5 · no uppercase', size: '11px', w: '500', lh: '16px', ls: '0.5px' },
]
export const typeScale = _ts.map((t) => ({
  ...t,
  sample: parseInt(t.size) > 30 ? 'Velocity' : 'Velocity is a habit',
}))

export const spacing = Array.from({ length: 17 }, (_, n) => ({ n, px: n * 4 }))

export const elevations = [
  { n: 0, dp: 0, shadow: 'none' },
  { n: 1, dp: 1, shadow: '0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15)' },
  { n: 2, dp: 3, shadow: '0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15)' },
  { n: 3, dp: 6, shadow: '0 1px 3px rgba(0,0,0,.3), 0 4px 8px 3px rgba(0,0,0,.15)' },
  { n: 4, dp: 8, shadow: '0 2px 3px rgba(0,0,0,.3), 0 6px 10px 4px rgba(0,0,0,.15)' },
  { n: 5, dp: 12, shadow: '0 4px 4px rgba(0,0,0,.3), 0 8px 12px 6px rgba(0,0,0,.15)' },
]

export const radii = [
  { cls: 'rounded-0', v: '0', css: '0' },
  { cls: 'rounded-sm', v: '2px', css: '2px' },
  { cls: 'rounded', v: '4px (root)', css: '4px' },
  { cls: 'rounded-lg', v: '8px', css: '8px' },
  { cls: 'rounded-xl', v: '24px', css: '24px' },
  { cls: 'rounded-pill', v: '9999px', css: '9999px' },
  { cls: 'rounded-circle', v: '50%', css: '50%' },
]

export const breakpoints = [
  { name: 'xs', range: '0 – 599px', device: 'Small phone' },
  { name: 'sm', range: '600 – 839px', device: 'Large phone / small tablet' },
  { name: 'md', range: '840 – 1144px', device: 'Tablet / small laptop' },
  { name: 'lg', range: '1145 – 1544px', device: 'Laptop / desktop' },
  { name: 'xl', range: '1545 – 2137px', device: 'Large desktop' },
  { name: 'xxl', range: '≥ 2138px', device: '4K & ultra-wide' },
]
