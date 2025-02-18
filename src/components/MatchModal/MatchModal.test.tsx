import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MatchModal from '@/components/MatchModal'
import { useDogContext } from '@/context/dogsContext'
import useDogMatch from '@/hooks/useDogMatch'
import useDogsInfo from '@/hooks/useDogsInfo'
import { IMG_PLACEHOLDER, MODAL_MESSAGES } from '@/utils/constants'

jest.mock('@/context/dogsContext', () => ({
  useDogContext: jest.fn(),
}))

jest.mock('@/hooks/useDogMatch', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('@/hooks/useDogsInfo', () => ({
  __esModule: true,
  default: jest.fn(),
}))

describe('MatchModal', () => {
  const setIsModalOpen = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: ['1', '2'] },
    })
  })

  it('renders the modal when isModalOpen is true', () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({ data: null, error: null })
    ;(useDogsInfo as jest.Mock).mockReturnValue({ dogs: [], error: null })

    render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)
    const modal = screen.getByRole('dialog')

    expect(modal).toBeInTheDocument()
  })

  it('renders the modal heading', () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({ data: null, error: null })
    ;(useDogsInfo as jest.Mock).mockReturnValue({ dogs: [], error: null })

    render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)
    const heading = screen.getByRole('heading', {
      name: MODAL_MESSAGES.HEADING,
    })

    expect(heading).toBeInTheDocument()
  })

  it('does not render when isModalOpen is false', () => {
    render(<MatchModal isModalOpen={false} setIsModalOpen={setIsModalOpen} />)
    const modal = screen.queryByRole('dialog')

    expect(modal).not.toBeInTheDocument()
  })

  it('displays match text when data is available', () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({
      data: { match: '123' },
      error: null,
    })
    ;(useDogsInfo as jest.Mock).mockReturnValue({
      dogs: [
        {
          name: 'Buddy',
          breed: 'Labrador',
          zip_code: '12345',
          age: '2',
          img: 'https://dog-image-url',
        },
      ],
      error: null,
    })

    render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)
    const text = screen.getByText(MODAL_MESSAGES.TEXT('Buddy', 2, 'Labrador'))

    expect(text).toBeInTheDocument()
  })

  it('uses placeholder image if no image is available', () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({
      data: { match: '123' },
      error: null,
    })
    ;(useDogsInfo as jest.Mock).mockReturnValue({
      dogs: [
        {
          name: 'Buddy',
          breed: 'Labrador',
          zip_code: '12345',
          age: '2',
          img: null,
        },
      ],
      error: null,
    })

    render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)
    const image = screen.getByAltText('Buddy the Labrador')

    expect(image).toHaveAttribute('src', IMG_PLACEHOLDER)
  })

  it('closes modal when "Close" button is clicked', async () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({ data: null, error: null })
    ;(useDogsInfo as jest.Mock).mockReturnValue({ dogs: [], error: null })

    render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)
    const closeButton = screen.getByRole('button', { name: /Close/i })
    await userEvent.click(closeButton)

    expect(setIsModalOpen).toHaveBeenCalledWith(false)
  })

  it('throws an error if matchError is present', () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({
      data: null,
      error: { message: 'Match error occurred' },
    })

    const renderModal = () =>
      render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)

    expect(renderModal).toThrow('Match error occurred')
  })

  it('throws an error if infoError is present', () => {
    ;(useDogMatch as jest.Mock).mockReturnValue({
      data: { match: '123' },
      error: null,
    })
    ;(useDogsInfo as jest.Mock).mockReturnValue({
      dogs: [],
      error: { message: 'Info error occurred' },
    })

    const renderModal = () =>
      render(<MatchModal isModalOpen={true} setIsModalOpen={setIsModalOpen} />)

    expect(renderModal).toThrow('Info error occurred')
  })
})
