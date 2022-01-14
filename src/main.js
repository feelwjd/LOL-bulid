import { createApp, VueElement } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'

import axios from 'axios'

VueElement.prototype.$axios = axios


const app = createApp(App).use(Quasar, quasarUserOptions)
app.use(router, Quasar, quasarUserOptions)
app.mount('#app')
