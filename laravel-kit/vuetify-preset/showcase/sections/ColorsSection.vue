<script setup>
import DsSection from '../components/DsSection.vue'
import { ramps, semantic, roles } from '../../preset/index.js'
</script>

<template>
  <DsSection id="colors" index="01" group="FOUNDATIONS" title="Color tokens">
    <template #intro>
      Tonal ramps 50–900. In a Vuetify theme, register ramp steps as custom color keys
      (e.g. <span class="ds-code">'primary-300'</span>) — Vuetify then generates
      <span class="ds-code">bg-primary-300</span>, <span class="ds-code">text-primary-300</span>
      classes and <span class="ds-code">--v-theme-primary-300</span> variables automatically.
    </template>

    <!-- Tonal ramps -->
    <div v-for="r in ramps" :key="r.name" class="mb-8">
      <div class="d-flex justify-space-between align-baseline flex-wrap ga-4 mb-2">
        <div class="text-title-medium">{{ r.name }}</div>
        <div class="ds-mono text-medium-emphasis" style="font-size: 11px">{{ r.note }}</div>
      </div>
      <div class="d-flex ga-1">
        <div v-for="c in r.steps" :key="c.key" style="flex: 1; min-width: 0">
          <div
            style="height: 58px; border-radius: 7px; border: 1px solid rgba(0,0,0,.07)"
            :style="{ background: c.hex }"
          />
          <div class="font-weight-bold mt-2" style="font-size: 11.5px">{{ c.s }}</div>
          <div class="ds-mono text-medium-emphasis" style="font-size: 10.5px">{{ c.hex }}</div>
          <div class="ds-mono text-disabled" style="font-size: 10px">{{ c.key }}</div>
        </div>
      </div>
    </div>

    <!-- Semantic colors -->
    <h3 class="text-title-large font-weight-medium mb-1">Semantic colors</h3>
    <p class="text-body-small text-medium-emphasis mb-4">
      Suggested bases failing WCAG AA with white text were darkened for the light theme; the
      brighter originals move to the dark theme, where all four take near-black
      <span class="ds-code">on-*</span> text (<span class="ds-code">#0d0d0d</span>).
    </p>
    <v-row class="mb-8">
      <v-col v-for="c in semantic" :key="c.name" cols="12" sm="6" md="3">
        <v-card :elevation="0" border rounded="lg" class="overflow-hidden h-100">
          <div class="pa-4" :style="{ background: c.light, color: c.onLight }">
            <div class="text-title-small">{{ c.name }}</div>
            <div class="ds-mono" style="font-size: 10.5px; opacity: 0.85">
              light · {{ c.light }} · {{ c.ratioLight }}
            </div>
          </div>
          <div class="pa-3" :style="{ background: c.dark, color: '#0d0d0d' }">
            <div class="ds-mono" style="font-size: 10.5px">dark · {{ c.dark }} · {{ c.ratioDark }}</div>
          </div>
          <div class="pa-3 text-medium-emphasis" style="font-size: 11.5px; line-height: 1.5">
            {{ c.note }}
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Theme roles table -->
    <h3 class="text-title-large font-weight-medium mb-1">
      Theme roles — exact <span class="ds-mono">colors</span> keys
    </h3>
    <p class="text-body-small text-medium-emphasis mb-4">
      Column values drop straight into <span class="ds-code">theme.themes.light.colors</span> /
      <span class="ds-code">.dark.colors</span>. Dark mode layers near-black surfaces instead of
      pure black; <span class="ds-code">primary</span> inverts to white, and green remains the
      interactive accent in both themes.
    </p>
    <v-card :elevation="0" border rounded="lg" class="overflow-hidden">
      <div class="ds-roles-row ds-roles-head ds-mono">
        <div class="pa-3">Token</div>
        <div class="pa-3">Light</div>
        <div class="pa-3">Dark</div>
        <div class="pa-3">Role</div>
      </div>
      <div v-for="t in roles" :key="t.key" class="ds-roles-row ds-roles-body">
        <div class="pa-3 ds-mono" style="font-size: 12px">{{ t.key }}</div>
        <div class="pa-3 d-flex align-center ga-2">
          <span class="ds-swatch" :style="{ background: t.light }" />
          <span class="ds-mono text-medium-emphasis" style="font-size: 11.5px">{{ t.light }}</span>
        </div>
        <div class="pa-3 d-flex align-center ga-2">
          <span class="ds-swatch" :style="{ background: t.dark }" />
          <span class="ds-mono text-medium-emphasis" style="font-size: 11.5px">{{ t.dark }}</span>
        </div>
        <div class="pa-3 text-medium-emphasis" style="font-size: 12px; line-height: 1.45">
          {{ t.role }}
        </div>
      </div>
    </v-card>
  </DsSection>
</template>

<style scoped>
.ds-roles-row {
  display: grid;
  grid-template-columns: 200px 1fr 1fr 1.3fr;
  align-items: center;
}
.ds-roles-head {
  background: rgb(var(--v-theme-surface-variant));
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 12px;
  font-weight: 500;
}
.ds-roles-body + .ds-roles-body,
.ds-roles-head + .ds-roles-body {
  border-top: 1px solid rgba(127, 127, 127, 0.18);
}
.ds-swatch {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid rgba(127, 127, 127, 0.35);
  flex: none;
}
</style>
