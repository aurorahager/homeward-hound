import { setUserLogin, setUserLogout } from './userService'
import { api } from '@/utils/api'
import { LoginParams } from '@/types/api'

jest.mock('@/utils/api', () => ({
  api: {
    post: jest.fn(),
  },
}))

describe('Auth API', () => {
  describe('setUserLogin', () => {
    it('should make a POST request to /auth/login with correct data', async () => {
      const mockData: LoginParams = {
        email: 'test@example.com',
        name: 'Jen',
      }

      ;(api.post as jest.Mock).mockResolvedValueOnce({})

      await setUserLogin(mockData)

      expect(api.post).toHaveBeenCalledWith('/auth/login', mockData)
    })

    it('should throw an error if the request fails', async () => {
      const mockData: LoginParams = {
        email: 'test@example.com',
        name: 'Jen',
      }
      const mockError = new Error('Request failed')
      ;(api.post as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(setUserLogin(mockData)).rejects.toThrow('Request failed')
    })
  })

  describe('setUserLogout', () => {
    it('should make a POST request to /auth/logout', async () => {
      ;(api.post as jest.Mock).mockResolvedValueOnce({})
      await setUserLogout()

      expect(api.post).toHaveBeenCalledWith('/auth/logout')
    })

    it('should throw an error if the request fails', async () => {
      const mockError = new Error('Request failed')
      ;(api.post as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(setUserLogout()).rejects.toThrow('Request failed')
    })
  })
})
