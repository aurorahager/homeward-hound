'use client'

import useSWR from 'swr'

import { api } from '@/lib/api'

type ErrorResponse = {
  message: string
  statusCode: number
}

const fetcher = (url: string, data?: object) => api.get(url, data)

export function useDogBreeds() {
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

export function useDogSearch(params?: object) {
  const { data, error, isLoading } = useSWR<string[], ErrorResponse>(
    ['/dogs/search', params],
    ([url, queryParams]: [string, object?]) => fetcher(url, queryParams),
  )

  return {
    dogIds: data,
    isLoading,
    isError: error,
  }
}
// TODO: add dog details
// TODO: add dog match
