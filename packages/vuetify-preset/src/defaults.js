// defaults.js — system-wide Vuetify component defaults.
// These make components look on-brand with no per-component props:
// bare <v-btn> is flat black, inputs are outlined/green/comfortable, etc.

export const defaults = {
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
}
