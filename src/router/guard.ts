/*
 * @Author: dongjia
 * @Date: 2022-07-05 11:37:33
 * @LastEditTime: 2022-07-05 21:31:39
 * @LastEditors: aleaner
 * @Description: 路由守卫
 * @FilePath: \vue3-vite\src\router\guard.ts
 * 怎么可能会有bug！！！
 */
import { Router } from "vue-router"
// 路由跳转进度条插件
import Nprogres from "nprogress"
import "nprogress/nprogress.css"
export default function guard(router: Router) {

  // 路由前置守卫
  router.beforeEach((to, from, next) => {
    /**
     * 在这里可以做一些路由跳转之前的操作
     * 比如：
     * 1，不存在的路由跳转404页面、进入权限路由的时候未登录状态跳转登录页
     * 2，进入登录页面的时候已在登录状态进入权限首页
     * 3，拦截外部网站的跳转（可以执行一些账号免密登录之类的操作）
     * 4，路由切换时可以取消上个路由还在请求的接口
     * 5，当然也可以做跳转的进度条效果
     */
    // 不存在的路由，跳转404页面
    if (to.matched.length === 0 && to.name === '404') {
      return next({ name: "404" })
    }
    // 进度条开始
    Nprogres.start()
    next();
  })

  // 路由后置守卫
  router.afterEach(() => {
    // 进度条结束
    Nprogres.done()
  })
}
