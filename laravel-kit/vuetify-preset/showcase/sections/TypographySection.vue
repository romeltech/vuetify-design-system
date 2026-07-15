<script setup>
import DsSection from '../components/DsSection.vue'
import { typeScale } from '../../preset/index.js'
</script>

<template>
  <DsSection id="typography" index="02" group="FOUNDATIONS" title="Typography">
    <template #intro>
      Default font: <b>Roboto</b> (400 / 500 / 700). Vuetify 4 ships the Material Design 3 type
      scale — class names changed from the v3 set. The legacy column shows the closest v3 class for
      migration. <span class="text-disabled">⚠ v4: no class applies text-transform — buttons are no
      longer auto-uppercase; <span class="ds-code">text-label-small</span> replaces overline without
      uppercase/wide tracking.</span>
    </template>

    <v-card :elevation="0" border rounded="lg" class="overflow-hidden">
      <div class="ds-type-row ds-type-head ds-mono">
        <div class="pa-3">v4 class</div>
        <div class="pa-3">v3 legacy</div>
        <div class="pa-3">Spec</div>
        <div class="pa-3">Sample</div>
      </div>
      <div v-for="t in typeScale" :key="t.cls" class="ds-type-row ds-type-body">
        <div class="pa-3 ds-mono text-secondary" style="font-size: 11.5px">.{{ t.cls }}</div>
        <div class="pa-3 ds-mono text-disabled" style="font-size: 11px">{{ t.legacy }}</div>
        <div class="pa-3 ds-mono text-medium-emphasis" style="font-size: 11px; line-height: 1.5">
          {{ t.spec }}
        </div>
        <div class="pa-3 ds-type-sample">
          <span
            :style="{
              fontFamily: 'Roboto, sans-serif',
              fontSize: t.size,
              fontWeight: t.w,
              lineHeight: t.lh,
              letterSpacing: t.ls,
            }"
            >{{ t.sample }}</span
          >
        </div>
      </div>
    </v-card>
  </DsSection>
</template>

<style scoped>
.ds-type-row {
  display: grid;
  grid-template-columns: 200px 130px 210px 1fr;
  align-items: center;
}
.ds-type-head {
  background: rgb(var(--v-theme-surface-variant));
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 12px;
  font-weight: 500;
}
.ds-type-body + .ds-type-body,
.ds-type-head + .ds-type-body {
  border-top: 1px solid rgba(127, 127, 127, 0.18);
}
.ds-type-sample {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
