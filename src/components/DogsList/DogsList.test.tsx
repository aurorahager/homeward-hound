import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as dogsService from '@/services/dogsService'
import { useDogContext } from '@/context/dogsContext'
import DogsList from './DogsList'

jest.mock('@/context/dogsContext')
jest.mock('@/services/dogsService')

describe('DogsList', () => {
  const mockDispatch = jest.fn()
  const mockDog = {
    id: '1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    zip_code: '12345',
    img: 'https://example.com/dog.jpg',
    age: '3',
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { query: 'dogs/search?breed=Golden%20Retriever' },
      dispatch: mockDispatch,
    })
  })

  it('renders list of dogs', () => {
    ;(dogsService.useDogSearch as jest.Mock).mockReturnValue({
      data: { resultIds: [mockDog.id], next: null, prev: null },
      error: undefined,
    })
    ;(dogsService.useDogsInfo as jest.Mock).mockReturnValue({
      dogs: [mockDog],
      error: undefined,
    })

    render(<DogsList />)
    const dogName = screen.getByText('Buddy')

    expect(dogName).toBeInTheDocument()
  })

  it('renders no dogs when list is empty', () => {
    ;(dogsService.useDogSearch as jest.Mock).mockReturnValue({
      data: { resultIds: [], next: null, prev: null },
      error: undefined,
    })
    ;(dogsService.useDogsInfo as jest.Mock).mockReturnValue({
      dogs: [],
      error: undefined,
    })

    render(<DogsList />)
    const noDogs = screen.queryByRole('article')

    expect(noDogs).not.toBeInTheDocument()
  })

  it('dispatches SET_PAGES action', () => {
    ;(dogsService.useDogSearch as jest.Mock).mockReturnValue({
      data: {
        resultIds: [mockDog.id],
        next: '/dogs/search?page=2',
        prev: '/dogs/search?page=1',
      },
      error: undefined,
    })
    ;(dogsService.useDogsInfo as jest.Mock).mockReturnValue({
      dogs: [mockDog],
      error: undefined,
    })

    render(<DogsList />)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_PAGES',
      payload: { next: 'page=2', prev: 'page=1' },
    })
  })

  it('throws an error when infoError is present', () => {
    const errorMessage = 'Failed to fetch dog info'
    ;(dogsService.useDogSearch as jest.Mock).mockReturnValue({
      data: { resultIds: [mockDog.id] },
      error: undefined,
    })
    ;(dogsService.useDogsInfo as jest.Mock).mockReturnValue({
      dogs: undefined,
      error: { message: errorMessage },
    })

    expect(() => render(<DogsList />)).toThrow(errorMessage)
  })

  it('throws an error when searchError is present', () => {
    const errorMessage = 'Failed to fetch search results'
    ;(dogsService.useDogSearch as jest.Mock).mockReturnValue({
      data: undefined,
      error: { message: errorMessage },
    })
    ;(dogsService.useDogsInfo as jest.Mock).mockReturnValue({
      dogs: undefined,
      error: undefined,
    })

    expect(() => render(<DogsList />)).toThrow(errorMessage)
  })
})
