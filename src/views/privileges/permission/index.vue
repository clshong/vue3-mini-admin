<template>
  <m-table
    :data="tableData"
    :options="options"
    elementLoadingText="加载中..."
    elementLoadingBackground="rgba(0, 0, 0, 0.8)"
    :elementLoadingSpinner="svg"
    :elementLoadingSvg="svg"
    elementLoadingSvgViewBox="-10, -10, 50, 50"
  >
    <template #date="{ scope }">
      <el-icon><timer /></el-icon>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>

    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="handlerEdit(scope)">
        编辑
      </el-button>
      <el-button size="small" type="danger" @click="handlerDel(scope)">
        删除
      </el-button>
    </template>
  </m-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TableOpions } from '@/components/table/src/types'
interface TableData {
  date: string
  name: string
  address: string
}

// 表格数据
const tableData = ref<TableData[]>([])

setTimeout(() => {
  tableData.value = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 190, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
}, 3000)

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

// 表格配置
const options: TableOpions[] = [
  {
    lable: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
  },
  {
    lable: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name',
  },
  {
    lable: '地址',
    prop: 'address',
    align: 'center',
  },
  {
    lable: '操作',
    align: 'center',
    action: true,
  },
]

const handlerEdit = (val: any) => {
  console.log(val)
}

const handlerDel = (val: any) => {
  console.log(val)
}
</script>

<style scoped></style>
