import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { FieldErrors, useForm } from 'react-hook-form'

import { SearchFormValues } from '@/types/ui'

import AgeFilters from './AgeFilters'

describe('AgeFilters', () => {
  type TestComponentProps = {
    errors?: FieldErrors<SearchFormValues>
  }

  function TestComponent({
    errors = {},
  }: TestComponentProps): React.ReactElement {
    const { register } = useForm<SearchFormValues>()
    return <AgeFilters errors={errors} register={register} />
  }

  it('renders without crashing', () => {
    render(<TestComponent />)

    expect(screen.getByLabelText('Minimum Age')).toBeInTheDocument()
  })

  it('renders the Minimum Age field', () => {
    render(<TestComponent />)
    const minAgeField = screen.getByLabelText('Minimum Age')

    expect(minAgeField).toBeInTheDocument()
  })

  it('renders the Maximum Age field', () => {
    render(<TestComponent />)
    const maxAgeField = screen.getByLabelText('Maximum Age')

    expect(maxAgeField).toBeInTheDocument()
  })

  it('displays error when letters are typed in Minimum Age', async () => {
    render(<TestComponent />)
    const minAgeField = screen.getByLabelText('Minimum Age')
    await userEvent.type(minAgeField, 'abc')

    expect(minAgeField).toHaveValue(null)
  })

  it('displays error when letters are typed in Maximum Age', async () => {
    render(<TestComponent />)
    const maxAgeField = screen.getByLabelText('Maximum Age')
    await userEvent.type(maxAgeField, 'xyz')

    expect(maxAgeField).toHaveValue(null)
  })

  it('displays error when negative number is typed in Minimum Age', async () => {
    render(
      <TestComponent
        errors={{
          ageMin: { type: 'manual', message: 'Age cannot be negative' },
        }}
      />,
    )
    const minAgeField = screen.getByLabelText('Minimum Age')
    await userEvent.clear(minAgeField)
    await userEvent.type(minAgeField, '-5')
    const errorText = screen.getByText('Age cannot be negative')

    expect(errorText).toBeInTheDocument()
  })

  it('displays error when negative number is typed in Maximum Age', async () => {
    render(
      <TestComponent
        errors={{
          ageMax: { type: 'manual', message: 'Age cannot be negative' },
        }}
      />,
    )
    const maxAgeField = screen.getByLabelText('Maximum Age')
    await userEvent.clear(maxAgeField)
    await userEvent.type(maxAgeField, '-10')
    const errorText = screen.getByText('Age cannot be negative')

    expect(errorText).toBeInTheDocument()
  })

  it('displays error when Minimum Age is greater than Maximum Age', () => {
    render(
      <TestComponent
        errors={{
          ageMin: {
            type: 'manual',
            message: 'Minimum Age cannot be greater than Maximum Age',
          },
        }}
      />,
    )
    const errorText = screen.getByText(
      'Minimum Age cannot be greater than Maximum Age',
    )
    expect(errorText).toBeInTheDocument()
  })

  it('displays error when Maximum Age is less than Minimum Age', () => {
    render(
      <TestComponent
        errors={{
          ageMax: {
            type: 'manual',
            message: 'Maximum Age cannot be less than Minimum Age',
          },
        }}
      />,
    )
    const errorText = screen.getByText(
      'Maximum Age cannot be less than Minimum Age',
    )
    expect(errorText).toBeInTheDocument()
  })
})
