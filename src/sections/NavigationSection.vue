<script setup>
import { ref } from 'vue'
import DsSection from '@/components/DsSection.vue'
import SpecCaption from '@/components/SpecCaption.vue'
import { mdiDotsVertical, mdiViewDashboard, mdiChartLine, mdiCog, mdiEye } from '@mdi/js'

const tab = ref('overview')
const page = ref(3)
const crumbs = [
  { title: 'Projects', href: '#' },
  { title: 'Velocity', href: '#' },
  { title: 'Settings', disabled: true },
]
const steps = ['Cart', 'Shipping', 'Payment']
</script>

<template>
  <DsSection id="navigation" index="08" group="COMPONENTS" title="Navigation">
    <template #intro>
      App bar is <span class="ds-code">color="primary"</span> (black); tabs, drawer active items,
      and stepper progress use the secondary green. Pagination active page is primary.
    </template>

    <!-- App bar + drawer (contained layout) -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-app-bar + v-navigation-drawer</h3>
    <v-card border rounded="lg" class="overflow-hidden mb-6">
      <v-layout style="height: 260px">
        <v-app-bar color="primary" title="Velocity">
          <template #prepend><v-app-bar-nav-icon /></template>
          <template #append><v-btn :icon="mdiDotsVertical" /></template>
        </v-app-bar>
        <v-navigation-drawer permanent width="220">
          <v-list nav density="compact">
            <v-list-item active :prepend-icon="mdiViewDashboard" title="Dashboard" />
            <v-list-item :prepend-icon="mdiChartLine" title="Metrics" />
            <v-list-item :prepend-icon="mdiCog" title="Settings" />
          </v-list>
        </v-navigation-drawer>
        <v-main>
          <div class="pa-4 text-body-small text-medium-emphasis">Content area (v-main)</div>
        </v-main>
      </v-layout>
    </v-card>
    <SpecCaption text='v-app-bar color="primary" · drawer active-color secondary' />

    <!-- Tabs -->
    <h3 class="text-title-small text-medium-emphasis mb-4 mt-8">v-tabs</h3>
    <v-card border rounded="lg" class="mb-6">
      <v-tabs v-model="tab">
        <v-tab value="overview" :prepend-icon="mdiEye">Overview</v-tab>
        <v-tab value="activity">Activity</v-tab>
        <v-tab value="usage">Usage</v-tab>
        <v-tab value="archived" disabled>Archived</v-tab>
      </v-tabs>
    </v-card>
    <SpecCaption text='color="secondary" slider-color="secondary"' />

    <!-- Breadcrumbs -->
    <h3 class="text-title-small text-medium-emphasis mb-4 mt-8">v-breadcrumbs</h3>
    <v-breadcrumbs :items="crumbs" divider="/" class="pa-0 mb-2" />
    <SpecCaption text=':items · divider="/"' />

    <!-- Pagination -->
    <h3 class="text-title-small text-medium-emphasis mb-4 mt-8">v-pagination</h3>
    <v-pagination v-model="page" :length="12" :total-visible="7" class="mb-2" />
    <SpecCaption text=':length="12" active-color="primary" rounded="circle"' />

    <!-- Stepper -->
    <h3 class="text-title-small text-medium-emphasis mb-4 mt-8">v-stepper</h3>
    <v-stepper :items="steps" :model-value="2" flat border rounded="lg" hide-actions />
    <SpecCaption text='v-stepper :items · complete=secondary · active=primary' />
  </DsSection>
</template>
