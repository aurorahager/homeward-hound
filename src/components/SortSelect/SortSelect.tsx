'use client'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { sortButtonStyling } from './styles'
import { UseFormRegister } from 'react-hook-form';

// TODO update prop types
type Props = {
  register: UseFormRegister<any>;
};

export default function SortSelect({ register }: Props): React.ReactElement {

  const sortOptions = [
    { value: 'breed:asc', label: 'Breed: A - Z' },
    { value: 'breed:desc', label: 'Breed: Z - A' },
    { value: 'age:asc', label: 'Age: Youngest - Oldest' },
    { value: 'age:desc', label: 'Age: Oldest - Youngest' },
    { value: 'name:asc', label: 'Name: A - Z' },
    { value: 'name:desc', label: 'Name: Z - A' }
  ]
  return (
    <FormControl sx={sortButtonStyling}>
      <InputLabel id="sort-by">Sort By</InputLabel>
      <Select
        labelId="sort-by"
        defaultValue="breed:desc"
        {...register('sort')}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}

      </Select>
    </FormControl>
  )
}
