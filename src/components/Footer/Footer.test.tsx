import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'
import { FOOTER } from '@/utils/constants'

describe('Footer', () => {
  it('renders main text', () => {
    render(<Footer />)
    const mainText = screen.getByText(FOOTER.MAIN_TEXT)

    expect(mainText).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<Footer />)
    const subText = screen.getByText(FOOTER.SUBTEXT)

    expect(subText).toBeInTheDocument()
  })

  it('renders GitHub link with correct URL', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: 'GitHub' })

    expect(githubLink).toHaveAttribute('href', FOOTER.GITHUB_LINK)
  })

  it('opens GitHub link in a new tab', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: 'GitHub' })

    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  it('has rel="noopener noreferrer" on GitHub link', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: 'GitHub' })

    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders PetsIcon', () => {
    render(<Footer />)
    const icon = screen.getByTestId('PetsIcon')

    expect(icon).toBeInTheDocument()
  })
})
