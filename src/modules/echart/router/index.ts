/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:11:46
 * @LastEditTime: 2022-07-10 13:18:40
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\echart\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: "/echarts", name: "Echarts", component: () => import("../views/index.vue"), meta: { title: "echarts专项" } }
]