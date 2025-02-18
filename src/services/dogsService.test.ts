import { renderHook } from '@testing-library/react'
import useSWR, { preload } from 'swr'

import {
  useDogBreeds,
  useDogSearch,
  useDogsInfo,
  useDogMatch,
  getPrefetchPage,
} from './dogsService'

import { SearchResponse, Dog, Match } from '@/types/api'

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

describe('useDogsInfo', () => {
  it('should return dog info when successful', async () => {
    ;(useSWR as jest.Mock).mockReturnValue({ data: mockData, error: undefined })

    const { result } = renderHook(() => useDogsInfo(['1', '2']))

    expect(result.current.dogs).toEqual(mockData)
    expect(result.current.error).toBeUndefined()
  })
})

describe('useDogMatch', () => {
  it('should return match data when successful', async () => {
    const mockData: Match = { match: '123' }
    ;(useSWR as jest.Mock).mockReturnValue({ data: mockData, error: undefined })

    const { result } = renderHook(() => useDogMatch(['1', '2']))

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeUndefined()
  })
})

describe('getPrefetchPage', () => {
  it('should preload data for search and dogs', async () => {
    const mockSearchData: SearchResponse = {
      resultIds: ['1', '2'],
      total: 2,
    }

    ;(preload as jest.Mock)
      .mockResolvedValueOnce(mockSearchData)
      .mockResolvedValueOnce(mockData)

    await getPrefetchPage('breed=labrador')

    expect(preload).toHaveBeenCalledWith(
      '/dogs/search?breed=labrador',
      expect.any(Function),
    )
    expect(preload).toHaveBeenCalledWith('/dogs', expect.any(Function))
  })
})
