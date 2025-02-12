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
  console.log('PLEASEEEE', config)
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
  console.error(`[request error] [${error.message} - ${error.status}]`)
  return Promise.reject(error)
}

const responseInterceptor = (
  response: ApiResponse<Dog[] | SearchedDogs | string[]>,
): ApiResponse<Dog[] | SearchedDogs | string[]> => {
  console.info(`[response] [${JSON.stringify(response.data)}]`)
  return response.data
}

const responseErrorInterceptor = (
  error: ResponseAxiosError,
): Promise<ResponseAxiosError> => {
  console.error(`[response error] [${error.message} - ${error.status}]`)
  // const message = error.response?.data?.message || error.message
  // TODO: show error notification
  if (error.response?.status === 401) {
    // TODO: redirect to login page
  }

  return Promise.reject(error)
}

api.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
