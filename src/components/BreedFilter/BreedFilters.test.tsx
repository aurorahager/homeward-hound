import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Control, useForm } from 'react-hook-form'

import useDogBreeds from '@/hooks/useDogBreeds'
import { SearchFormValues } from '@/types/ui'
import { Error as ApiError } from '@/types/api'

import BreedFilter from './BreedFilter'

jest.mock('@/hooks/useDogBreeds')

describe('BreedFilter', () => {
  type TestComponentProps = {
    control: Control<SearchFormValues>
  }

  function TestComponent({ control }: TestComponentProps): React.ReactElement {
    return <BreedFilter control={control} />
  }

  function Wrapper({
    breedsList,
    error,
  }: {
    breedsList: string[] | undefined
    error?: ApiError
  }) {
    const { control } = useForm<SearchFormValues>()
    return <TestComponent control={control} />
  }

  function setup(breedsList: string[] | undefined, error?: ApiError) {
    jest.mocked(useDogBreeds).mockReturnValue({ data: breedsList, error })
    render(<Wrapper breedsList={breedsList} error={error} />)
  }

  it('renders the Breed input field', () => {
    setup([])
    const input = screen.getByLabelText('Breed')
    expect(input).toBeInTheDocument()
  })

  it('throws an error when error is present', () => {
    expect(() => setup(undefined, { message: 'error', status: 500 })).toThrow(
      Error,
    )
  })

  it('displays Labrador as a breed option', async () => {
    const breeds = ['Labrador', 'Beagle', 'Poodle']
    setup(breeds)

    const input = screen.getByLabelText('Breed')
    await userEvent.click(input)

    const labradorOption = screen.getByText('Labrador')
    expect(labradorOption).toBeInTheDocument()
  })

  it('displays Beagle as a breed option', async () => {
    const breeds = ['Labrador', 'Beagle', 'Poodle']
    setup(breeds)

    const input = screen.getByLabelText('Breed')
    await userEvent.click(input)

    const beagleOption = screen.getByText('Beagle')
    expect(beagleOption).toBeInTheDocument()
  })

  it('displays Poodle as a breed option', async () => {
    const breeds = ['Labrador', 'Beagle', 'Poodle']
    setup(breeds)

    const input = screen.getByLabelText('Breed')
    await userEvent.click(input)

    const poodleOption = screen.getByText('Poodle')
    expect(poodleOption).toBeInTheDocument()
  })

  it('allows selecting Labrador', async () => {
    const breeds = ['Labrador', 'Beagle', 'Poodle']
    setup(breeds)

    const input = screen.getByLabelText('Breed')
    await userEvent.click(input)
    await userEvent.click(screen.getByText('Labrador'))

    await waitFor(() => {
      const selectedOption = screen.getByText('Labrador')
      expect(selectedOption).toBeInTheDocument()
    })
  })

  it('allows selecting Poodle', async () => {
    const breeds = ['Labrador', 'Beagle', 'Poodle']
    setup(breeds)

    const input = screen.getByLabelText('Breed')
    await userEvent.click(input)
    await userEvent.click(screen.getByText('Poodle'))

    await waitFor(() => {
      const selectedOption = screen.getByText('Poodle')
      expect(selectedOption).toBeInTheDocument()
    })
  })
})
