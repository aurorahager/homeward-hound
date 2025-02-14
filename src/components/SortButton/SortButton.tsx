'use client'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { sortButtonStyling } from './styles'
// import { Dispatch, SetStateAction, JSX } from 'react'
import { SelectChangeEvent } from '@mui/material'

type props = {
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
}

export default function SortButton({ sort, setSort }: props): React.ReactElement {

  const handleSortChange = (e: SelectChangeEvent<string>): void => {
    setSort(e.target.value)
  }

  return (
    <FormControl sx={sortButtonStyling}>
      <InputLabel id="sort-by">Sort By</InputLabel>
      <Select
        label="Sort By"
        labelId="sort-by"
        value={sort}
        onChange={handleSortChange}
      >
        <MenuItem value="breed:desc">Breed: A-Z</MenuItem>
        <MenuItem value="breed:asc">Breed: Z-A</MenuItem>
        <MenuItem value="age:des">Age: Youngest-Oldest</MenuItem>
        <MenuItem value="age:asc">Age: Oldest - Youngest</MenuItem>
        <MenuItem value="name:desc">Name: A-Z</MenuItem>
        <MenuItem value="name:asc">Name: Z-A</MenuItem>
      </Select>
    </FormControl>
  )
}
