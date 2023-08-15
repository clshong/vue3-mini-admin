//用户信息数据
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random
const dataList: any[] = [] // 用于接受生成数据的数组
for (let i = 0; i < 101; i++) {
  // 可自定义生成的个数
  const template = {
    date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
    name: Random.name(), // 生成姓名
    address: Random.province(), // 生成地址
  }
  dataList.push(template)
}

export default [
  // 用户登录接口
  {
    url: '/api/user/login', //请求地址
    method: 'post', //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      //没有用户返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确' } }
      }
      //如果有返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: { headers: { token: any } }) => {
      //获取请求头携带token
      const token = request.headers.token
      //查看用户信息是否包含有次token用户
      const checkUser = createUserList().find((item) => item.token === token)
      //没有返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      //如果有返回成功信息
      return { code: 200, data: { checkUser } }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/getInfo',
    method: 'post',
    response: ({ body }) => {
      const info = body
      const [index, size, total] = [
        info.current,
        info.pageSize,
        dataList.length,
      ]
      const len = total / size
      const totalPages =
        len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len
      const newDataList = dataList.slice(index * size, (index + 1) * size)

      return {
        code: '200',
        message: '获取成功',
        data: {
          current: index,
          pageSize: size,
          rows: newDataList,
          total: total,
          totalPages: totalPages,
        },
      }
    },
  },
]
