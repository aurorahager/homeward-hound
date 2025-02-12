'use client'

import { useDogBreeds } from '@/services/dogsService'
import { Autocomplete, Button, TextField } from '@mui/material'
import { useState } from 'react'

export default function SearchBar() {
  const { breeds } = useDogBreeds()

  const [search, setSearch] = useState({
    breed: '',
    minAge: null,
    maxAge: null,
    zipcode: null,
  })

  const [sort, setSort] = useState({ value: '', order: '' })

  return (
    <div>
      <Autocomplete
        disablePortal
        options={breeds ?? []}
        renderInput={(params) => <TextField {...params} label="Breed" />}
        sx={{ width: 300 }}
      />
      <TextField label="Minimum Age" name="minAge" type="number" />
      <TextField label="Maximum Age" name="maxAge" type="number" />
      <TextField label="Zipcode" name="zipcode" type="number" />
      <Button>Search</Button>
    </div>
  )
}
