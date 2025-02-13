'use client'

import MatchModal from '@/components/MatchModal'
import { useFaveDogs } from '@/context/favDogsContext'
import {
  useDogBreeds,
  useDogMatch,
  useDogsUpdate,
} from '@/services/dogsService'
import { SearchOutlined } from '@mui/icons-material'
import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { useState } from 'react'

export default function SearchBar() {
  const { breeds } = useDogBreeds()
  const { trigger } = useDogsUpdate()
  const { faves, setFaves } = useFaveDogs()

  const [search, setSearch] = useState({
    breeds: [],
    ageMin: null,
    ageMax: null,
    zipcode: null,
  })

  const [sort, setSort] = useState('breed:desc')

  const [match, setMatch] = useState('')
  const [isOpen, setIsOpen] = useState(false)

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

  const handleSearchSubmit = () => {
    const mockParams = { ageMin: 6 }
    // trigger(mockParams)
    console.log('SEARCH', search)
  }

  const handleGenerateMatch = async () => {
    console.log('MATCH', faves)
    const matchId = await useDogMatch(faves)
    setMatch(matchId.match)
    setIsOpen(true)
  }

  return (
    <Stack
      useFlexGap
      direction="row"
      divider={<Divider flexItem orientation="vertical" />}
      py={2}
      sx={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'sticky',
        boxShadow: '1',
        position: 'sticky',
        backgroundColor: '#aad79e',
        top: '8vh',
        zIndex: 1100,
      }}
    >
      <Stack
        useFlexGap
        direction="row"
        gap={2}
        sx={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Autocomplete
          disablePortal
          multiple
          options={breeds ?? []}
          renderInput={(params) => <TextField {...params} label="Breed" />}
          sx={{ width: 350 }}
          onChange={handleSearchChange}
        />
        <TextField
          label="Minimum Age"
          name="ageMin"
          sx={{ width: 175 }}
          type="number"
          InputProps={{
            inputProps: {
              style: {
                appearance: 'textfield',
              },
            },
          }}
          onChange={handleNumberChange}
        />
        <TextField
          label="Maximum Age"
          name="ageMax"
          sx={{ width: 175 }}
          type="number"
          InputProps={{
            inputProps: {
              style: {
                appearance: 'textfield',
              },
            },
          }}
          onChange={handleNumberChange}
        />
        <FormControl sx={{ minWidth: 150 }}>
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
        <Button
          color="primary"
          sx={{ width: 220, height: 54, fontSize: '1.1rem', fontWeight: 500 }}
          variant="text"
          onClick={handleSearchSubmit}
        >
          Search
          <SearchOutlined fontSize="large" />
        </Button>
      </Stack>
      <Button
        color="secondary"
        disabled={!faves.length}
        sx={{ width: 220, height: 54, fontSize: '1.1rem', fontWeight: 500 }}
        variant="contained"
        onClick={handleGenerateMatch}
      >
        Generate Match
      </Button>
      <MatchModal dogId={match} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Stack>
  )
}
