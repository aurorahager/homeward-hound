import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useDogContext } from '@/context/dogsContext'
import { setUserLogout } from '@/hooks/useAuth'

import Nav from './Nav'

jest.mock('@/context/dogsContext', () => ({
  useDogContext: jest.fn(),
}))

jest.mock('@/hooks/useAuth', () => ({
  setUserLogout: jest.fn(),
}))

describe('Nav', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDogContext as jest.Mock).mockReturnValue({ dispatch: mockDispatch })
  })

  it('renders the logo text', () => {
    render(<Nav />)
    const logoText = screen.getByText(/Homeward Hound/i)

    expect(logoText).toBeInTheDocument()
  })

  it('renders the PetsIcon', () => {
    render(<Nav />)
    const petsIcon = screen.getByTestId('PetsIcon')

    expect(petsIcon).toBeInTheDocument()
  })

  it('renders the Logout button', () => {
    render(<Nav />)
    const logoutButton = screen.getByRole('button', { name: /Logout/i })

    expect(logoutButton).toBeInTheDocument()
  })

  it('calls setUserLogout on Logout button click', async () => {
    render(<Nav />)
    const logoutButton = screen.getByRole('button', { name: /Logout/i })
    await userEvent.click(logoutButton)

    expect(setUserLogout).toHaveBeenCalled()
  })

  it('dispatches LOGOUT action on Logout button click', async () => {
    render(<Nav />)
    const logoutButton = screen.getByRole('button', { name: /Logout/i })
    await userEvent.click(logoutButton)

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'LOGOUT' })
  })
})
