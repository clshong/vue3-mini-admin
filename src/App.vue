<template>
  <div>测试</div>
</template>

<script setup lang="ts">
import { login, getInfo } from '@/api/user/index'
import { onMounted } from 'vue'

onMounted(async () => {
  // const res = await login({
  //   username: 'admin',
  //   password: '111111',
  // })
  const userInfo = await getInfo()
  // console.log(res)
  console.log(userInfo)
})
</script>

<style scoped></style>
