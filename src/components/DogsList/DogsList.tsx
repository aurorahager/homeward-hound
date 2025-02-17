'use client'


import { useDogSearch, useDogsInfo } from '@/services/dogsService'
import { useDogContext } from '@/context/dogsContext'

import DogCard from '../DogCard'
import { useEffect } from 'react'

import { ListContainer } from './styles'

export default function DogsList(): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { data, isError: isSearchError } = useDogSearch(state.query)
  const { dogs, isError: isInfoError } = useDogsInfo(data?.resultIds ?? [])

  useEffect(() => {
    dispatch({ type: 'SET_PAGES', payload: { prev: data?.prev?.slice(13) ?? '', next: data?.next?.slice(13) ?? '' } })
  }, [data])

  if (isInfoError || isSearchError) {
    throw Error
  }

  return (
    <ListContainer>
      {
        dogs?.map((dog) => <DogCard key={dog.id} dog={dog} />)}
    </ListContainer>
  )
}
