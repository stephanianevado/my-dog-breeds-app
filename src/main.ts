import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.ts'
import store from './store/index.js'
import pinia from './stores/index.ts'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(pinia)

app.mount('#app')

export default app
