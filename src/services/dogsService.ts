'use client'
import useSWR from 'swr'

import { API_BASE_URL } from '@/utils/constants'

const fetcher = (url: string) =>
  fetch(url, { credentials: 'include' }).then((res) => res.json())

export function useDogBreeds() {
  const { data, error, isLoading } = useSWR(
    `${API_BASE_URL}/dogs/breeds`,
    fetcher
  )

  return {
    breeds: data,
    isLoading,
    isError: error,
  }
}

// export async function addFavoriteDog(dogId: string) {
//   const res = await fetch('/api/dogs/favorites', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     credentials: 'include',
//     body: JSON.stringify({ dogId }),
//   });
//   return res.json();
// }
