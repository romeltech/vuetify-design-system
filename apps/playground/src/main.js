import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
// vite-plugin-vuetify intercepts this import and recompiles the full Vuetify
// style layer (reset, grid, and all d-flex/ga/ma/pa/text-* utilities) THROUGH
// the preset's settings.scss (styles.configFile in vite.config.js). Required —
// without it only per-component styles load and utility classes silently do nothing.
import 'vuetify/styles'
import './styles/tailwind.css'
import 'vuetify-preset/fonts'   // self-hosted Roboto + Roboto Mono (optional peer)
import './styles/app.scss'

import { preset } from 'vuetify-preset'
import App from './App.vue'
import router from './router/index.js'

const vuetify = createVuetify(preset)

createApp(App).use(vuetify).use(router).mount('#app')
