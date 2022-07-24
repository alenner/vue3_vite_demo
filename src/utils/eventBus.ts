/*
 * @Author: dongjia
 * @Date: 2022-07-03 09:37:44
 * @LastEditTime: 2022-07-16 22:18:53
 * @LastEditors: aleaner
 * @Description: 事件总线eventBus（发布订阅模式）
 * @FilePath: \vue3-vite\src\utils\eventBus.ts
 * 怎么可能会有bug！！！
 */

/**
 * 设计EventBus类的类型注解
*/
type ClassBus = {
  on: (keyName: string, callback: Function) => void // 订阅事件
  once: (keyName: string, callback: Function) => void // 订阅事件（一次性）
  emit: (keyname: string, params: any) => void // 发布事件
  off: (keyName: string) => void // 事件销毁
}

/**
 * 设计存放事件的属性和数据类型
 * [propname: string]：指的是任意string类型的属性名称
 * Function[]：指的是该2订阅者订阅事件的合集
 */
type EventList = {
  [propname: string]: Function[];
}

class EventBus implements ClassBus {
  eventList: EventList
  constructor() {
    this.eventList = {} // 初始化事件总线
  }
  on(keyName: string, callback: Function) {
    let fn: Function[] = this.eventList[keyName] || []
    fn.push(callback)
    this.eventList[keyName] = fn
  }
  once(keyName: string, callback: Function) {

  }
  emit(keyName: string, params: any) {
    if (!this.eventList[keyName]) return
    this.eventList[keyName].forEach(callback => {
      callback.call(this, params)
    })
  }
  off(keyName: string) {
    if (!this.eventList[keyName]) return
    delete this.eventList[keyName]
  }
}

export default new EventBus()