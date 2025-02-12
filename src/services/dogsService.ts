'use client'

import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { api } from '@/lib/api'
import { ApiResponse, Dog } from '@/types/api'

type ErrorResponse = {
  message: string
  statusCode: number
}

const fetcher = (url: string, data?: object) => api.get(url, data)

export const fetcherPost = (url: string, data: string[]) => api.post(url, data)

export const useDogBreeds = () => {
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

// TODO: add dog search

export const useDogSearch = () => {
  const { data } = useSWR<string[], ErrorResponse>('/dogs/search', fetcher)
  return { data }
}

export const useDogsUpdate = () => {
  const { trigger } = useSWRMutation<string[], ErrorResponse>(
    '/dogs/search',
    fetcher,
  )
  return { trigger }
}

export const useDogsInfo = (ids: string[]): ApiResponse<Dog[]> => {
  const { data } = useSWR<Dog[]>(
    Array.isArray(ids?.resultIds) && ids?.resultIds.length !== 0
      ? ['/dogs', ids.resultIds]
      : null,
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )
  console.log('DOG INFO', data)
  return {
    dogs: data,
  }
}
