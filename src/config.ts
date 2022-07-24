/*
 * @Author: dongjia
 * @Date: 2022-07-05 09:14:38
 * @LastEditTime: 2022-07-16 22:15:39
 * @LastEditors: aleaner
 * @Description: 整合模块配置文件
 * @FilePath: \vue3-vite\src\config.ts
 * 怎么可能会有bug！！！
 */
import { RouteRecordRaw } from "vue-router"
let MainRouters: RouteRecordRaw[] = [] // 主路由
let AdminRouter: RouteRecordRaw = {
  path: '',
  name: '',
  children: []
}; // 权限路由
let SubRouters: RouteRecordRaw[] = [] // 子路由
const NoneRouter: RouteRecordRaw = { path: "/:pathMatch(.*)*", redirect: { name: "404" } } // 无法匹配的路由名将跳转404页面

const files = import.meta.globEager('./modules/**/config.ts') // vite批量文件引用的方法
console.log(Object.keys(files))
Object.keys(files).forEach(path => {
  let fileData = files[path]
  fileData = fileData.default || fileData

  // 路由分类
  try {
    if (fileData.router) {
      if (fileData.isAdmin) {
        AdminRouter = fileData.router[0] // 主路由只能有一个
      } else if (fileData.is_main_router) {
        MainRouters.push(...fileData.router)
      } else {
        SubRouters.push(...fileData.router)
      }
    }
  } catch (err: any) {
    console.error("模块路由插入失败，可能你导出的路由不是一个数组，错误信息为：" + err.message);
  }
})

// 整合路由
let ModuleRouters: RouteRecordRaw[] = []
// 将SubRouters配置为Adminrouter的子路由
if (AdminRouter.name) {
  AdminRouter.children = SubRouters
}
ModuleRouters = [AdminRouter, ...MainRouters, NoneRouter]

export {
  ModuleRouters,
  SubRouters,
  MainRouters
}