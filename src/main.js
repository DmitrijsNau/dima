import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: true,
          colors: {
            primary: "#1565C0", // #E53935
            secondary: "#90A4AE", // #FFCDD2
          }
        },
      },
    },
  })

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
 