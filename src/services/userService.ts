import { api } from '@/lib/api'
import { LoginInput } from '@/types/api'
import { API_BASE_URL } from '@/utils/constants'
import { ApiError } from '@/utils/errors'

export const setUserLogin = (data: LoginInput): Promise<> =>
  api.post(`/auth/login`, data)

export const setUserLogout = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  console.log('wow', response)
  if (!response.ok) {
    throw new ApiError(`Login failed: ${response.statusText}`, response.status)
  }

  return response
}
