import { createApp } from 'vue'
import { Quasar, Dark } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import './style.css'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {
    Dark
  },
  config: {
    dark: false,
    brand: {
      primary: '#111111',
      secondary: '#3f3f46',
      accent: '#18181b',
      dark: '#09090b',
      'dark-page': '#000000',
      positive: '#16a34a',
      negative: '#dc2626',
      info: '#2563eb',
      warning: '#d97706'
    }
  }
})

app.mount('#app')
