<script setup>
import DsSection from '@/components/DsSection.vue'
import { spacing, elevations, radii, breakpoints } from 'vuetify-preset'
</script>

<template>
  <DsSection id="layout" index="03" group="FOUNDATIONS" title="Spacing · Elevation · Shape · Breakpoints">
    <!-- Spacing -->
    <h3 class="text-title-large font-weight-medium mb-1">Spacing — 4px base</h3>
    <p class="text-body-small text-medium-emphasis mb-4">
      Utilities: <span class="ds-code">ma-*</span> / <span class="ds-code">pa-*</span> (+ directional
      <span class="ds-code">mt- mb- ms- me- mx- my-</span>), gap via <span class="ds-code">ga-*</span>,
      negative margins <span class="ds-code">ma-n1…n16</span>, plus <span class="ds-code">ma-auto</span>.
      Value = n × 4px.
    </p>
    <div class="d-flex align-end ga-2 flex-wrap mb-8">
      <div v-for="s in spacing" :key="s.n" class="text-center">
        <div
          style="width: 34px; background: #00cc61; border: 1px solid #00b356; border-radius: 4px 4px 0 0; margin: 0 auto"
          :style="{ height: s.px + 'px' }"
        />
        <div class="ds-mono font-weight-medium mt-1" style="font-size: 10.5px">{{ s.n }}</div>
        <div class="ds-mono text-disabled" style="font-size: 10px">{{ s.px }}px</div>
      </div>
    </div>

    <!-- Elevation -->
    <h3 class="text-title-large font-weight-medium mb-1">Elevation — MD3, levels 0–5</h3>
    <p class="text-body-small text-medium-emphasis mb-4">
      ⚠ Vuetify 4 replaced the 25-level MD2 scale (0–24) with 6 MD3 levels.
      <span class="ds-code">elevation-0…5</span> classes / <span class="ds-code">:elevation</span> prop.
    </p>
    <v-sheet color="surface-light" rounded="lg" class="pa-6 mb-8">
      <v-row>
        <v-col v-for="e in elevations" :key="e.n" cols="6" sm="4" md="2">
          <v-card :elevation="e.n" rounded="lg" class="d-flex flex-column align-center justify-center" height="88">
            <div class="text-title-medium">{{ e.n }}</div>
            <div class="ds-mono text-disabled" style="font-size: 10px">elevation-{{ e.n }} · {{ e.dp }}dp</div>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Border radius -->
    <h3 class="text-title-large font-weight-medium mb-1">Border radius</h3>
    <p class="text-body-small text-medium-emphasis mb-4">
      <span class="ds-code">rounded</span> prop / classes. Root token
      <span class="ds-code">$border-radius-root: 4px</span>. Full MD3 shape scale (4/8/12/16/28) is
      applied via the <span class="ds-code">$rounded</span> SASS map (see §13).
    </p>
    <div class="d-flex ga-4 flex-wrap mb-8">
      <div v-for="r in radii" :key="r.cls" class="text-center">
        <div
          style="width: 96px; height: 64px; background: #e7fbf1; border: 2px solid #00b356"
          :style="{ borderRadius: r.css }"
        />
        <div class="ds-mono font-weight-medium mt-2" style="font-size: 11px">{{ r.cls }}</div>
        <div class="ds-mono text-disabled" style="font-size: 10px">{{ r.v }}</div>
      </div>
    </div>

    <!-- Breakpoints -->
    <h3 class="text-title-large font-weight-medium mb-1">Breakpoints — v4 thresholds</h3>
    <p class="text-body-small text-medium-emphasis mb-4">
      ⚠ Changed from v3 (md was 960, xl was 1920). Available via
      <span class="ds-code">useDisplay()</span> and grid props
      <span class="ds-code">cols / sm / md / lg / xl / xxl</span>.
    </p>
    <v-card :elevation="0" border rounded="lg" class="overflow-hidden" max-width="720">
      <div class="ds-bp-row ds-bp-head ds-mono">
        <div class="pa-3">Name</div>
        <div class="pa-3">Range</div>
        <div class="pa-3">Typical device</div>
      </div>
      <div v-for="b in breakpoints" :key="b.name" class="ds-bp-row ds-bp-body">
        <div class="pa-3 ds-mono text-secondary font-weight-medium" style="font-size: 12px">{{ b.name }}</div>
        <div class="pa-3 ds-mono text-medium-emphasis" style="font-size: 11.5px">{{ b.range }}</div>
        <div class="pa-3 text-medium-emphasis" style="font-size: 12px">{{ b.device }}</div>
      </div>
    </v-card>
  </DsSection>
</template>

<style scoped>
.ds-bp-row {
  display: grid;
  grid-template-columns: 90px 1fr 1fr;
  align-items: center;
}
.ds-bp-head {
  background: rgb(var(--v-theme-surface-variant));
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 12px;
  font-weight: 500;
}
.ds-bp-body + .ds-bp-body,
.ds-bp-head + .ds-bp-body {
  border-top: 1px solid rgba(127, 127, 127, 0.18);
}
</style>
