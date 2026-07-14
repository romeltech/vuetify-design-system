import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import tailwindcss from '@tailwindcss/vite'

// vite-plugin-vuetify does treeshaking AND compiles our SASS variable
// overrides (styles.configFile) so the design-system shape/font tokens apply.
// @tailwindcss/vite adds Tailwind 4 as a supplementary utility layer — see
// src/styles/tailwind.css (preflight disabled so it doesn't fight Vuetify).
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: { configFile: 'src/styles/settings.scss' },
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
