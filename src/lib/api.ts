import Axios, {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios'

import Router from 'next/router'

import { API_BASE_URL } from '@/utils/constants'

export const api = Axios.create({
  baseURL: API_BASE_URL,
})

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
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
  response: AxiosResponse
): AxiosResponse => response.data

const responseErrorInterceptor = (
  error: AxiosError,
): Promise<AxiosError> => {
  // TODO: show error notification
  if (error.response?.status === 401) {
    Router.push('/login')
  }

  return Promise.reject(error)
}

api.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
