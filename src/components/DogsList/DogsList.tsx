'use client'

import { Container } from '@mui/material'

import { useDogSearch, useDogsInfo } from '@/services/dogsService'
import { useDogContext } from '@/context/dogsContext'

import DogCard from '../DogCard'
import { useEffect } from 'react'

import { ListContainer } from './styles'

export default function DogsList() {
  const { state, dispatch } = useDogContext()
  const { data, isLoading: isSearchLoading } = useDogSearch(state.query)
  const { dogs, isLoading: isInfoLoading } = useDogsInfo(data?.resultIds ?? [])

  useEffect(() => {
    dispatch({ type: 'SET_PAGES', payload: { prev: data?.prev?.slice(13) ?? '', next: data?.next?.slice(13) ?? '' } })
  }, [data])

  const isLoadingState = dogs?.length === 0 || isSearchLoading || isInfoLoading

  return (
    <ListContainer>
      {
        dogs?.map((dog) => <DogCard key={dog.id} dog={dog} isLoading={isLoadingState} />)}
    </ListContainer>
  )
}
