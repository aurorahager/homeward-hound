'use client'

import useSWR from 'swr'

import { api } from '@/lib/api'
import {
  ApiResponse,
  Dog,
  Error,
  SearchResponse,
  SRWResponse,
} from '@/types/api'

const fetcher = (url: string, data?: object): ApiResponse<string[]> =>
  api.get(url, data)

export const fetcherPost = (
  url: string,
  data: string[],
): Promise<ApiResponse<string[] | Dog[]>> => api.post(url, data)

export const useDogBreeds = (): SRWResponse<string[], 'breeds'> => {
  const { data, error, isLoading } = useSWR<string[], Error>(
    `/dogs/breeds`,
    fetcher,
  )

  return {
    breeds: data,
    isLoading,
    isError: error,
  }
}

export const useDogSearch = (
  query: string,
): SRWResponse<string[], 'dogIds'> => {
  const { data, error, isLoading } = useSWR<SearchResponse, Error>(
    `/dogs/search${query}`,
    fetcher,
  )

  return {
    dogIds: data,
    isLoading,
    isError: error,
  }
}

export const useDogsInfo = (
  ids: string[],
): SRWResponse<SearchResponse, 'dogs'> => {
  const { data, error, isLoading } = useSWR<SearchResponse, Error>(
    Array.isArray(ids) && ids?.length !== 0 ? ['/dogs', ids] : null,
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    dogs: data,
    isLoading,
    isError: error,
  }
}

export const useDogMatch = (dogs: string[]): SRWResponse<Match, 'data'> => {
  const { data, error, isLoading } = useSWR<{ match: string }, Error>(
    ['/dogs/match', dogs],
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}
