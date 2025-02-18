'use client'

import useSWR from 'swr'

import { Dog, Error, HookResponse } from '@/types/api'
import { fetcherPost } from '@/utils/fetchers'

/**
 * Fetches dog info by their IDs.
 * @param {string[] | null} ids - Array of dog IDs to fetch info for.
 * @returns {SWRResponse<Dog[]>} - An object containing dog details and potential errors.
 */
const useDogsInfo = (ids: string[] | null): { dogs?: Dog[] } & HookResponse => {
  const { data, error } = useSWR<Dog[], Error>(
    ['/dogs', ids],
    ([url, dogIds]: [string, string[]]) => fetcherPost(url, dogIds),
  )

  return {
    dogs: data,
    error,
  }
}

export default useDogsInfo
