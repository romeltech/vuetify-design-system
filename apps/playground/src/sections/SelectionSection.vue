<script setup>
import { ref } from 'vue'
import DsSection from '@/components/DsSection.vue'
import SpecCaption from '@/components/SpecCaption.vue'

const radio = ref('a')
const slider = ref(58)
</script>

<template>
  <DsSection id="selection" index="06" group="COMPONENTS" title="Selection controls & slider">
    <template #intro>
      All take <span class="ds-code">color="secondary"</span> when active (set in defaults).
      Minimum 44px touch targets.
    </template>

    <v-row>
      <!-- Checkbox -->
      <v-col cols="12" md="6">
        <h3 class="text-title-small text-medium-emphasis mb-2">v-checkbox</h3>
        <v-checkbox label="Unchecked" :model-value="false" hide-details />
        <v-checkbox label="Checked" :model-value="true" hide-details />
        <v-checkbox label="Indeterminate" indeterminate hide-details />
        <v-checkbox label="Disabled" :model-value="true" disabled hide-details />
        <SpecCaption text='color="secondary" · :indeterminate · :disabled' />
      </v-col>

      <!-- Radio -->
      <v-col cols="12" md="6">
        <h3 class="text-title-small text-medium-emphasis mb-2">v-radio-group</h3>
        <v-radio-group v-model="radio" hide-details>
          <v-radio label="Selected" value="a" />
          <v-radio label="Unselected" value="b" />
          <v-radio label="Disabled" value="c" disabled />
        </v-radio-group>
        <SpecCaption text='v-radio value="…" · color="secondary"' />
      </v-col>

      <!-- Switch -->
      <v-col cols="12" md="6">
        <h3 class="text-title-small text-medium-emphasis mb-2">v-switch</h3>
        <v-switch label="On" :model-value="true" hide-details />
        <v-switch label="Off" :model-value="false" hide-details />
        <v-switch label="Disabled" :model-value="true" disabled hide-details />
        <SpecCaption text='color="secondary" inset · MD3 track 52×32' />
      </v-col>

      <!-- Slider -->
      <v-col cols="12" md="6">
        <h3 class="text-title-small text-medium-emphasis mb-2">v-slider</h3>
        <v-slider v-model="slider" thumb-label hide-details class="mt-6" />
        <v-slider :model-value="40" disabled hide-details class="mt-4" />
        <SpecCaption text='color="secondary" thumb-label · :disabled' />
      </v-col>
    </v-row>
  </DsSection>
</template>
