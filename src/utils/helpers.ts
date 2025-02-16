import qs from 'qs'

type Filters = {
  breeds: string[] | []
  ageMin: number | null
  ageMax: number | null
  sort: string
}

export const createQueryString = (filter: Filters) => {
  const params = qs.stringify({ ...filter, size: '24' }, { arrayFormat: 'repeat' })
  return params
}