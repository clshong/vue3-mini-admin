<template>
  <div class="container">
    <div class="screen" ref="screen">
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

const screen = ref()

onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})

//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const hh = window.innerHeight / h
  return ww < hh ? ww : hh
}

//监听视角变化

window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
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
