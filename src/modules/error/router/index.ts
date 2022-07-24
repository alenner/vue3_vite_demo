/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-05 21:19:10
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\error\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: "/404", name: "404", component: () => import("../views/404.vue"), meta: { title: "404" } }
]