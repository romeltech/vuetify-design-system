<script setup>
import { ref } from 'vue'
import DsSection from '../components/DsSection.vue'
import SpecCaption from '../components/SpecCaption.vue'

const selected = ref(['checkout-api'])
const headers = [
  { title: 'Service', key: 'service' },
  { title: 'Status', key: 'status' },
  { title: 'Requests', key: 'requests', align: 'end' },
]
const items = [
  { service: 'checkout-api', status: 'Healthy', requests: 124, color: 'success' },
  { service: 'billing-worker', status: 'Degraded', requests: 412, color: 'warning' },
  { service: 'auth-service', status: 'Down', requests: 0, color: 'error' },
]
</script>

<template>
  <DsSection id="data" index="09" group="COMPONENTS" title="Data table — v-data-table">
    <template #intro>
      Props <span class="ds-code">:headers :items show-select hover items-per-page</span>. Sorted
      column shows an arrow; selected rows tint secondary; built-in pagination footer. Status uses
      <span class="ds-code">v-chip size="small"</span> with semantic colors.
    </template>

    <v-card border rounded="lg" class="overflow-hidden">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        item-value="service"
        show-select
        hover
        :items-per-page="10"
      >
        <template #item.status="{ item }">
          <v-chip size="small" :color="item.color" variant="tonal">{{ item.status }}</v-chip>
        </template>
        <template #item.requests="{ item }">
          {{ item.requests === 0 ? '—' : item.requests }}
        </template>
      </v-data-table>
    </v-card>
    <SpecCaption text='status chips: color="success|warning|error" · selection color="secondary"' />
  </DsSection>
</template>
