<!--
 * @Author: dongjia
 * @Date: 2022-07-01 23:16:05
 * @LastEditTime: 2022-07-02 00:54:43
 * @LastEditors: aleaner
 * @Description: 异步组件
 * @FilePath: \vue3-vite\src\components\AsyncComponent\AsyncCom.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    异步组件渲染完成
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue"

// 定义一个Promise对象
const getList = function (flag: boolean) {
  return new Promise<string[]>((resolve, reject) => {
    const arr = ['item1', 'item2', 'item3', 'item4']
    setTimeout(() => {
      if (flag) {
        resolve(arr)
      } else {
        reject(arr)
      }
    }, 5000)
  })
}
let arr: string[] = [];
try {
  arr = await getList(false)
} catch (err) {
} // 这一步是形成异步组件的关键
let arrList = reactive<string[]>(arr)

</script>

<style lang="scss" scoped>
</style>