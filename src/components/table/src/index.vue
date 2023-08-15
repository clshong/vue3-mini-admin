<template>
  <el-table
    v-bind="$attrs"
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="rowClick"
  >
    <template v-for="item in filterTableOptions" :key="item">
      <el-table-column
        :prop="item.prop"
        :label="item.lable"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <!-- 可编辑行 -->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 不可编辑行 -->
          <template v-else>
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex; align-items: center">
                <el-input
                  size="small"
                  v-model="scope.row[item.prop]"
                ></el-input>
                <!-- 自定义编辑时显示 -->
                <div style="display: flex" @click.stop="handlerEditCell()">
                  <slot
                    name="editCell"
                    :scope="scope"
                    v-if="$slots.editCell"
                  ></slot>
                  <div class="icons" v-else>
                    <el-icon class="check" @click="handlerCheck(scope)">
                      <Check />
                    </el-icon>
                    <el-icon class="close" @click="handlerClose(scope)">
                      <Close />
                    </el-icon>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope" />
              <slot v-else>{{ scope.row[item.prop] }}</slot>
              <el-icon
                class="edit"
                v-if="item.editTable"
                @click.stop="handlerEdit(scope)"
              >
                <component :is="editIcon"></component>
              </el-icon>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>

    <el-table-column
      :label="actionTableOptions!.lable"
      :align="actionTableOptions!.align"
      :width="actionTableOptions!.width"
    >
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit" :scope="scope"></slot>
        <slot name="action" v-else :scope="scope" />
      </template>
    </el-table-column>
  </el-table>

  <div
    v-if="pagination && !isLoading"
    class="pagination"
    :style="{ justifyContent }"
  >
    <el-pagination
      :currentPage="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch } from 'vue'
import type { TableOpions } from './types'
import cloneDeep from 'lodash/cloneDeep'

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
  // 加载svg配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 可编辑单元格图标
  editIcon: {
    type: String,
    default: 'Edit',
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: '',
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 显示分页数据多少条的选项
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40] as number[],
  },
  // 数据总条数
  total: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

// 分发事件
const emits = defineEmits([
  'comfirm',
  'cancel',
  'update:editRowIndex',
  'size-change',
  'current-change',
])

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

// 表格分页的排列方式
let justifyContent = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'right') return 'flex-end'
  else return 'center'
})

// 当前点击的单元格
const currentEdit = ref<string>('')

// 拷贝表格数据
// eslint-disable-next-line vue/no-setup-props-destructure
const TableData = ref<any[]>(cloneDeep(props.data))

// 拷贝按钮标识符
// eslint-disable-next-line vue/no-setup-props-destructure
const cloneEditRowIndex = ref<string>(props.editRowIndex)

watch(
  () => props.data,
  (val: any[]) => {
    TableData.value = cloneDeep(val)
    TableData.value.map((item) => {
      item.rowEdit = false
    })
  },
  { deep: true },
)

// 父组件传递的标识
watch(
  () => props.editRowIndex,
  (val) => {
    if (val) cloneEditRowIndex.value = val
  },
)

onMounted(() => {
  TableData.value.map((item) => {
    item.rowEdit = false
  })
})

const rowClick = (row: any, cloumn: any) => {
  // 是否是操作项内容
  if (cloumn.label === actionTableOptions.value!.lable) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit
      // 重置其他数据的isEditRow
      TableData.value.map((item) => {
        if (item !== row) item.rowEdit = false
      })
      // 重置按钮标识
      if (!row.rowEdit) emits('update:editRowIndex', '')
    }
  }
}

const handlerEdit = (scope: any) => {
  currentEdit.value = scope.$index + scope.column.id
}

const handlerCheck = (scope: any) => {
  emits('comfirm', scope)
}
const handlerClose = (scope: any) => {
  emits('cancel', scope)
}

const handlerEditCell = () => {
  currentEdit.value = ''
}

// 分页的每一页数据变化
let handleSizeChange = (val: number) => {
  emits('size-change', val)
  // console.log(val)
}
// 分页页数改变
let handleCurrentChange = (val: number) => {
  emits('current-change', val)
  // console.log(val)
}
</script>

<style scoped lang="scss">
.edit {
  position: relative;
  top: 2px;
  left: 4px;
  cursor: pointer;
}
.icons {
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
}
.check {
  color: #f00;
  margin-right: 2px;
}
.close {
  color: #008000;
}
.pagination {
  margin-top: 16px;
  display: flex;
}
</style>
