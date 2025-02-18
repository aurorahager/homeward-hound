'use client'

import useSWR, { preload } from 'swr'

import {
  Dog,
  Error,
  GetResponse,
  HookResponse,
  Match,
  SearchResponse,
} from '@/types/api'
import { api } from '@/utils/api'

const fetcher = <T>(url: string, params?: string[]): Promise<T> =>
  api.get<T>(url, { params }).then((res): T => res.data)

const fetcherPost = <T>(url: string, data: string[]): Promise<T> =>
  api.post<T>(url, data).then((res) => res.data)

export const useDogBreeds = (): GetResponse & HookResponse => {
  const { data, error } = useSWR<string[], Error>(`/dogs/breeds`, fetcher)

  return {
    data,
    error,
  }
}

export const useDogSearch = (
  query?: string,
): { data?: SearchResponse } & HookResponse => {
  const { data, error } = useSWR<SearchResponse, Error>(
    `/dogs/search?${query}`,
    fetcher,
  )

  return {
    data,
    error,
  }
}

export const useDogsInfo = (
  ids: string[] | null,
): { dogs?: Dog[] } & HookResponse => {
  const { data, error } = useSWR<Dog[], Error>(
    ['/dogs', ids],
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    dogs: data,
    error,
  }
}

export const useDogMatch = (
  dogs: string[] | null,
): { data?: Match } & HookResponse => {
  const { data, error } = useSWR<Match, Error>(
    ['/dogs/match', dogs],
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
    {
      revalidateOnFocus: false,
    },
  )

  return {
    data,
    error,
  }
}

export const getPrefetchPage = async (url: string): Promise<void> => {
  const data = (await preload(`/dogs/search?${url}`, fetcher)) as SearchResponse
  await preload('/dogs', (dogsUrl = url) =>
    fetcherPost(dogsUrl, data.resultIds),
  )
}
