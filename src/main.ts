
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 全局引入 element-plus
import ElementPlus from './global'

const app = createApp(App)
app.use(ElementPlus) // 

app.use(createPinia())
app.use(router)

app.mount('#app')
