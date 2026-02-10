import './assets/main.css'
import vcapitalize from './custom/directive'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'
import tablecomponent from '../src/components/tablecomponent.vue'
const app = createApp(App)
const vuetify = createVuetify()
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('capitalize',vcapitalize)
app.component('tablecomponent',tablecomponent)
// .component()
// chaining to apply more componenet
app.mount('#app')
