<!--
 * @Author: dongjia
 * @Date: 2022-06-30 23:47:55
 * @LastEditTime: 2022-07-16 22:08:26
 * @LastEditors: aleaner
 * @Description: Watch监听专项
 * @FilePath: \vue3-vite\src\modules\echart\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">Echarts专项</p>
    <div class="my-echart" ref="myEcharts" id="echart"></div>
  </div>
</template>

<script setup lang="ts">
import barChart from "../assets/echarts/bar-chart";
// const myEcharts = ref(null)
let myBarChart: barChart;
nextTick(() => {
  myBarChart = new barChart({
    container: document.getElementById("echart") as HTMLElement,
    xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    data: [10, 20, 30, 50, 25, 46, 59],
  });
});

onBeforeUnmount(() => {
  myBarChart.dispose();
});
</script>

<style lang="scss" scoped>
.my-echart {
  width: 100%;
  height: 300px;
}
</style>