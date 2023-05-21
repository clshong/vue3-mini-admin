export interface LoginFrom {
  username: string
  password: string
}

interface DataType {
  tonken: string
}

export interface LoginRes {
  code: number
  data: DataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  tonken: string
}

interface user {
  checjUser: userInfo
}

export interface userRes {
  code: number
  data: user
}
