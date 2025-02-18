import { Autocomplete, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

import { useDogBreeds } from '@/services/dogsService'
import { SearchFormValues } from '@/types/ui'

import { autoCompleteStyling } from './styles'

type Props = {
  control: Control<SearchFormValues>
}

export default function BreedFilter({ control }: Props): React.ReactElement {
  const { data: breedsList, error } = useDogBreeds()

  if (error) {
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
