'use client'

import useSWR from 'swr'

import { Error, HookResponse, Match } from '@/types/api'
import { fetcherPost } from '@/utils/fetchers'

/**
 * Fetches a dog match given a list of IDs.
 * @param {string[] | null} ids - Array of dog IDs to fetch match for.
 * @returns {SWRResponse<Dog[]>} - An object containing matching dog's id and potential errors.
 */
const useDogMatch = (
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

export default useDogMatch
