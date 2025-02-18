import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MatchButton from '@/components/MatchButton'
import { useDogContext } from '@/context/dogsContext'

jest.mock('@/context/dogsContext', () => ({
  useDogContext: jest.fn(),
}))

jest.mock('@/components/MatchModal', () => ({
  __esModule: true,
  default: ({ isModalOpen }: { isModalOpen: boolean }) => (
    <div>{isModalOpen ? 'Modal is Open' : 'Modal is Closed'}</div>
  ),
}))

describe('MatchButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the Find a Match button', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: [] },
    })
    render(<MatchButton />)

    expect(
      screen.getByRole('button', { name: /Find a Match/i }),
    ).toBeInTheDocument()
  })

  it('disables the button when fewer than two favorites are present', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: ['1'] },
    })
    render(<MatchButton />)
    const button = screen.getByRole('button', { name: /Find a Match/i })

    expect(button).toBeDisabled()
  })

  it('enables the button when at least two favorites are present', () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: ['1', '2'] },
    })
    render(<MatchButton />)
    const button = screen.getByRole('button', { name: /Find a Match/i })

    expect(button).toBeEnabled()
  })

  it('opens the modal when the button is clicked', async () => {
    ;(useDogContext as jest.Mock).mockReturnValue({
      state: { favoriteIds: ['1', '2'] },
    })
    render(<MatchButton />)
    const button = screen.getByRole('button', { name: /Find a Match/i })
    await userEvent.click(button)

    expect(screen.getByText('Modal is Open')).toBeInTheDocument()
  })
})
