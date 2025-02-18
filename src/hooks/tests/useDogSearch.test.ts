import { renderHook } from '@testing-library/react'
import useSWR from 'swr'

import useDogSearch from '../useDogSearch'

import { SearchResponse, Dog } from '@/types/api'

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

describe('useDogSearch', () => {
  it('should return search results when successful', async () => {
    const mockData: SearchResponse = {
      resultIds: ['1', '2'],
      total: 2,
    }
    ;(useSWR as jest.Mock).mockReturnValue({ data: mockData, error: undefined })

    const { result } = renderHook(() => useDogSearch('breed=labrador'))

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeUndefined()
  })
})
