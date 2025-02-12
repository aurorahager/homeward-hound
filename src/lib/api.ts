import Axios, { AxiosError } from 'axios'

import {
  ApiResponse,
  Dog,
  RequestConfig,
  ResponseAxiosError,
  SearchedDogs,
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

const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

const responseInterceptor = (
  response: ApiResponse<Dog[] | SearchedDogs | string[]>,
): ApiResponse<Dog[] | SearchedDogs | string[]> => {
  console.info(`[response] [${JSON.stringify(response)}]`)
  return response.data
}

const responseErrorInterceptor = (
  error: ResponseAxiosError,
): Promise<ResponseAxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`)
  // const message = error.response?.data?.message || error.message
  // TODO: show error notification
  if (error.response?.status === 401) {
    // TODO: redirect to login page
  }

  return Promise.reject(error)
}

api.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
