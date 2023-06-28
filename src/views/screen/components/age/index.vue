<template>
  <div class="box">
    <div class="top">
      <p class="title">年龄比例</p>
      <p class="top-bg"></p>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const charts = ref()

onMounted(() => {
  let myecharts = echarts.init(charts.value)
  myecharts.setOption({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: '80%',
      top: 40,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'inside',
          color: '#fff',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '王者荣耀' },
          { value: 735, name: '刺激战场' },
          { value: 580, name: 'QQ飞车' },
          { value: 484, name: '狼人杀' },
          { value: 300, name: '泡泡堂' },
        ],
      },
    ],
  })
})
</script>

<style scoped lang="scss">
.box {
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;
  .top {
    margin-left: 20px;
    position: relative;
    .title {
      color: white;
      font-size: 20px;
    }
    .top-bg {
      width: 68px;
      height: 7px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    }
  }
  .charts {
    padding: 30px;
    height: 300px;
  }
}
</style>
