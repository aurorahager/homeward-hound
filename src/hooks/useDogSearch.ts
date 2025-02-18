'use client'

import useSWR from 'swr'

import { Error, HookResponse, SearchResponse } from '@/types/api'
import { fetcher } from '@/utils/fetchers'

/**
 * Fetches a list of dog ids.
 * @param {string} query - search query built of filter options
 * @returns {SWRResponse<SearchResponse>} - An object containing dog ids, pagination queries and potential errors.
 */
const useDogSearch = (
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

export default useDogSearch
