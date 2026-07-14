import { fileURLToPath, URL } from 'node:url'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import tailwindcss from '@tailwindcss/vite'

// Resolve the preset's SASS settings from the package (works with npm/pnpm/yarn
// symlinked node_modules). vite-plugin-vuetify prepends this file to Vuetify's
// SASS so the design-system shape/font tokens apply.
const require = createRequire(import.meta.url)
const vuetifyPresetSettings = require.resolve('vuetify-preset/settings.scss')

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: { configFile: vuetifyPresetSettings },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
})
