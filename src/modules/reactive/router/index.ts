/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-05 11:10:47
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\reactive\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: "/reactive", name: "Reactive", component: () => import("../views/index.vue"), meta: { title: "reactive专项" } }
]