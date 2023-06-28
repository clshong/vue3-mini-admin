<template>
  <div class="box">
    <div class="top">
      <p class="title">男女比例</p>
      <p class="top-bg"></p>
    </div>
    <div class="sex">
      <div class="man">
        <img src="../../images/man.png" alt="男生" />
      </div>
      <div class="women">
        <img src="../../images/woman.png" alt="女生" />
      </div>
    </div>
    <!-- <div class="rate">
      <p>男58%</p>
      <p>女42%</p>
    </div> -->
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
    title: {
      text: '男女比列(男：58%，女：42%)',
      textStyle: {
        color: 'skyblue',
      },
      left: '20%',
    },

    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        data: ['58'],
        barWidth: 20,
        z: 100,
        itemStyle: {
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: ['100'],
        barWidth: 20,
        barGap: '-100%',
        itemStyle: {
          coclor: 'pink',
          borderRadius: 20,
        },
      },
    ],
    gird: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  })
})
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
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
  .sex {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .man {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/man-bg.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .women {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/woman-bg.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .rate {
    display: flex;
    justify-content: space-between;
    color: white;
  }
  .charts {
    height: 100px;
  }
}
</style>
