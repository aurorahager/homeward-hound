import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useForm, FormProvider } from 'react-hook-form'

import { SearchFormValues } from '@/types/ui'

import SortSelect from './SortSelect'

const MockComponent = () => {
  const methods = useForm<SearchFormValues>({
    defaultValues: {
      sort: 'breed:desc',
    },
  })

  return (
    <FormProvider {...methods}>
      <SortSelect register={methods.register} />
    </FormProvider>
  )
}

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
})

describe('SortSelect', () => {
  it('renders Sort by label', () => {
    render(<MockComponent />)
    const label = screen.getByLabelText('Sort By')

    expect(label).toBeInTheDocument()
  })

  it('shows all sort options when clicked', () => {
    render(<MockComponent />)
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    const options = screen.getAllByRole('option')

    expect(options.length).toBe(6)
  })

  it('selects Breed (A-Z) option', () => {
    render(<MockComponent />)
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    const option = screen.getByRole('option', { name: 'Breed: A - Z' })

    fireEvent.click(option)

    expect(option).toHaveAttribute('data-value', 'breed:asc')
  })

  it('selects Age (Youngest First) option', () => {
    render(<MockComponent />)
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)

    const option = screen.getByRole('option', {
      name: 'Age: Youngest - Oldest',
    })
    fireEvent.click(option)

    expect(option).toHaveAttribute('data-value', 'age:asc')
  })

  it('selects Age (Oldest First) option', () => {
    render(<MockComponent />)
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)

    const option = screen.getByRole('option', {
      name: 'Age: Oldest - Youngest',
    })
    fireEvent.click(option)

    expect(option).toHaveAttribute('data-value', 'age:desc')
  })
})
