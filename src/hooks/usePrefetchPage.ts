import { SearchResponse } from '@/types/api'
import { preload } from 'swr'

import { fetcher } from '@/utils/fetchers'
import { fetcherPost } from '@/utils/fetchers'

/**
 * prefetches dog list and info from search query
 * /dogs/searach => /dogs
 * @param {string} url - search query for dogs
 * @returns {void} - No return value. stores prefetched data in cache
 */
const usePrefetchPage = async (url: string): Promise<void> => {
  const data = (await preload(`/dogs/search?${url}`, fetcher)) as SearchResponse
  await preload('/dogs', (dogsUrl = url) =>
    fetcherPost(dogsUrl, data.resultIds),
  )
}

export default usePrefetchPage
