export interface TableOpions {
  // 表头
  lable: string
  // 字段名称
  prop?: string
  // 列宽度
  width?: string | number
  // 对齐方式
  align?: 'left' | 'center' | 'right'
  // 自定义列模板
  slot?: string
  // 是否代表操作项
  action?: boolean
}
