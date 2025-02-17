'use client'

import useSWR, { preload } from 'swr'

import { api } from '@/utils/api'

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
    `/dogs/search?${query}`,
    fetcher
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
    ['/dogs', ids],
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds,),
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
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds), {
    revalidateOnFocus: false,
  }
  )

  return {
    data,
    isLoading,
    isError: error,
  }
}

export const usePrefetchPage = (url: string): void => {
  preload(`/dogs/search?${url}`, fetcher).then((data) => preload('/dogs', (url) => fetcherPost(url, data.resultIds)))

}