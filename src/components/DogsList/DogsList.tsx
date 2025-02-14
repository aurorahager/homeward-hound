'use client'

import { Container } from '@mui/material'

import { useDogSearch, useDogsInfo } from '@/services/dogsService'

import DogCard from '../DogCard'

export default function DogsList() {
  const { data } = useDogSearch()
  const { dogs } = useDogsInfo(data)
  console.log('DOGGS', data, dogs)
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        flexWrap: 'wrap',
        mx: 1,
        marginY: 5,
      }}
    >
      {dogs?.map((dog) => <DogCard key={dog.id} dog={dog} />)}
    </Container>
  )
}
