import { LoginParams } from '@/types/api'
import { api } from '@/utils/api'

export const setUserLogin = (data: LoginParams): Promise<void> =>
  api.post(`/auth/login`, data)

export const setUserLogout = (): Promise<void> => api.post(`/auth/logout`)
