import { renderHook } from '@testing-library/react'
import useSWR, { preload } from 'swr'

import useDogMatch from '../useDogMatch'

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

describe('useDogMatch', () => {
  it('should return match data when successful', async () => {
    const mockData: Match = { match: '123' }
    ;(useSWR as jest.Mock).mockReturnValue({ data: mockData, error: undefined })

    const { result } = renderHook(() => useDogMatch(['1', '2']))

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeUndefined()
  })
})
