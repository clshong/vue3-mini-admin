<template>
  <div class="layout-container">
    <div
      class="layout-slider"
      :class="{ fold: useSetting.fold ? true : false }"
    >
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="route.path"
          background-color="$base-menu-background"
          text-color="white"
          :collapse="useSetting.fold ? true : false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div
      class="layout-tabbar"
      :class="{ fold: useSetting.fold ? true : false }"
    >
      <TabBar />
    </div>
    <div
      class="layout-conter"
      :class="{ fold: useSetting.fold ? true : false }"
    >
      <!-- <Tabs /> -->
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Logo, Menu, TabBar, Main } from './index'
import { useUserStore } from '@/store/modules/user'
import { useRoute } from 'vue-router'
import { useSettingStore } from '@/store/modules/setting'

const userStore = useUserStore()
const route = useRoute()
const useSetting = useSettingStore()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(calc(100vh - $base-tabbar-height));
      .el-menu {
        color: white;
        border-right: 0;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout-tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.fold {
      left: $base-menu-min-width;
      width: calc(100vw - $base-menu-min-width);
    }
  }
  .layout-conter {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: auto;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    transition: all 0.3s;
    &.fold {
      left: $base-menu-min-width;
      width: calc(100vw - $base-menu-min-width);
    }
  }
}
.el-popper.is-pure {
  background: $base-menu-background;
  margin-left: -20px;
}
</style>
