<script setup>
import DsSection from '../components/DsSection.vue'
import SpecCaption from '../components/SpecCaption.vue'
import { mdiPlus, mdiMenu, mdiPencil } from '@mdi/js'

const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain']
const sizes = [
  { size: 'x-small', label: 'x-small · 20px' },
  { size: 'small', label: 'small · 28px' },
  { size: 'default', label: '(default) · 36px' },
  { size: 'large', label: 'large · 44px' },
  { size: 'x-large', label: 'x-large · 52px' },
]
</script>

<template>
  <DsSection id="buttons" index="04" group="COMPONENTS" title="Buttons — v-btn · v-fab">
    <template #intro>
      Default in this system: <span class="ds-code">variant="flat" color="primary"</span> (set globally
      in defaults). v4 buttons are lowercase by default. Height 36px (default size), radius 4px.
    </template>

    <!-- Variants · primary -->
    <h3 class="text-title-small text-medium-emphasis mb-4">Variants · color="primary"</h3>
    <div class="d-flex ga-6 flex-wrap align-start mb-6">
      <div v-for="v in variants" :key="`p-${v}`" class="text-center">
        <v-btn :variant="v" color="primary">{{ v }}</v-btn>
        <SpecCaption :text="`variant=&quot;${v}&quot;`" />
      </div>
    </div>

    <!-- Variants · secondary -->
    <h3 class="text-title-small text-medium-emphasis mb-4">Variants · color="secondary"</h3>
    <div class="d-flex ga-6 flex-wrap align-start mb-6">
      <div v-for="v in variants" :key="`s-${v}`" class="text-center">
        <v-btn :variant="v" color="secondary">{{ v }}</v-btn>
        <SpecCaption :text="`variant=&quot;${v}&quot;`" />
      </div>
    </div>

    <!-- Sizes -->
    <h3 class="text-title-small text-medium-emphasis mb-4">Sizes</h3>
    <div class="d-flex ga-6 flex-wrap align-end mb-6">
      <div v-for="s in sizes" :key="s.size" class="text-center">
        <v-btn :size="s.size === 'default' ? undefined : s.size">{{ s.size }}</v-btn>
        <SpecCaption :text="s.label" />
      </div>
      <div class="text-center">
        <v-btn :prepend-icon="mdiPlus">New item</v-btn>
        <SpecCaption text='prepend-icon="mdi-plus"' />
      </div>
      <div class="text-center">
        <v-btn :icon="mdiMenu" variant="tonal" />
        <SpecCaption text='icon="mdi-menu"' />
      </div>
    </div>

    <!-- States -->
    <h3 class="text-title-small text-medium-emphasis mb-4">States</h3>
    <div class="d-flex ga-6 flex-wrap align-start mb-6">
      <div class="text-center">
        <v-btn>Enabled</v-btn>
        <SpecCaption text="default" />
      </div>
      <div class="text-center">
        <v-btn loading>Saving</v-btn>
        <SpecCaption text=':loading="true"' />
      </div>
      <div class="text-center">
        <v-btn disabled>Disabled</v-btn>
        <SpecCaption text=':disabled="true"' />
      </div>
      <div class="text-center" style="flex: 1; min-width: 260px">
        <v-btn block>Block button</v-btn>
        <SpecCaption text=':block="true"' />
      </div>
    </div>

    <!-- FAB -->
    <h3 class="text-title-small text-medium-emphasis mb-4">FAB — v-fab</h3>
    <div class="d-flex ga-6 flex-wrap align-start" style="min-height: 80px">
      <div class="text-center">
        <v-fab :icon="mdiPlus" color="secondary" style="position: static" />
        <SpecCaption text='color="secondary" icon="mdi-plus"' />
      </div>
      <div class="text-center">
        <v-fab :icon="mdiPlus" color="secondary" size="small" style="position: static" />
        <SpecCaption text='size="small"' />
      </div>
      <div class="text-center">
        <v-fab extended :prepend-icon="mdiPencil" text="Compose" color="secondary" style="position: static" />
        <SpecCaption text="extended prepend-icon" />
      </div>
      <div class="text-center">
        <v-fab :icon="mdiPencil" color="primary" style="position: static" />
        <SpecCaption text='color="primary" icon="mdi-pencil"' />
      </div>
    </div>
  </DsSection>
</template>
