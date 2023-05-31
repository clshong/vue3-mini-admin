<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          :model="fromDate"
          :rules="rules"
          status-icon
          ref="loginForm"
          class="login-form"
        >
          <h1>vite-mini-admin</h1>
          <el-form-item prop="username">
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="fromDate.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="fromDate.password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              class="login-btn"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import type { ElNotification, FormRules } from 'element-plus'
import { hoursTip } from '@/utils/time'

const userStore = useUserStore()
const router = useRouter()

const loading = ref(false)

const fromDate = reactive({
  username: 'admin',
  password: '111111',
})

const validateUserName = (_rule: any, value: any, callback: any) => {
  if (/^\d{5,10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('账号长度需要5到10位'))
  }
}
const validatePassWrod = (_rule: any, value: any, callback: any) => {
  if (/^\d{6,15}$/.test(value)) {
    callback()
  } else {
    callback(new Error('密码长度需要6到15位'))
  }
}
const rules = reactive<FormRules>({
  username: [{ validator: validateUserName, trigger: 'change' }],
  password: [{ validator: validatePassWrod, trigger: 'change' }],
})

const loginForm = ref()

const login = async () => {
  loading.value = true
  try {
    await userStore.UseLoign(fromDate)
    router.push('/')
    loading.value = false
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: `hi,${hoursTip()}`,
      duration: 3000,
    })
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
      duration: 3000,
    })
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 20px 40px;
    border-radius: 10px;
    h1 {
      color: #fff;
      font-size: 40px;
      text-align: center;
      padding: 0 0 20px 0;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
