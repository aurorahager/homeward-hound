import { render, screen } from '@testing-library/react'

import { APP_TITLE } from '@/utils/constants'

import LoginPage from './LoginPage'

jest.mock('@/components/LoginForm', () => () => <div>Mocked LoginForm</div>)

describe('LoginPage', () => {
  it('renders the app title with the PetsIcon', () => {
    render(<LoginPage />)

    expect(screen.getByRole('heading', { name: APP_TITLE })).toBeInTheDocument()

    const icon = screen.getByTestId('PetsIcon')
    expect(icon).toBeInTheDocument()
  })

  it('renders the LoginForm component', () => {
    render(<LoginPage />)

    expect(screen.getByText('Mocked LoginForm')).toBeInTheDocument()
  })
})
