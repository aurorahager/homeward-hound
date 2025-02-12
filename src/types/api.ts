import {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios'

// TODO: add types for request and response data

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
export interface SearchedDogs {
  resultIds: string[]
  total: number
  next?: string
  prev?: string
}

export interface ErrorResponseData {
  message: string
  statusCode: number
}

export interface RequestConfig extends AxiosRequestConfig {
  headers?: AxiosRequestHeaders
  params?: Record<string, string | number | boolean>
}

export interface ResponseAxiosError<T = ErrorResponseData>
  extends AxiosError<T> {
  response?: {
    data: T
    status: number
    statusText: string
    headers: Record<string, string>
    config: unknown
    request?: unknown
  }
}

type Response<T> =
  | { resultIds: T[]; total: number; next?: string; prev?: string }
  | T[]

export interface ApiResponse<T> extends AxiosResponse<Response<T>> {}
