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

export interface GetResponse {
  data?: string[]
}

export interface HookResponse {
  error: Error | undefined
}

export type ApiResponse = string[] | Dog[] | Match | SearchResponse
