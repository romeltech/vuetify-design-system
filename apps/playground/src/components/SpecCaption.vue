<script setup>
// Roboto-Mono caption shown under each specimen, echoing the exact Vuetify
// props that reproduce it — mirrors the reference's captions.
defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <div class="ds-mono text-medium-emphasis ds-spec-caption">{{ text }}</div>
</template>

<style scoped>
.ds-spec-caption {
  font-size: 10.5px;
  line-height: 1.5;
  margin-top: 8px;
}
</style>
