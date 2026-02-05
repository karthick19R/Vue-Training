import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import tablecomponent from '../src/components/tablecomponent.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('tablecomponent',tablecomponent)
// .component()
// chaining to apply more componenet
app.mount('#app')
