<template>
  <el-table
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="item in filterTableOptions" :key="item">
      <el-table-column
        v-if="!item.slot"
        :prop="item.prop"
        :label="item.lable"
        :align="item.align"
        :width="item.width"
      />
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.lable"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <slot :name="item.slot" :scope="scope" />
        </template>
      </el-table-column>
    </template>

    <el-table-column
      :label="actionTableOptions!.lable"
      :align="actionTableOptions!.align"
      :width="actionTableOptions!.width"
    >
      <template #default="scope">
        <slot name="action" :scope="scope" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import type { TableOpions } from './types'

let props = defineProps({
  // 表格配置项
  options: {
    type: Array as PropType<TableOpions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String,
  },
  // 加载SVG
  elementLoadingSvg: {
    type: String,
  },
  elementLoadingSvgViewBox: {
    type: String,
  },
})

// 过滤操作选项之后的配置
const filterTableOptions = computed(() => {
  return props.options.filter((item) => {
    return !item.action
  })
})

// 找出操作项的配置
const actionTableOptions = computed(() => {
  return props.options.find((item) => {
    return item.action
  })
})

const isLoading = computed(() => {
  return !props.data.length || !props.data
})
</script>

<style scoped></style>
