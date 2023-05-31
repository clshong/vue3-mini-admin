<template>
  <el-icon style="margin-right: 10px" @click="ChnageIcon">
    <component :is="useSetting.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/modules/setting'

const useSetting = useSettingStore()

const ChnageIcon = () => {
  useSetting.fold = !useSetting.fold
}
</script>

<style scoped></style>
