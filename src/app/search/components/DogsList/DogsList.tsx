'use client'

import { useDogSearch, useDogsInfo } from '@/services/dogsService'

import DogCard from '../DogCard'

export default function DogsList() {
  const { data } = useDogSearch()
  const { dogs } = useDogsInfo(data)
  console.log('DOGGS', data, dogs)
  return <div>{dogs?.map((dog) => <DogCard key={dog.id} dog={dog} />)}</div>
}
