import axios from 'axios'

//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import { ElMessage } from 'element-plus/es/components/index.mjs'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 3000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    let message = ''
    const status = err.res.status
    switch (status) {
      case '401':
        message = 'TOken过期'
        break
      case '403':
        message = '无权访问'
        break
      case '404':
        message = '请求地址错误'
        break
      case '500':
        message = '服务器异常'
        break
      default:
        message = '网络出现问题'
    }
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(err)
  },
)

export default request
