<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb />
    </div>
    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb, Setting } from './index'
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  background: red;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(232, 223, 223),
    rgb(211, 211, 208),
    rgb(181, 183, 182)
  );
  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
</style>
