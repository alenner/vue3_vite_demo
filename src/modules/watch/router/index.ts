/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-05 11:26:53
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\watch\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: "/watch", name: "Watch", component: () => import("../views/index.vue"), meta: { title: "Watch专项" } }
]