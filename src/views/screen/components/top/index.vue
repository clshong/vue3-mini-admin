<template>
  <div class="top">
    <div class="left">
      <span class="lfbtn" @click="goHome">首页</span>
    </div>
    <div class="conter">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <spn class="rgbtn">统计报告</spn>
      <spn class="rtime">当前时间: {{ time }}</spn>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { currentTime } from '@/utils/time'

const router = useRouter()

const time = ref(currentTime())
const timer = ref(0)

const goHome = () => {
  router.push('/')
}

onMounted(() => {
  setInterval(() => {
    time.value = currentTime()
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;
  .left,
  .right {
    flex: 1.5;
  }
  .left {
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;
    position: relative;
    .lfbtn {
      position: absolute;
      width: 150px;
      height: 40px;
      line-height: 40px;
      right: 0;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      color: #29fcff;
      font-size: 20px;
    }
  }
  .right {
    background: url(../../images/dataScreen-header-right-bg.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    .rgbtn {
      width: 150px;
      height: 40px;
      line-height: 40px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      color: #29fcff;
      font-size: 20px;
    }
    .rtime {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      color: #29fcff;
    }
  }
  .conter {
    flex: 2;
    .title {
      width: 100%;
      height: 74px;
      background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 74px;
      font-size: 30px;
      color: #29fcff;
    }
  }
}
</style>
