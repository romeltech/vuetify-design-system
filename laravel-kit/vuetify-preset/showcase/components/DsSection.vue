<script setup>
// Section wrapper: a surface card with the "NN · GROUP" mono label, an h2
// title, and an optional intro slot. Matches the reference section chrome.
defineProps({
  id: { type: String, required: true },
  index: { type: String, required: true }, // e.g. '01'
  group: { type: String, default: 'FOUNDATIONS' },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="ds-section mb-6">
    <v-card :elevation="0" rounded="lg" border class="pa-8 pa-md-10">
      <div class="ds-mono text-secondary mb-1" style="font-size: 12px">
        {{ index }} · {{ group }}
      </div>
      <h2 class="text-headline-medium font-weight-medium mb-2">{{ title }}</h2>
      <div v-if="$slots.intro" class="text-body-medium text-medium-emphasis mb-6" style="max-width: 860px">
        <slot name="intro" />
      </div>
      <slot />
    </v-card>
  </section>
</template>
