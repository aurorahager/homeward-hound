import { API_BASE_URL } from '@/utils/constants'
import { ApiError } from '@/utils/errors'

interface Credentials {
  name: string
  email: string
}

export const setUserLogin = async ({ name, email }: Credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
  console.log('wow', response)
  if (!response.ok) {
    throw new ApiError(`Login failed: ${response.statusText}`, response.status)
  }

  return response
}

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
