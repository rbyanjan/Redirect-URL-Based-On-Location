import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

let app = createApp(App)

app.config.globalProperties.map_Key = 'AIzaSyBS0fy7fGE_kEfQhZZiJKvxQHfJlX2V7dc';

app.use(router).mount('#app')