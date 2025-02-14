'use client'

import MatchButton from '@/components/MatchButton'
import SearchButton from '@/components/SearchButton'
import SortButton from '@/components/SortButton'
import { useDogBreeds } from '@/services/dogsService'
import { Autocomplete, Divider, TextField } from '@mui/material'
import React, { useState } from 'react'
import {
  BarStack,
  FilterOptionsStack,
  NumberField,
  autoCompleteStyling,
} from './styles'

type StateTypes = {
  breeds: string[],
  ageMin: number | null,
  ageMax: number | null,
}
export default function SearchBar(): React.ReactElement {
  const { data: breedsList, isError, isLoading } = useDogBreeds()

  const [search, setSearch] = useState<StateTypes>({
    breeds: [],
    ageMin: null,
    ageMax: null,
  })

  const [sort, setSort] = useState('breed:desc')


  const handleBreedChange = (e: React.SyntheticEvent, value: string[]) => {
    console.log('SEARCH', value)
    setSearch((prev) => ({ ...prev, breeds: value }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSearch((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <BarStack useFlexGap divider={<Divider flexItem orientation="vertical" />}>
      <FilterOptionsStack useFlexGap gap={2}>
        <Autocomplete
          disablePortal
          multiple
          options={breedsList ?? []}
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
