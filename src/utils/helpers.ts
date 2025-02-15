import qs from 'qs'

type Filters = {
  breeds: string[] | []
  ageMin: number | null
  ageMax: number | null
}

export const createQueryString = (filter: Filters, sort: string) => {
  const params = qs.stringify({ ...filter, size: '24' }, { arrayFormat: 'repeat' })
  return `/dogs/search?${params}&sort=${sort}`
}