import { createApp } from 'vue'
import App from './App.vue'
import MoonwindUI from 'moonwind-ui'
import '@moonwind-ui/styles'

const app = createApp(App)
app.use(MoonwindUI)
app.mount('#app')
