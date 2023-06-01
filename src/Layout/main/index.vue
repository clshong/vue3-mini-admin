<template>
  <div class="mains">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useSettingStore } from '@/store/modules/setting'

const useSetting = useSettingStore()

const flag = ref(true)
watch(
  () => useSetting.rersh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
/* .mains {
  margin: 0 20px;
  height: 100%;
  background: red;
} */
</style>
