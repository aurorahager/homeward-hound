'use client'

import { useDogBreeds, useDogsUpdate } from '@/services/dogsService'
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useState } from 'react'

export default function SearchBar() {
  const { breeds } = useDogBreeds()
  const { trigger } = useDogsUpdate()

  const [search, setSearch] = useState({
    breeds: [],
    ageMin: null,
    ageMax: null,
    zipcode: null,
  })

  const [sort, setSort] = useState('breed:desc')

  const handleSearchChange = (e: any, value) => {
    console.log('SEARCH', value)
    setSearch((prev) => ({ ...prev, breeds: value }))
  }

  const handleNumberChange = (e: any) => {
    const { name, value } = e.target
    setSearch((prev) => ({ ...prev, [name]: value }))
  }

  const handleSortChange = (e: any) => {
    setSort(e.target.value)
  }

  const handleSortClose = () => {
    console.log('SORT', sort)
  }

  const handleSearchSubmit = () => {
    const mockParams = { ageMin: 6 }
    // trigger(mockParams)
    console.log('SEARCH', search)
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        multiple
        options={breeds ?? []}
        renderInput={(params) => <TextField {...params} label="Breed" />}
        sx={{ width: 300 }}
        onChange={handleSearchChange}
      />
      <TextField
        label="Minimum Age"
        name="ageMin"
        type="number"
        onChange={handleNumberChange}
      />
      <TextField
        label="Maximum Age"
        name="ageMax"
        type="number"
        onChange={handleNumberChange}
      />
      <TextField label="Zipcode" name="zipcode" type="number" />
      <Button onClick={handleSearchSubmit}>Search</Button>
      <InputLabel id="sort-by">Sort By</InputLabel>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          label="Sort By"
          labelId="sort-by"
          value={sort}
          onChange={handleSortChange}
          onClose={handleSortClose}
        >
          <MenuItem value="breed:desc">Breed: A-Z</MenuItem>
          <MenuItem value="breed:asc">Breed: Z-A</MenuItem>
          <MenuItem value="age:des">Age: Youngest-Oldest</MenuItem>
          <MenuItem value="age:asc">Age: Oldest - Youngest</MenuItem>
          <MenuItem value="name:desc">Name: A-Z</MenuItem>
          <MenuItem value="name:asc">Name: Z-A</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
