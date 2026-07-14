<script setup>
import DsSection from '@/components/DsSection.vue'
// Self-describing: pull the ACTUAL shipped SASS settings in as raw text so this
// section can never drift from what the package really provides.
import scssCode from 'vuetify-preset/settings.scss?raw'

const installCode = `# install the design system
npm i vuetify-preset
npm i vuetify vue @mdi/js
npm i @fontsource/roboto @fontsource/roboto-mono   # optional (fonts)`

const usageCode = `// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import { preset } from 'vuetify-preset'
import 'vuetify-preset/fonts'          // optional self-hosted Roboto
export default createVuetify(preset)

// vite.config.js
import { createRequire } from 'node:module'
import vuetify from 'vite-plugin-vuetify'
const require = createRequire(import.meta.url)
vuetify({
  styles: { configFile: require.resolve('vuetify-preset/settings.scss') },
})

// main.js
import 'vuetify/styles'               // required: reset + grid + utilities`

const usageRules = [
  'Primary black = ink & structure (app bar, filled buttons, pagination active).',
  'Secondary green = every interactive/selected state: switches, checkboxes, sliders, tabs, focus rings, FAB, links.',
  'Never green text smaller than 18px on white lighter than secondary-700 #009449 (4.5:1).',
  'Dark mode: surfaces #0d0d0d/#161616/#1f1f1f, never pure black cards on pure black bg.',
]
const renames = [
  'Type classes: text-h1… → text-display/headline/title/body/label-*',
  'Elevation: 0–24 → 0–5 (MD3).',
  'Breakpoints: md 840 · lg 1145 · xl 1545 · xxl 2138.',
  'Buttons lowercase by default (no auto-uppercase).',
  'Verify against the v4 migration guide when upgrading.',
]
</script>

<template>
  <DsSection id="handoff" index="13" group="HANDOFF" title="Handoff — the vuetify-preset package">
    <template #intro>
      This app consumes the design system as the <span class="ds-code">vuetify-preset</span>
      npm package. Install it and register the preset to inherit everything shown above.
    </template>

    <h3 class="text-title-small text-medium-emphasis mb-3">Install</h3>
    <v-card color="#0d0d0d" rounded="lg" class="pa-5 mb-6 overflow-hidden">
      <pre class="ds-pre" style="color: #c9c9c9; margin: 0">{{ installCode }}</pre>
    </v-card>

    <h3 class="text-title-small text-medium-emphasis mb-3">Wire it up</h3>
    <v-card color="#0d0d0d" rounded="lg" class="pa-5 mb-6 overflow-hidden">
      <pre class="ds-pre" style="color: #c9c9c9; margin: 0">{{ usageCode }}</pre>
    </v-card>

    <h3 class="text-title-small text-medium-emphasis mb-3">
      Shipped SASS settings — <span class="ds-mono">vuetify-preset/settings.scss</span>
    </h3>
    <v-card color="#0d0d0d" rounded="lg" class="pa-5 mb-6 overflow-hidden">
      <pre class="ds-pre" style="color: #c9c9c9; margin: 0">{{ scssCode }}</pre>
    </v-card>

    <v-row>
      <v-col cols="12" md="6">
        <v-card border rounded="lg" class="pa-5 h-100">
          <div class="text-title-small mb-3">Usage rules</div>
          <ul class="text-body-small text-medium-emphasis" style="line-height: 1.8; padding-left: 18px">
            <li v-for="r in usageRules" :key="r">{{ r }}</li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border rounded="lg" class="pa-5 h-100">
          <div class="text-title-small mb-3">v4 rename cheat-sheet</div>
          <ul class="text-body-small text-medium-emphasis" style="line-height: 1.8; padding-left: 18px">
            <li v-for="r in renames" :key="r">{{ r }}</li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
  </DsSection>
</template>
