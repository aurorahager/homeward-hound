import { Autocomplete, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

import useDogBreeds from '@/hooks/useDogBreeds'
import { SearchFormValues } from '@/types/ui'

import { autoCompleteStyling } from './styles'

type BreedFilterProps = {
  control: Control<SearchFormValues>
}

export default function BreedFilter({
  control,
}: BreedFilterProps): React.ReactElement {
  const { data: breedsList, error } = useDogBreeds()

  if (error) {
    // * Error boundary will handle displaying the error page
    throw new Error(error.message)
  }

  return (
    <Controller
      control={control}
      name="breeds"
      render={({ field }) => (
        <Autocomplete
          multiple
          options={breedsList ?? []}
          renderInput={(params) => <TextField {...params} label="Breed" />}
          sx={autoCompleteStyling}
          onChange={(_, value) => field.onChange(value)}
        />
      )}
    />
  )
}
