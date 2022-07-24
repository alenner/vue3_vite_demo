<!--
 * @Author: dongjia
 * @Date: 2022-07-03 19:45:09
 * @LastEditTime: 2022-07-05 11:31:42
 * @LastEditors: aleaner
 * @Description: Pinia插件专项
 * @FilePath: \vue3-vite\src\modules\pinia\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="main-content">
    <p class="item-title">Pinia插件专项</p>
    <div>
      用户信息：{{ adminStore.user }}
    </div>
    <div>
      用户简介：{{ adminStore.getUserMsg }}
    </div>
    <div class="flex-item">
      <div>解构用户信息：</div>
      <div>
        <div>name：{{ name }}</div>
        <div>age：{{ age }}</div>
        <div>son：{{ son }}</div>
      </div>
    </div>
    <button @click="changeName">修改user.name</button>
    <button @click="resetName">重置user.name</button>
    <button @click="changeTheme">修改组件主题样式</button>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from "@/store"
import { storeToRefs } from "pinia"

const adminStore = useAdminStore()
let isLightTheme = ref<boolean>(true)
// 直接解构store是不具有响应式的，需要用到pinia的storeToRefs
const { user, PiniaComTheme } = storeToRefs(adminStore)
let { name, age, son } = toRefs(user.value)
// 修改adminStore中的user.name
/**
 * 1,直接adminStore.user.name赋值
 * 2,通过$patch(mergeState)方式修改
  adminStore.$patch({
    user: {
      name: "zhang"
    }
  })
 * 3,通过$patch((state) => {})方式修改
  adminStore.$patch((state) => {
    state.user.name = "zhang"
  })
 * 4, adminStore中的action修改
 */

const changeName = () => {
  // adminStore.user.name = "zhang"
  // adminStore.$patch({
  //   user: {
  //     name: "zhang"
  //   }
  // })
  // adminStore.$patch((state) => {
  //   state.user.name = "zhang"
  // })
  // adminStore.changeUserName("zhang")
  name.value = "zhang"
  console.log(adminStore.user)
}

const resetName = () => {
  adminStore.$reset()
}

const changeTheme = () => {
  isLightTheme.value = !isLightTheme.value
  adminStore.changeComTheme(isLightTheme.value)
}

</script>

<style lang="scss" scoped>
.main-content {
  background-color: v-bind('PiniaComTheme.backgroundColor');
  color: v-bind('PiniaComTheme.color');
}

.flex-item {
  display: flex;

  div+div {
    margin-left: 20px;
  }
}
</style>