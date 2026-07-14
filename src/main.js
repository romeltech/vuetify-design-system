import { createApp } from 'vue'
// vite-plugin-vuetify intercepts this import and recompiles the full Vuetify
// style layer (reset, grid, and all d-flex/ga/ma/pa/text-* utilities) THROUGH
// our settings.scss (styles.configFile in vite.config.js). Required — without
// it only per-component styles load and utility classes silently do nothing.
import 'vuetify/styles'
import './styles/tailwind.css'
import './styles/fonts.js'
import './styles/app.scss'

import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router/index.js'

createApp(App).use(vuetify).use(router).mount('#app')
