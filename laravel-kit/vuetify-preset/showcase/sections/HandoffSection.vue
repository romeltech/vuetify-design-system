<script setup>
import DsSection from '../components/DsSection.vue'
// Self-describing: pull the ACTUAL shipped SASS settings in as raw text so this
// section can never drift from what the package really provides.
import scssCode from '../../preset/settings.scss?raw'

const installCode = `# 1. copy this folder into your Laravel app
cp -r vuetify-preset resources/js/

# 2. install peer libraries (Vue 3 required)
npm i vuetify @mdi/js @fontsource/roboto @fontsource/roboto-mono
npm i -D vite-plugin-vuetify @vitejs/plugin-vue sass`

const usageCode = `// vite.config.js (Laravel root)
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
plugins: [
  laravel({ /* ... */ }),
  vue(),
  vuetify({
    styles: { configFile: 'resources/js/vuetify-preset/preset/settings.scss' },
  }),
]

// resources/js/app.js (Inertia) — or main.js (SPA)
import 'vuetify/styles'                 // required: reset + grid + utilities
import vuetify from './vuetify-preset/vuetify.js'
// Inertia:  createApp({ render: () => h(App, props) }).use(plugin).use(vuetify)
// SPA:      createApp(App).use(vuetify).mount('#app')`

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
  <DsSection id="handoff" index="13" group="HANDOFF" title="Handoff — drop-in folder">
    <template #intro>
      This is the self-contained <span class="ds-code">vuetify-preset</span> folder — copy it into
      your Laravel app's <span class="ds-code">resources/js/</span> (works for Inertia + Vue 3 or a
      Vue SPA) to inherit everything shown above. No npm package required.
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
