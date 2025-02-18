'use client'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'

import { SearchFormValues } from '@/types/ui'
import { SORT_OPTIONS } from '@/utils/constants'

import { sortButtonStyling } from './styles'

type Props = {
  register: UseFormRegister<SearchFormValues>
}

export default function SortSelect({ register }: Props): React.ReactElement {
  return (
    <FormControl sx={sortButtonStyling}>
      <InputLabel id="sort-by">Sort By</InputLabel>
      <Select defaultValue="breed:desc" labelId="sort-by" {...register('sort')}>
        {SORT_OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
