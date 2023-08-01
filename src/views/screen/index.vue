<template>
  <div class="container">
    <div class="screen" ref="dataScreenRef">
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Toutist class="touist" />
          <Sex class="sex" />
          <Age class="age" />
        </div>
        <div class="conter">中</div>
        <div class="right">右</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Top, Toutist, Sex, Age } from './components/index'
import { ECharts } from 'echarts'

const dataScreenRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
    dataScreenRef.value.style.width = `1920px`
    dataScreenRef.value.style.height = `1080px`
  }
  // 为浏览器绑定事件
  window.addEventListener('resize', resize)
})

// 根据浏览器大小推断缩放比例
const getScale = (width = 1920, height = 1080) => {
  let ww = window.innerWidth / width
  let wh = window.innerHeight / height
  return ww < wh ? ww : wh
}

// 监听浏览器 resize 事件
const resize = () => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  }
  // 使用了 scale 的echarts其实不需要需要重新计算缩放比例
  Object.values(dataScreen).forEach((chart) => {
    chart && chart.resize()
  })
}

// 声明echarts实例
interface ChartProps {
  [key: string]: ECharts | null
}
const dataScreen: ChartProps = {
  chart1: null,
  chart2: null,
  chart3: null,
  chart4: null,
  chart5: null,
  chart6: null,
  chart7: null,
  mapChart: null,
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png);
  background-size: cover;
  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    transform-origin: top left;
    top: 50%;
    left: 50%;
    .top {
      width: 100%;
      height: 40px;
    }
    .bottom {
      display: flex;
      .left,
      .right {
        flex: 1;
        height: 1040px;
      }
      .left {
        display: flex;
        flex-direction: column;
        .touist {
          flex: 1.2;
        }
        .sex {
          flex: 1;
        }
        .age {
          flex: 1;
        }
      }
      .conter {
        flex: 2;
      }
    }
  }
}
</style>
