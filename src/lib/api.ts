import Axios, { AxiosError } from 'axios'

import Router from 'next/router'

import {
  ApiResponse,
  Dog,
  Match,
  RequestConfig,
  ResponseAxiosError,
} from '@/types/api'

import { API_BASE_URL } from '@/utils/constants'

export const api = Axios.create({
  baseURL: API_BASE_URL,
})

const requestInterceptor = (config: RequestConfig): RequestConfig => {
  const { headers } = config
  if (headers) {
    headers.Accept = 'application/json'
  }

  return {
    ...config,
    headers,
    withCredentials: true,
  }
}

const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error)

const responseInterceptor = (
  response: ApiResponse<Dog[] | string[] | Match>,
): ApiResponse<Dog[] | string[]> => response.data

const responseErrorInterceptor = (
  error: ResponseAxiosError,
): Promise<ResponseAxiosError> => {
  // TODO: show error notification
  if (error.response?.status === 401) {
    Router.push('/login')
  }

  return Promise.reject(error)
}

api.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
