'use client'

import MatchButton from '@/components/MatchButton'
import SearchButton from '@/components/SearchButton'
import SortButton from '@/components/SortButton'
import { useDogBreeds } from '@/services/dogsService'
import { Autocomplete, Divider, TextField } from '@mui/material'
import { useState } from 'react'
import {
  BarStack,
  FilterOptionsStack,
  NumberField,
  autoCompleteStyling,
} from './styles'

export default function SearchBar() {
  const { breeds } = useDogBreeds()

  const [search, setSearch] = useState({
    breeds: [],
    ageMin: null,
    ageMax: null,
    zipcode: null,
  })

  const [sort, setSort] = useState('breed:desc')

  const [isOpen, setIsOpen] = useState(false)

  const handleBreedChange = (e: any, value) => {
    console.log('SEARCH', value)
    setSearch((prev) => ({ ...prev, breeds: value }))
  }

  const handleNumberChange = (e: any) => {
    const { name, value } = e.target
    setSearch((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <BarStack useFlexGap divider={<Divider flexItem orientation="vertical" />}>
      <FilterOptionsStack useFlexGap gap={2}>
        <Autocomplete
          disablePortal
          multiple
          options={breeds ?? []}
          renderInput={(params) => <TextField {...params} label="Breed" />}
          sx={autoCompleteStyling}
          onChange={handleBreedChange}
        />
        <NumberField
          label="Minimum Age"
          name="ageMin"
          type="number"
          onChange={handleNumberChange}
        />
        <NumberField
          label="Maximum Age"
          name="ageMax"
          type="number"
          onChange={handleNumberChange}
        />
        <SortButton setSort={setSort} sort={sort} />
        <SearchButton />
      </FilterOptionsStack>
      <MatchButton />
      {/* <MatchModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </BarStack>
  )
}
