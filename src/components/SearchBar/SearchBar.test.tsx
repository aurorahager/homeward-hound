import { render, screen, fireEvent } from '@testing-library/react'
import { useForm } from 'react-hook-form'

import SearchBar from '@/components/SearchBar'
import { useDogContext } from '@/context/dogsContext'
import { createQueryString } from '@/utils/helpers'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
}))

jest.mock('@/context/dogsContext', () => ({
  useDogContext: jest.fn(),
}))

jest.mock('@/utils/helpers', () => ({
  createQueryString: jest.fn(() => 'query=string'),
}))

jest.mock('@/components/BreedFilter', () => () => (
  <div>BreedFilter Component</div>
))

jest.mock('@/components/AgeFilters', () => () => (
  <div>AgeFilters Component</div>
))

jest.mock('@/components/SortSelect', () => () => (
  <div>SortSelect Component</div>
))

jest.mock('@/components/SearchButton', () => () => (
  <button type="submit">Search</button>
))

jest.mock('@/components/MatchButton', () => () => (
  <div>MatchButton Component</div>
))

describe('SearchBar', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    ;(useDogContext as jest.Mock).mockReturnValue({ dispatch: mockDispatch })
    ;(useForm as jest.Mock).mockReturnValue({
      control: {},
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      formState: { errors: {} },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders BreedFilter component', () => {
    render(<SearchBar />)
    const breedFilter = screen.getByText('BreedFilter Component')
    expect(breedFilter).toBeInTheDocument()
  })

  it('renders AgeFilters component', () => {
    render(<SearchBar />)
    const ageFilters = screen.getByText('AgeFilters Component')
    expect(ageFilters).toBeInTheDocument()
  })

  it('renders SortSelect component', () => {
    render(<SearchBar />)
    const sortSelect = screen.getByText('SortSelect Component')
    expect(sortSelect).toBeInTheDocument()
  })

  it('renders SearchButton component', () => {
    render(<SearchBar />)
    const searchButton = screen.getByRole('button', { name: 'Search' })
    expect(searchButton).toBeInTheDocument()
  })

  it('renders MatchButton component', () => {
    render(<SearchBar />)
    const matchButton = screen.getByText('MatchButton Component')
    expect(matchButton).toBeInTheDocument()
  })

  it('dispatches SET_SEARCH_QUERY action on submit', () => {
    render(<SearchBar />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_SEARCH_QUERY',
      payload: 'query=string',
    })
  })

  it('calls createQueryString on submit', () => {
    render(<SearchBar />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(createQueryString).toHaveBeenCalled()
  })
})
