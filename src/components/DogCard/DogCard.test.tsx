import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useDogContext } from '@/context/dogsContext'
import { Dog } from '@/types/api'

import DogCard from './DogCard'

jest.mock('@/context/dogsContext')

describe('DogCard', () => {
  const dog: Dog = {
    id: '1',
    img: 'https://example.com/dog.jpg',
    name: 'Buddy',
    breed: 'Golden Retriever',
    zip_code: '12345',
    age: 5,
  }

  const mockDispatch = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: [] },
      dispatch: mockDispatch,
    })
  })

  it('renders dog image', () => {
    render(<DogCard dog={dog} />)
    const image = screen.getByAltText('Buddy the Golden Retriever')

    expect(image).toBeInTheDocument()
  })

  it('renders placeholder image when img is undefined', () => {
    render(<DogCard dog={{ ...dog, img: undefined as unknown as string }} />)
    const placeholderImage = screen.getByAltText('Buddy the Golden Retriever')

    expect(placeholderImage).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
    )
  })

  it('renders dog name', () => {
    render(<DogCard dog={dog} />)
    const name = screen.getByText('Buddy')

    expect(name).toBeInTheDocument()
  })

  it('renders dog breed', () => {
    render(<DogCard dog={dog} />)
    const breed = screen.getByText('Golden Retriever')

    expect(breed).toBeInTheDocument()
  })

  it('renders dog age and location', () => {
    render(<DogCard dog={dog} />)
    const details = screen.getByText('Age: 5 Location: 12345')

    expect(details).toBeInTheDocument()
  })

  it('renders favorite icon', () => {
    render(<DogCard dog={dog} />)
    const favoriteIcon = screen.getByLabelText('Favorite')

    expect(favoriteIcon).toBeInTheDocument()
  })

  it('triggers dispatch when favorite icon is clicked', () => {
    render(<DogCard dog={dog} />)
    const favoriteIcon = screen.getByLabelText('Favorite')
    fireEvent.click(favoriteIcon)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_FAVORITE',
      payload: dog.id,
    })
  })

  it('shows orange favorite icon when dog is favorited', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: ['1'] },
      dispatch: mockDispatch,
    })
    const { container } = render(<DogCard dog={dog} />)
    expect(container).toMatchSnapshot()
  })

  it('shows white favorite icon when dog is not favorited', () => {
    render(<DogCard dog={dog} />)
    const heartIcon = screen.getByLabelText('Favorite').querySelector('svg')

    expect(heartIcon).toHaveStyle({ color: 'white' })
  })
})
