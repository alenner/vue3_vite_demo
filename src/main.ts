import { createApp } from 'vue'
import App from './App.vue'
import "element-plus/dist/index.css"
// ElMessage在使用按需引入elementPlus配置失效问题
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import "./assets/scss/reset.scss"
import "./assets/scss/global.scss"

import Request from "./utils/request"

// 注册使用pinia
import { createPinia } from "pinia"
// pinia持久化插件
import piniaPluginPersist from "pinia-plugin-persist"

// 注册路由
import router from "./router"

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App)

//
Request.init()

app.use(router)

app.use(store)

app.mount('#app')
