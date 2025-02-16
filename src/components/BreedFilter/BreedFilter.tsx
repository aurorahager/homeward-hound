import { Autocomplete, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

import { useDogBreeds } from '@/services/dogsService'

import {
  autoCompleteStyling,
} from './styles'
// TODO tix types
type Props = {
  control: Control<any>;
};

export default function BreedFilter({ control }): React.ReactElement {
  const { data: breedsList, isError, isLoading } = useDogBreeds()
  return (
    <Controller
      name="breeds"
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          sx={autoCompleteStyling}
          options={breedsList ?? []}
          onChange={(_, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField {...params} label="Breed" />
          )}
        />
      )}
    />
  )
}