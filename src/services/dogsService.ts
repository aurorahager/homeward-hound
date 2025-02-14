'use client'

import useSWR from 'swr'


import { api } from '@/lib/api'
import {
  Dog,
  Match,
  Error,
  SearchResponse,
  HookResponse,
  GetResponse,
} from '@/types/api'

const fetcher = (url: string, data?: object): Promise<T> =>
  api.get<T>(url, data);

const fetcherPost = (
  url: string,
  data: string[],
): Promise<T> => api.post<T>(url, data)

export const useDogBreeds = (): GetResponse & HookResponse => {
  const { data, error, isLoading } = useSWR<string[], Error>(
    `/dogs/breeds`,
    fetcher,
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}

export const useDogSearch = (
  query?: string,
): { data?: SearchResponse } & HookResponse => {
  const { data, error, isLoading } = useSWR<SearchResponse, Error>(
    `/dogs/search${query}`,
    fetcher,
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}

export const useDogsInfo = (
  ids: string[],
): { dogs?: Dog[] } & HookResponse => {
  const { data, error, isLoading } = useSWR<Dog[], Error>(
    Array.isArray(ids) && ids?.length !== 0 ? ['/dogs', ids] : null,
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    dogs: data,
    isLoading,
    isError: error,
  }
}

export const useDogMatch = (dogs: string[]): { data?: Match } & HookResponse => {
  const { data, error, isLoading } = useSWR<Match, Error>(
    ['/dogs/match', dogs],
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}
