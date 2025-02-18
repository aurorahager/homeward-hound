'use client'

import { useEffect } from 'react'

import { useDogContext } from '@/context/dogsContext'
import useDogSearch from '@/hooks/useDogSearch'
import useDogsInfo from '@/hooks/useDogsInfo'

import DogCard from '../DogCard'

import { ListContainer } from './styles'

export default function DogsList(): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { data: dogList, error: searchError } = useDogSearch(state.query)

  const dogIds = dogList?.resultIds ?? []
  const { dogs, error: infoError } = useDogsInfo(
    dogIds.length > 0 ? dogIds : null,
  )

  useEffect(() => {
    // *Remove begining from query 'dogs/search?' as it is already set during API call
    const futureQueryStrings = {
      prev: dogList?.prev?.slice(13) ?? '',
      next: dogList?.next?.slice(13) ?? '',
    }

    dispatch({
      type: 'SET_PAGES',
      payload: futureQueryStrings,
    })
  }, [dogList?.prev, dogList?.next, dispatch])

  // * Error boundary will handle displaying the error page
  if (infoError) {
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
