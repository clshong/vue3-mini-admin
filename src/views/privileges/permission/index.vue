<template>
  <m-table
    :data="tableData"
    :options="options"
    isEditRow
    v-model:editRowIndex="editRowInde"
    pagination
    :total="total"
    :currentPage="current"
    :pageSize="pageSize"
    paginationAlign="right"
    elementLoadingText="加载中..."
    elementLoadingBackground="rgba(0, 0, 0, 0.8)"
    :elementLoadingSpinner="svg"
    :elementLoadingSvg="svg"
    elementLoadingSvgViewBox="-10, -10, 50, 50"
    @comfirm="comfirm"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
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

    <template #editRow="{ scope }">
      <el-button size="small" type="primary" @click="handlerEdit(scope)">
        确认
      </el-button>
      <el-button size="small" type="danger" @click="handlerDel(scope)">
        取消
      </el-button>
    </template>

    <template #editCell="{ scope }">
      <el-button size="small" type="primary">确认</el-button>
      <el-button size="small">取消</el-button>
    </template>
  </m-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TableOpions } from '@/components/table/src/types'
import request from '@/utils/request'

interface TableData {
  date: string
  name: string
  address: string
}

// 表格数据
const tableData = ref<TableData[]>([])

const editRowInde = ref<string>('')

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
    editTable: true,
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
    editTable: true,
  },
  {
    lable: '操作',
    prop: '',
    align: 'center',
    action: true,
  },
]

const handlerEdit = (val: any) => {
  editRowInde.value = 'edit'
}

const handlerDel = (val: any) => {
  console.log(val)
}

const comfirm = (scope: any) => {
  console.log(scope)
}
let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)

let handleSizeChange = (val: number) => {
  pageSize.value = val
  initData()
}
let handleCurrentChange = (val: number) => {
  current.value = val
  initData()
}
const initData = () => {
  request
    .post('/user/getInfo', {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res) => {
      console.log(res)
      tableData.value = res.data.rows
      total.value = res.data.total
    })
}

onMounted(() => {
  initData()
})
</script>

<style scoped></style>
