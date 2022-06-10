import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
