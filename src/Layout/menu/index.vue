<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        :index="item.path"
        v-if="!item.meta.hidden"
        @click="getRoute"
      >
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
        @click="getRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta?.icon"></component>
        </el-icon>
        <template #title>
          <span v-if="!item.meta.hidden">
            {{ item.children[0].meta.title }}
          </span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由且多个路由 -->
    <el-sub-menu v-if="item.children && item.children.length > 1">
      <template #title>
        <el-icon>
          <component :is="item.children[0].meta?.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
defineProps(['menuList'])

const router = useRouter()

const getRoute = (vc: any) => {
  router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped lang="scss"></style>
