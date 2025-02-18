import { preload } from 'swr'

import usePrefetchPage from '../usePrefetchPage'

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

describe('usePrefetchPage', () => {
  it('should preload data for search and dogs', async () => {
    const mockSearchData: SearchResponse = {
      resultIds: ['1', '2'],
      total: 2,
    }

    ;(preload as jest.Mock)
      .mockResolvedValueOnce(mockSearchData)
      .mockResolvedValueOnce(mockData)

    await usePrefetchPage('breed=labrador')

    expect(preload).toHaveBeenCalledWith(
      '/dogs/search?breed=labrador',
      expect.any(Function),
    )
    expect(preload).toHaveBeenCalledWith('/dogs', expect.any(Function))
  })
})
