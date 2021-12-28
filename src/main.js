import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'



const app = createApp(App).use(Quasar, quasarUserOptions)
app.use(router, Quasar, quasarUserOptions)
app.mount('#app')
