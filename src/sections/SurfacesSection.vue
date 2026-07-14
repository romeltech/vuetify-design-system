<script setup>
import DsSection from '@/components/DsSection.vue'
import SpecCaption from '@/components/SpecCaption.vue'
import {
  mdiDownload,
  mdiAccount,
  mdiBell,
  mdiEmail,
  mdiFolder,
  mdiFolderOutline,
  mdiFolderLock,
} from '@mdi/js'
</script>

<template>
  <DsSection id="surfaces" index="07" group="COMPONENTS" title="Cards · Chips · Alerts · Banners · Avatars · Badges · Lists">
    <template #intro>
      System default <span class="ds-code">v-card variant="elevated" :elevation="1" rounded="lg"</span>.
      Chips, alerts, and list active states use the secondary green.
    </template>

    <!-- Cards -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-card variants</h3>
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3">
        <v-card>
          <v-img height="90" src="" gradient="135deg, #00cc61, #005c2e" />
          <v-card-item>
            <v-card-title class="text-title-medium">Elevated</v-card-title>
            <v-card-subtitle>default card</v-card-subtitle>
          </v-card-item>
          <v-card-text class="text-body-small">The system default surface.</v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="secondary">Action</v-btn>
          </v-card-actions>
        </v-card>
        <SpecCaption text='variant="elevated"' />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="flat" color="surface-light" class="pa-4 h-75">
          <div class="text-title-medium mb-1">Flat</div>
          <div class="text-body-small text-medium-emphasis">Subtle filled surface.</div>
        </v-card>
        <SpecCaption text='variant="flat" color="surface-light"' />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="tonal" color="secondary" class="pa-4 h-75">
          <div class="text-title-medium mb-1">Tonal</div>
          <div class="text-body-small">Green-tinted surface.</div>
        </v-card>
        <SpecCaption text='variant="tonal" color="secondary"' />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined" class="pa-4 h-75">
          <div class="text-title-medium mb-1">Outlined</div>
          <div class="text-body-small text-medium-emphasis">Border, no fill.</div>
        </v-card>
        <SpecCaption text='variant="outlined"' />
      </v-col>
    </v-row>

    <!-- Chips -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-chip</h3>
    <div class="d-flex ga-3 flex-wrap align-center mb-6">
      <v-chip>tonal secondary</v-chip>
      <v-chip variant="flat" color="primary">flat primary</v-chip>
      <v-chip variant="outlined">outlined</v-chip>
      <v-chip filter>filter</v-chip>
      <v-chip closable>
        <v-avatar start color="secondary" size="20">A</v-avatar>
        avatar · closable
      </v-chip>
      <v-chip size="small">small</v-chip>
      <v-chip color="error">error</v-chip>
    </div>

    <!-- Alerts -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-alert (tonal = v4 default)</h3>
    <v-row class="mb-6">
      <v-col cols="12" md="6">
        <v-alert type="success" title="Deployed" text="Build 124 is live." />
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="info" text="A new version is available." />
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="warning" closable text="Certificate expires in 3 days." />
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="error" variant="flat" text="Payment failed." />
      </v-col>
      <v-col cols="12">
        <v-alert border="start" border-color="success" variant="outlined" text="Border-accented variant." />
      </v-col>
    </v-row>

    <!-- Banner -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-banner</h3>
    <v-banner lines="one" :icon="mdiDownload" class="mb-6" rounded="lg" border>
      <v-banner-text>An update is ready to install.</v-banner-text>
      <template #actions>
        <v-btn variant="text" color="secondary">Later</v-btn>
        <v-btn variant="text" color="secondary">Update</v-btn>
      </template>
    </v-banner>

    <!-- Avatars & badges -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-avatar · v-badge</h3>
    <div class="d-flex ga-6 flex-wrap align-center mb-6">
      <v-avatar size="24" color="primary">S</v-avatar>
      <v-avatar color="secondary">AV</v-avatar>
      <v-avatar size="56" color="surface-variant"><v-icon :icon="mdiAccount" /></v-avatar>
      <v-badge dot color="secondary"><v-icon :icon="mdiBell" /></v-badge>
      <v-badge content="3"><v-icon :icon="mdiEmail" /></v-badge>
    </div>

    <!-- List -->
    <h3 class="text-title-small text-medium-emphasis mb-4">v-list (two-line, nav density)</h3>
    <v-card :elevation="0" border rounded="lg" max-width="420">
      <v-list lines="two" nav>
        <v-list-item active title="Active item" subtitle="active-color secondary" :prepend-icon="mdiFolder" />
        <v-list-item title="Default item" subtitle="idle state" :prepend-icon="mdiFolderOutline" />
        <v-list-item disabled title="Disabled item" subtitle="not selectable" :prepend-icon="mdiFolderLock" />
      </v-list>
    </v-card>
  </DsSection>
</template>
