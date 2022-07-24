/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:05:52
 * @LastEditTime: 2022-07-16 22:14:02
 * @LastEditors: aleaner
 * @Description: 路由配置
 * @FilePath: \vue3-vite\src\modules\admin\router\index.ts
 * 怎么可能会有bug！！！
 */
export default [
  { path: '/admin', name: "Admin", component: () => import("../views/admin.vue"), meta: { private: true } }
]