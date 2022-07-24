/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-05 11:27:07
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\toApi\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: "/toapi", name: "ToApi", component: () => import("../views/index.vue"), meta: { title: "ToApi专项" } }
]