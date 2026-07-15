// icons.js — SVG icon set config.
// Internal component icons (dropdown, checkbox, sort, clear, …) resolve to
// @mdi/js path data. Consumers pass explicit icons as imported path constants
// (e.g. :icon="mdiPlus") — string names like "mdi-plus" won't resolve.
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: { mdi },
}
