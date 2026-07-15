<script setup>
import { ref } from 'vue'
import DsSection from '../components/DsSection.vue'
import SpecCaption from '../components/SpecCaption.vue'
import { mdiShare, mdiLink, mdiDelete, mdiContentCopy, mdiChevronDown } from '@mdi/js'

const dialog = ref(false)
const sheet = ref(false)
const snackbar = ref(false)
</script>

<template>
  <DsSection id="overlays" index="10" group="COMPONENTS" title="Overlays">
    <template #intro>
      dialog · bottom sheet · snackbar · tooltip · menu · expansion panels. Destructive dialog
      actions use <span class="ds-code">color="error"</span>; snackbar/menu actions use secondary green.
    </template>

    <div class="d-flex ga-8 flex-wrap align-start mb-8">
      <!-- Dialog -->
      <div class="text-center">
        <v-btn @click="dialog = true">Open dialog</v-btn>
        <SpecCaption text='v-dialog max-width="340" persistent' />
        <v-dialog v-model="dialog" max-width="340" persistent>
          <v-card title="Delete project?">
            <v-card-text class="text-body-small">This action cannot be undone.</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
              <v-btn color="error" variant="flat" @click="dialog = false">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!-- Bottom sheet -->
      <div class="text-center">
        <v-btn variant="outlined" @click="sheet = true">Bottom sheet</v-btn>
        <SpecCaption text="v-bottom-sheet + v-list" />
        <v-bottom-sheet v-model="sheet">
          <v-list>
            <v-list-item :prepend-icon="mdiShare" title="Share" @click="sheet = false" />
            <v-list-item :prepend-icon="mdiLink" title="Copy link" @click="sheet = false" />
            <v-list-item :prepend-icon="mdiDelete" title="Delete" @click="sheet = false" />
          </v-list>
        </v-bottom-sheet>
      </div>

      <!-- Snackbar -->
      <div class="text-center">
        <v-btn variant="tonal" @click="snackbar = true">Show snackbar</v-btn>
        <SpecCaption text='timeout="4000" · action secondary' />
        <v-snackbar v-model="snackbar" color="surface-variant">
          Changes saved.
          <template #actions>
            <v-btn variant="text" color="secondary" @click="snackbar = false">Undo</v-btn>
          </template>
        </v-snackbar>
      </div>

      <!-- Tooltip -->
      <div class="text-center">
        <v-btn :icon="mdiContentCopy" variant="tonal">
          <v-tooltip activator="parent" location="top" text="Copy link" />
        </v-btn>
        <SpecCaption text='v-tooltip location="top"' />
      </div>

      <!-- Menu -->
      <div class="text-center">
        <v-btn variant="outlined" :append-icon="mdiChevronDown">
          Options
          <v-menu activator="parent">
            <v-list density="compact">
              <v-list-item title="Rename" />
              <v-list-item title="Duplicate" />
              <v-list-item title="Archive" />
            </v-list>
          </v-menu>
        </v-btn>
        <SpecCaption text="v-menu · activator=parent" />
      </div>
    </div>

    <!-- Expansion panels -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-expansion-panels</h3>
    <v-expansion-panels>
      <v-expansion-panel title="Expanded by default" text="Panel body content." />
      <v-expansion-panel title="Collapsed" text="Panel body content." />
      <v-expansion-panel title="Disabled" text="Unavailable." disabled />
    </v-expansion-panels>
  </DsSection>
</template>
