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
    dark: true,
    brand: {
      primary: '#10b981',
      secondary: '#0ea5e9',
      accent: '#a855f7',
      dark: '#0f172a',
      'dark-page': '#020617',
      positive: '#10b981',
      negative: '#f43f5e',
      info: '#38bdf8',
      warning: '#f59e0b'
    }
  }
})

app.mount('#app')
