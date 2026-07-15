<script setup>
import DsSection from '../components/DsSection.vue'
import SpecCaption from '../components/SpecCaption.vue'
</script>

<template>
  <DsSection id="feedback" index="11" group="COMPONENTS" title="Progress">
    <template #intro>
      Determinate progress uses the secondary green; indeterminate loaders may use primary.
      Linear bars are <span class="ds-code">rounded</span> by default.
    </template>

    <v-row>
      <v-col cols="12" md="6">
        <h3 class="text-title-small text-medium-emphasis mb-4">v-progress-linear</h3>
        <v-progress-linear :model-value="65" class="mb-6" />
        <SpecCaption text=':model-value="65" color="secondary" rounded' />
        <v-progress-linear indeterminate color="primary" class="mb-6 mt-4" />
        <SpecCaption text='indeterminate color="primary"' />
        <v-progress-linear :model-value="42" height="18" class="mt-4">
          <template #default="{ value }">
            <span class="text-caption font-weight-medium">{{ Math.ceil(value) }}%</span>
          </template>
        </v-progress-linear>
        <SpecCaption text='height="18" · #default percentage label' />
      </v-col>

      <v-col cols="12" md="6">
        <h3 class="text-title-small text-medium-emphasis mb-4">v-progress-circular</h3>
        <div class="d-flex ga-8 align-center">
          <div class="text-center">
            <v-progress-circular :model-value="70" :size="64" :width="5" />
            <SpecCaption text=':model-value="70" :size="64"' />
          </div>
          <div class="text-center">
            <v-progress-circular indeterminate :size="48" />
            <SpecCaption text="indeterminate color=secondary" />
          </div>
          <div class="text-center">
            <v-progress-circular indeterminate size="small" color="primary" />
            <SpecCaption text='size="small" color="primary"' />
          </div>
        </div>
      </v-col>
    </v-row>
  </DsSection>
</template>
