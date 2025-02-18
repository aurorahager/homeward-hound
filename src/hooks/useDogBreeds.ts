'use client'

import useSWR from 'swr'

import { Error, GetResponse, HookResponse } from '@/types/api'
import { fetcher } from '@/utils/fetchers'

/**
 * Fetches a list of dog breeds.
 * Uses SWR for caching and revalidation.
 * @returns {SWRResponse<string[]>} - An object containing dog breeds and potential errors.
 */
const useDogBreeds = (): GetResponse & HookResponse => {
  const { data, error } = useSWR<string[], Error>(`/dogs/breeds`, fetcher)

  return {
    data,
    error,
  }
}

export default useDogBreeds
