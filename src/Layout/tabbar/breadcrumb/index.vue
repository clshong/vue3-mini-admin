<template>
  <el-icon style="margin-right: 10px" @click="ChnageIcon">
    <component :is="useSetting.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon> -->
      <span style="margin: 0 3px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useSettingStore } from '@/store/modules/setting'

const route = useRoute()

const useSetting = useSettingStore()

const ChnageIcon = () => {
  useSetting.fold = !useSetting.fold
}
</script>

<style scoped></style>
