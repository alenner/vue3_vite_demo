/*
 * @Author: dongjia
 * @Date: 2022-07-03 19:48:09
 * @LastEditTime: 2022-07-03 23:35:33
 * @LastEditors: aleaner
 * @Description: pinia状态管理器
 * @FilePath: \vue3-vite\src\store\index.ts
 * 怎么可能会有bug！！！
 */
import { defineStore } from "pinia"

export const useAdminStore = defineStore('Admin', {
  // 用于存放数据
  state: () => {
    return {
      PiniaComTheme: {
        color: "black",
        backgroundColor: "white"
      },
      user: {
        name: "liang",
        age: 18,
        son: {
          name: "liang",
          age: 2
        }
      }
    }
  },
  // 相当于vue中的computed，修饰一些值
  getters: {
    getUserMsg(): string {
      return `姓名：${this.user.name},年龄：${this.user.age}`
    }
  },
  // 相当于vue中的methods 可以做同步 异步处理，用于修改state值
  actions: {
    changeUserName(value: string) {
      this.user.name = value
    },
    // 修改组件主题样式
    changeComTheme(isLight: boolean) {
      this.PiniaComTheme = isLight ? {
        color: "black",
        backgroundColor: "white"
      } : {
        color: "white",
        backgroundColor: "black"
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
        paths: ['user']
      }
    ]
  }
})