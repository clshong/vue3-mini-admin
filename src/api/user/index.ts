import request from '@/utils/request'
import { LoginFrom, LoginRes, userRes } from './type'

enum Api {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const login = (data: LoginFrom) =>
  request.post<any, LoginRes>(Api.LOGIN_URL, data)

export const getInfo = () => request.get<any, userRes>(Api.USERINFO_URL)
