<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh" />
  <el-button size="small" icon="FullScreen" circle @click="fullScreen" />
  <el-button size="small" icon="Setting" circle />
  <img
    src="@/assets/images/logo.gif"
    style="width: 24px; height: 24px; margin: 0 10px"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/modules/setting'

const useSetting = useSettingStore()
//刷新
const updateRefsh = () => {
  useSetting.rersh = !useSetting.rersh
}
// 全屏
const fullScreen = () => {
  // DOM对象的一个属性，可以用来判断是否全屏
  const full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>

<style scoped></style>
