import { renderHook } from '@testing-library/react'
import useSWR from 'swr'

import useDogBreeds from '../useDogBreeds'

import { Dog } from '@/types/api'

jest.mock('@/utils/api', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
  },
}))

jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(),
  preload: jest.fn(),
}))

const mockData: Dog[] = [
  {
    id: '1',
    name: 'Buddy',
    breed: 'Labrador',
    img: 'dog.jpeg',
    age: 2,
    zip_code: '12345',
  },
  {
    id: '2',
    name: 'Max',
    breed: 'Poodle',
    img: 'another-dog.jpeg',
    age: 6,
    zip_code: '54321',
  },
]

describe('useDogBreeds', () => {
  it('should return data and no error when successful', async () => {
    const mockData = ['labrador', 'poodle']
    ;(useSWR as jest.Mock).mockReturnValue({ data: mockData, error: undefined })

    const { result } = renderHook(() => useDogBreeds())

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeUndefined()
  })

  it('should return an error when request fails', () => {
    const mockError = new Error('Failed to fetch')
    ;(useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      error: mockError,
    })

    const { result } = renderHook(() => useDogBreeds())

    expect(result.current.data).toBeUndefined()
    expect(result.current.error).toEqual(mockError)
  })
})
