import {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios'

export interface LoginParams {
  name: string
  email: string
}
export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}
export interface Match {
  match: string
}
export interface SearchResponse {
  resultIds: string[]
  total: number
  next?: string
  prev?: string
}

export interface Error {
  message: string
  status: number
}

export type SWRData<T, K extends string> = {
  [key in K]: T
}

export interface SWRResponse<T, K extends string> extends SWRData<T, K> {
  isLoading: boolean
  isError: Error | null
}

export interface RequestConfig extends AxiosRequestConfig {
  headers?: AxiosRequestHeaders
  params?: Record<string, string | number | boolean>
}

export interface ResponseAxiosError<T = Error> extends AxiosError<T> {
  response?: {
    data: T
    status: number
    statusText: string
    headers: Record<string, string>
    config: unknown
    request?: unknown
  }
}

type Response<T> = SearchResponse | T[] | Match

export interface ApiResponse<T> extends AxiosResponse<Response<T>> {}
