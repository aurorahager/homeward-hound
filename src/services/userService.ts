import { api } from '@/lib/api'
import { LoginInput } from '@/types/api'

export const setUserLogin = (data: LoginInput): Promise<> =>
  api.post(`/auth/login`, data)

export const setUserLogout = (data: LoginInput): Promise<> =>
  api.post(`/auth/logout`, data)
