'use client'

import { useEffect } from 'react'

import { useDogContext } from '@/context/dogsContext'
import { useDogSearch, useDogsInfo } from '@/services/dogsService'

import DogCard from '../DogCard'

import { ListContainer } from './styles'

export default function DogsList(): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { data, error: searchError } = useDogSearch(state.query)
  const { dogs, error: infoError } = useDogsInfo(data?.resultIds ?? [])

  useEffect(() => {
    // Remove begining from query 'dogs/search?' as it is already set during API call
    const futureQueryStrings = {
      prev: data?.prev?.slice(13) ?? '',
      next: data?.next?.slice(13) ?? '',
    }

    dispatch({
      type: 'SET_PAGES',
      payload: futureQueryStrings,
    })
  }, [data, dispatch])

  if (infoError ) {
    throw new Error(infoError.message)
  }

   if (searchError) {
     throw new Error(searchError.message)
   }

  return (
    <ListContainer>
      {dogs?.map((dog) => <DogCard key={dog.id} dog={dog} />)}
    </ListContainer>
  )
}
