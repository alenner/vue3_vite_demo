/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-05 10:48:41
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\ref\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: '/', redirect: { name: "Ref" } },
  { path: "/ref", name: "Ref", component: () => import("../views/index.vue"), meta: { title: "ref专项" } }
]