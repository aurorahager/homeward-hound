'use client'

import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { ApiResponse } from '@/types/api'

import { API_BASE_URL } from './constants'

export const api = Axios.create({
  baseURL: API_BASE_URL,
})

const requestInterceptor = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const { headers } = config
  headers.Accept = 'application/json'

  return {
    ...config,
    headers,
    withCredentials: true,
  }
}

const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error)

const responseInterceptor = (
  response: AxiosResponse<ApiResponse>,
): AxiosResponse<ApiResponse> => response

const responseErrorInterceptor = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error)

api.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
