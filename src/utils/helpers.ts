import { log } from 'console'
import qs from 'qs'

type Filters = {
  breeds: string[] | []
  ageMin: number | null
  ageMax: number | null
  sort: string
}

export const createQueryString = (filters: Filters) => {
  console.log('FILTERS', filters)
  const params = qs.stringify({ ...filters }, { arrayFormat: 'repeat' })
  return params
}