/*
 * @Author: dongjia
 * @Date: 2022-07-04 22:57:03
 * @LastEditTime: 2022-07-05 20:03:00
 * @LastEditors: aleaner
 * @Description: 配置路由router
 * @FilePath: \vue3-vite\src\router\index.ts
 * 怎么可能会有bug！！！
 */
import { createRouter, createWebHistory } from "vue-router"
import { ModuleRouters } from "../config"
import guard from "./guard"

const router = createRouter({
  history: createWebHistory(),
  routes: ModuleRouters
})

// 开启路由守卫
guard && guard(router)

export default router