<script setup>
// Router-free style guide — renders the full 13-section reference under the
// preset. Mount it on any Inertia page or SPA route. The in-page nav uses plain
// #anchor links (no vue-router needed); the theme toggle uses Vuetify useTheme().
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js'
import { sections } from './data/sections.js'
import './styles/showcase.scss'

import ColorsSection from './sections/ColorsSection.vue'
import TypographySection from './sections/TypographySection.vue'
import LayoutSection from './sections/LayoutSection.vue'
import ButtonsSection from './sections/ButtonsSection.vue'
import FormsSection from './sections/FormsSection.vue'
import SelectionSection from './sections/SelectionSection.vue'
import SurfacesSection from './sections/SurfacesSection.vue'
import NavigationSection from './sections/NavigationSection.vue'
import DataTableSection from './sections/DataTableSection.vue'
import OverlaysSection from './sections/OverlaysSection.vue'
import ProgressSection from './sections/ProgressSection.vue'
import ThemesSection from './sections/ThemesSection.vue'
import HandoffSection from './sections/HandoffSection.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <!-- Includes <v-app> so it renders standalone. If your app already provides a
       <v-app> ancestor, render the <v-main> block below directly instead. -->
  <v-app class="ds-app" :class="{ 'is-dark': isDark }">
    <v-app-bar color="primary" flat>
      <v-app-bar-title>
        <div class="d-flex align-center ga-3">
          <div style="width: 28px; height: 28px; border-radius: 8px; background: #00cc61" />
          <span class="text-title-medium">Vuetify 4 Design System</span>
        </div>
      </v-app-bar-title>
      <template #append>
        <v-btn
          :prepend-icon="isDark ? mdiWeatherSunny : mdiWeatherNight"
          variant="text"
          @click="toggleTheme"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-main style="background: var(--ds-canvas)">
      <div class="ds-nav py-3" :style="{ background: isDark ? 'rgba(13,13,13,.7)' : 'rgba(242,242,240,.7)' }">
        <v-container class="py-0">
          <div class="d-flex flex-wrap ga-2">
            <v-btn
              v-for="s in sections"
              :key="s.id"
              :href="`#${s.id}`"
              size="small"
              variant="outlined"
              color="on-surface"
              class="text-none ds-mono"
              style="font-size: 11.5px"
            >
              {{ s.label }}
            </v-btn>
          </div>
        </v-container>
      </div>

      <v-container class="py-8">
        <ColorsSection />
        <TypographySection />
        <LayoutSection />
        <ButtonsSection />
        <FormsSection />
        <SelectionSection />
        <SurfacesSection />
        <NavigationSection />
        <DataTableSection />
        <OverlaysSection />
        <ProgressSection />
        <ThemesSection />
        <HandoffSection />
      </v-container>
    </v-main>
  </v-app>
</template>
