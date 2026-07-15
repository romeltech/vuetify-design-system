<script setup>
import DsSection from '../components/DsSection.vue'
</script>

<template>
  <DsSection id="themes" index="12" group="FOUNDATIONS" title="Light vs Dark">
    <template #intro>
      The same console screen rendered in both themes via
      <span class="ds-code">&lt;v-theme-provider&gt;</span>. Dark layers
      <span class="ds-code">#0d0d0d → #161616 → #1f1f1f</span>; primary inverts to white; green stays
      the accent.
    </template>

    <v-row>
      <v-col v-for="t in ['light', 'dark']" :key="t" cols="12" md="6">
        <div class="ds-mono text-medium-emphasis mb-2" style="font-size: 11px">theme: {{ t }}</div>
        <v-theme-provider :theme="t" with-background class="d-block" style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(127,127,127,.25)">
          <div class="pa-0">
            <!-- fake app bar -->
            <div class="d-flex align-center ga-3 pa-3" style="background: rgb(var(--v-theme-primary)); color: rgb(var(--v-theme-on-primary))">
              <div style="width: 22px; height: 22px; border-radius: 6px; background: #00cc61" />
              <span class="text-title-small">Velocity</span>
            </div>
            <!-- body -->
            <div class="pa-4">
              <v-card class="pa-4 mb-4">
                <div class="text-title-medium mb-1">Monthly usage</div>
                <div class="text-body-small text-medium-emphasis mb-3">412k requests · 87% of quota</div>
                <v-progress-linear :model-value="87" class="mb-4" />
                <div class="d-flex ga-2 align-center">
                  <v-btn size="small">Primary</v-btn>
                  <v-btn size="small" color="secondary">Accent</v-btn>
                  <v-chip size="small" class="ms-auto">Live</v-chip>
                </div>
              </v-card>
              <div class="d-flex align-center justify-space-between">
                <span class="text-body-small">Auto-scale</span>
                <v-switch :model-value="true" hide-details density="compact" />
              </div>
            </div>
          </div>
        </v-theme-provider>
      </v-col>
    </v-row>
  </DsSection>
</template>
