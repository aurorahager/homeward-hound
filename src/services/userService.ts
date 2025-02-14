import { api } from '@/lib/api'
import { LoginParams } from '@/types/api'

export const setUserLogin = (data: LoginParams): Promise<void> =>
  api.post(`/auth/login`, data)

export const setUserLogout = (data: LoginParams): Promise<void> =>
  api.post(`/auth/logout`, data)
