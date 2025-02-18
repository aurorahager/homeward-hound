import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'
import { LOGIN_TEXT } from '@/utils/constants'
import { useDogContext } from '@/context/dogsContext'
import { setUserLogin } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))
jest.mock('@/context/dogsContext', () => ({
  useDogContext: jest.fn(),
}))
jest.mock('@/hooks/useAuth', () => ({
  setUserLogin: jest.fn(),
}))

describe('LoginForm', () => {
  const mockDispatch = jest.fn()
  const mockPush = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDogContext as jest.Mock).mockReturnValue({ dispatch: mockDispatch })
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(setUserLogin as jest.Mock).mockResolvedValue({})
  })

  function renderLoginForm() {
    render(<LoginForm />)
  }

  it('renders heading text', () => {
    renderLoginForm()
    const heading = screen.getByRole('heading', {
      level: 3,
      name: LOGIN_TEXT.HEADING,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders subheading text', () => {
    renderLoginForm()
    const subheading = screen.getByRole('heading', {
      level: 6,
      name: LOGIN_TEXT.SUBHEADING,
    })

    expect(subheading).toBeInTheDocument()
  })

  it('renders form text', () => {
    renderLoginForm()
    const formText = screen.getByText(LOGIN_TEXT.FORM_TEXT)

    expect(formText).toBeInTheDocument()
  })

  it('renders name field', () => {
    renderLoginForm()
    const nameField = screen.getByLabelText(/Name/i)

    expect(nameField).toBeInTheDocument()
  })

  it('renders email field', () => {
    renderLoginForm()
    const emailField = screen.getByLabelText(/Email/i)

    expect(emailField).toBeInTheDocument()
  })

  it('prevents numeric key entry in the name field', () => {
    renderLoginForm()
    const nameField = screen.getByLabelText(/Name/i)
    const keyDownEvent = new KeyboardEvent('keydown', {
      key: '5',
      bubbles: true,
      cancelable: true,
    })
    const preventDefaultSpy = jest.spyOn(keyDownEvent, 'preventDefault')
    nameField.dispatchEvent(keyDownEvent)

    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('calls setUserLogin with correct data on valid submission', async () => {
    renderLoginForm()
    const nameField = screen.getByLabelText(/Name/i)
    const emailField = screen.getByLabelText(/Email/i)
    await userEvent.type(nameField, 'John Doe')
    await userEvent.type(emailField, 'john@example.com')
    const submitButton = screen.getByRole('button', { name: /Login/i })
    await userEvent.click(submitButton)

    waitFor(() => {
      expect(setUserLogin).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
      })
    })
  })

  it('dispatches LOGIN action on form submission', async () => {
    renderLoginForm()
    const nameField = screen.getByLabelText(/Name/i)
    const emailField = screen.getByLabelText(/Email/i)
    await userEvent.type(nameField, 'John Doe')
    await userEvent.type(emailField, 'john@example.com')
    const submitButton = screen.getByRole('button', { name: /Login/i })
    await userEvent.click(submitButton)

    waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'LOGIN' })
    })
  })

  it("navigates to '/search' on form submission", async () => {
    renderLoginForm()
    const nameField = screen.getByLabelText(/Name/i)
    const emailField = screen.getByLabelText(/Email/i)
    await userEvent.type(nameField, 'John Doe')
    await userEvent.type(emailField, 'john@example.com')
    const submitButton = screen.getByRole('button', { name: /Login/i })
    await userEvent.click(submitButton)

    waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/search')
    })
  })
})
