'use client'

import { api } from '@/utils/api'

export const fetcher = <T>(url: string, params?: string[]): Promise<T> =>
  api.get<T>(url, { params }).then((res): T => res.data)

// * Using fetcherPost because the API requires a POST request
// * even though we're technically fetching data
export const fetcherPost = <T>(url: string, data: string[]): Promise<T> =>
  api.post<T>(url, data).then((res) => res.data)
