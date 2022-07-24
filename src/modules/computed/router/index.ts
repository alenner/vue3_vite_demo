/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-05 11:29:12
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\computed\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: "/computed", name: "Computed", component: () => import("../views/index.vue"), meta: { title: "Computed专项" } }
]