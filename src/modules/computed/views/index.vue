<!--
 * @Author: dongjia
 * @Date: 2022-06-30 23:08:21
 * @LastEditTime: 2022-07-10 12:37:17
 * @LastEditors: aleaner
 * @Description: computed计算属性
 * @FilePath: \vue3-vite\src\modules\computed\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <p class="item-title">computed专项练习</p>
  <table class="table">
    <thead>
      <tr>
        <th>商品名称</th>
        <th>
          <span>商品数量</span>
          <el-button text type="primary" size="small" @click="numSort(0)">升序</el-button>
          <el-button text type="primary" size="small" @click="numSort(1)">降序</el-button>
        </th>
        <th>商品单价</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in shopCar" :key="index">
        <th>{{ item.name }}</th>
        <th><button @click="addOrReduce(item, -1)">-</button>
          {{ item.count }}
          <button @click="addOrReduce(item, 1)">+</button>
        </th>
        <th>{{ item.price }}</th>
        <th><button @click="removeShop(index)">移除</button></th>
      </tr>
    </tbody>
    <tfoot>
      <th></th>
      <th></th>
      <th></th>
      <th>总价：{{ total }}</th>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

/**
 * 设计一个模拟购物车表格功能
 */
type shopCarItem = {
  name: string;
  count: number;
  price: number;
}
let shopCar = reactive<shopCarItem[]>([
  { name: "商品A", count: 1, price: 100 },
  { name: "商品B", count: 1, price: 200 },
  { name: "商品C", count: 1, price: 300 },
])

// 计算购物车的总价
let total = computed(() => {
  return shopCar.reduce((sum, item) => {
    return sum + (item.count * item.price)
  }, 0)
})

// 新增或减少商品
function addOrReduce(item: shopCarItem, num: number) {
  if (item.count === 1 && num === -1) return
  item.count += num
}

function removeShop(index: number) {
  shopCar.splice(index, 1)
}

// 商品数量的升降序
function numSort(type: number) {
  shopCar.sort((a, b) => {
    return type ? a.count - b.count : b.count - a.count
  })
}

</script>

<style lang="scss" scoped>
.item-title {
  text-align: center;
  font-size: 20px;
  color: #727272;
  font-weight: bold;
}

.table {
  width: 80%;
  margin: 0 10%;
}

.table,
th {
  border: 2px solid rgb(141, 141, 141);
}

thead {
  th {
    font-weight: bold;
  }
}
</style>