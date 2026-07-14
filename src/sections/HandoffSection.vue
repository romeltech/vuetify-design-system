<script setup>
import DsSection from '@/components/DsSection.vue'
// Self-describing: pull the ACTUAL preset files in as raw text so this section
// can never drift from what the app really uses.
import configCode from '@/plugins/vuetify.js?raw'
import scssCode from '@/styles/settings.scss?raw'

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
  <DsSection id="handoff" index="13" group="HANDOFF" title="Ready-to-paste Vuetify config">
    <template #intro>
      This is the live <span class="ds-code">src/plugins/vuetify.js</span> and
      <span class="ds-code">src/styles/settings.scss</span> powering this app. Copy them (plus the
      @fontsource imports) into any Vuetify 4 project to inherit the design system.
    </template>

    <h3 class="text-title-small text-medium-emphasis mb-3">src/plugins/vuetify.js</h3>
    <v-card color="#0d0d0d" rounded="lg" class="pa-5 mb-6 overflow-hidden">
      <pre class="ds-pre" style="color: #c9c9c9; margin: 0">{{ configCode }}</pre>
    </v-card>

    <h3 class="text-title-small text-medium-emphasis mb-3">src/styles/settings.scss</h3>
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
