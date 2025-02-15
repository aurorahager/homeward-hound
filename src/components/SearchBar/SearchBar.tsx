'use client'

import MatchButton from '@/components/MatchButton'
import SearchButton from '@/components/SearchButton'
import SortButton from '@/components/SortButton'
import { useDogBreeds } from '@/services/dogsService'
import { Autocomplete, Divider, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createQueryString } from '@/utils/helpers'
import {
  BarStack,
  FilterOptionsStack,
  NumberField,
  autoCompleteStyling,
} from './styles'
import { useDogContext } from '@/context/dogsContext'

type StateTypes = {
  breeds: string[],
  ageMin: number | null,
  ageMax: number | null,
}
export default function SearchBar(): React.ReactElement {
  const { data: breedsList, isError, isLoading } = useDogBreeds()
  const { dispatch } = useDogContext()

  const [search, setSearch] = useState<StateTypes>({
    breeds: [],
    ageMin: null,
    ageMax: null,
  })

  const [sort, setSort] = useState('breed:desc')


  const handleBreedChange = (e: React.SyntheticEvent, value: string[]): void => {
    setSearch((prev) => ({ ...prev, breeds: value }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setSearch((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (): void => {
    const stringQ = createQueryString(search, sort)
    dispatch({ type: 'SET_SEARCH_QUERY', payload: stringQ })
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
        <SearchButton handleSubmit={handleSubmit} />
      </FilterOptionsStack>
      <MatchButton />
    </BarStack>
  )
}
