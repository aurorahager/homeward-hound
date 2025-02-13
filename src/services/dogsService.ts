'use client'

import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { api } from '@/lib/api'
import { ApiResponse, Dog } from '@/types/api'

type ErrorResponse = {
  message: string
  statusCode: number
}

type DogBreedsResponse = {
  breeds: string[] | undefined
  isLoading: boolean
  isError: ErrorResponse | undefined
}

const fetcher = (url: string, data?: object): ApiResponse<string[]> =>
  api.get(url, data)

export const fetcherPost = (
  url: string,
  data: string[],
): Promise<ApiResponse<string[] | Dog[]>> => api.post(url, data)

export const useDogBreeds = (): DogBreedsResponse => {
  const { data, error, isLoading } = useSWR<string[], ErrorResponse>(
    `/dogs/breeds`,
    fetcher,
  )

  return {
    breeds: data,
    isLoading,
    isError: error,
  }
}

export const useDogSearch = (): { data: string[] } => {
  const { data } = useSWR<string[], ErrorResponse>('/dogs/search', fetcher)
  return { data }
}

export const useDogsUpdate = (): { trigger: () => Promise<void> } => {
  const { trigger } = useSWRMutation<string[], ErrorResponse>(
    '/dogs/search',
    fetcher,
  )
  return { trigger }
}

type Ids = {
  resultIds: string[]
}

export const useDogsInfo = (ids: Ids): ApiResponse<Dog[]> => {
  const { data } = useSWR<Dog[]>(
    Array.isArray(ids?.resultIds) && ids?.resultIds.length !== 0
      ? ['/dogs', ids.resultIds]
      : null,
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    dogs: data,
  }
}

export const useDogMatch = (data: []): Promise<ApiResponse<Dog[]>> =>
  api.post(`/dogs/match`, data)

export const useDogMatchInfo = (id: string): ApiResponse<Dog[]> => {
  const { data } = useSWR<Dog[]>(
    ['/dogs', id],
    ([url, dogId]: [string, string[]]) => fetcherPost(url, dogId),
  )

  return {
    dog: data,
  }
}
