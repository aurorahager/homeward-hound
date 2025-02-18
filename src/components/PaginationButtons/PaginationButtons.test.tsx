import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useDogContext } from '@/context/dogsContext'
import usePrefetchPage from '@/hooks/usePrefetchPage'

import PaginationButtons from './PaginationButtons'

jest.mock('@/context/dogsContext', () => ({
  useDogContext: jest.fn(),
}))

jest.mock('@/hooks/usePrefetchPage', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined),
}))

describe('PaginationButtons', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders Previous button', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: {},
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const prevButton = screen.getByRole('button', { name: /Previous/i })

    expect(prevButton).toBeInTheDocument()
  })

  it('renders Next button', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: {},
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const nextButton = screen.getByRole('button', { name: /Next/i })

    expect(nextButton).toBeInTheDocument()
  })

  it('disables Previous button when no prevPage', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { prevPage: null },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const prevButton = screen.getByRole('button', { name: /Previous/i })

    expect(prevButton).toBeDisabled()
  })

  it('disables Next button when no nextPage', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { nextPage: null },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const nextButton = screen.getByRole('button', { name: /Next/i })

    expect(nextButton).toBeDisabled()
  })

  it('enables Previous button when prevPage is available', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { prevPage: 'prev-page-url' },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const prevButton = screen.getByRole('button', { name: /Previous/i })

    expect(prevButton).toBeEnabled()
  })

  it('enables Next button when nextPage is available', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { nextPage: 'next-page-url' },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const nextButton = screen.getByRole('button', { name: /Next/i })

    expect(nextButton).toBeEnabled()
  })

  it('dispatches SET_SEARCH_QUERY with prevPage on Previous button click', async () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { prevPage: 'prev-page-url' },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const prevButton = screen.getByRole('button', { name: /Previous/i })
    await userEvent.click(prevButton)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_SEARCH_QUERY',
      payload: 'prev-page-url',
    })
  })

  it('dispatches SET_SEARCH_QUERY with nextPage on Next button click', async () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { nextPage: 'next-page-url' },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const nextButton = screen.getByRole('button', { name: /Next/i })
    await userEvent.click(nextButton)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_SEARCH_QUERY',
      payload: 'next-page-url',
    })
  })

  it('calls usePrefetchPage on Next button hover', async () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { nextPage: 'next-page-url' },
      dispatch: mockDispatch,
    })
    render(<PaginationButtons />)
    const nextButton = screen.getByRole('button', { name: /Next/i })
    await userEvent.hover(nextButton)

    expect(usePrefetchPage).toHaveBeenCalledWith('next-page-url')
  })
})
