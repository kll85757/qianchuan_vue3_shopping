import '@/styles/common.scss'

import { createApp } from 'vue'
import pinia from './stores/index.js'

import App from './App.vue'
import router from './router'
// 自定义指令导入
import { lazyPlugin } from './directives/lazyPlugin.js'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)

app.mount('#app')
// 全局指令注册
app.use(lazyPlugin)
