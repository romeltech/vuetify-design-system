<script setup>
import { ref } from 'vue'
import DsSection from '../components/DsSection.vue'
import SpecCaption from '../components/SpecCaption.vue'

const regions = ['Americas', 'EMEA', 'APAC', 'Marketplace']
const combo = ref(['Design', 'Frontend'])
const variants = [
  { variant: 'filled', label: 'variant="filled"' },
  { variant: 'outlined', label: 'variant="outlined" ← default' },
  { variant: 'solo', label: 'variant="solo"' },
  { variant: 'underlined', label: 'variant="underlined"' },
  { variant: 'plain', label: 'variant="plain"' },
]
</script>

<template>
  <DsSection id="forms" index="05" group="COMPONENTS" title="Form inputs">
    <template #intro>
      System default: <span class="ds-code">variant="outlined" color="secondary" density="comfortable"</span>.
      Focus ring and floating label take the secondary green; error state uses
      <span class="ds-code">error</span> red. Field height 56px at default density.
    </template>

    <!-- Variants -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-text-field variants</h3>
    <v-row class="mb-4">
      <v-col v-for="v in variants" :key="v.variant" cols="12" sm="6" md="4">
        <v-text-field :variant="v.variant" label="Email" model-value="ada@velocity.io" />
        <SpecCaption :text="v.label" />
      </v-col>
    </v-row>

    <!-- States -->
    <h3 class="text-title-small text-medium-emphasis mb-4">States (outlined)</h3>
    <v-row class="mb-4">
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Focused" autofocus model-value="typing…" />
        <SpecCaption text="focused · secondary ring" />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Email" model-value="not-an-email" :error-messages="['Enter a valid email address.']" />
        <SpecCaption text=':error-messages="[…]"' />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Disabled" model-value="Locked" disabled />
        <SpecCaption text=':disabled="true"' />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Username" hint="Public handle" counter="20" persistent-hint model-value="velocity" />
        <SpecCaption text='hint counter="20" persistent-hint' />
      </v-col>
    </v-row>

    <!-- Other inputs -->
    <h3 class="text-title-small text-medium-emphasis mb-4">Other inputs</h3>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea label="Notes" rows="3" model-value="Ship the design system." />
        <SpecCaption text='v-textarea rows="3"' />
      </v-col>
      <v-col cols="12" md="6">
        <v-select label="Region" :items="regions" model-value="EMEA" />
        <SpecCaption text='v-select :items' />
      </v-col>
      <v-col cols="12" md="6">
        <v-autocomplete label="Region" :items="regions" model-value="Marketplace" />
        <SpecCaption text="v-autocomplete :items" />
      </v-col>
      <v-col cols="12" md="6">
        <v-combobox v-model="combo" label="Tags" :items="['Design', 'Frontend', 'Backend']" multiple chips closable-chips />
        <SpecCaption text="multiple chips closable-chips" />
      </v-col>
      <v-col cols="12" md="6">
        <v-file-input label="Attachment" show-size />
        <SpecCaption text="v-file-input show-size" />
      </v-col>
    </v-row>
  </DsSection>
</template>
