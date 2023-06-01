<template>
  <div class="tabs-box">
    <el-tag
      class="tabs"
      v-for="tag in route.matched"
      :key="tag.name"
      closable
      hit
      v-show="tag.meta.showTab"
    >
      {{ tag.meta.title }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped lang="scss">
.tabs-box {
  padding: 0 10px;
  width: 100%;
  height: 40px;
  border: 2px sliod skyblue !important;
  .tabs {
    margin: 10px 3px;
  }
}
</style>
