import qs from 'qs'

import { SearchFormValues } from '@/types/ui'

export const createQueryString = (filters: SearchFormValues): string => {
  const params = qs.stringify({ ...filters }, { arrayFormat: 'repeat' })
  return params
}

export const validateAgeOrder = (
  min: number | null,
  max: number | null,
  isMinField: boolean,
): boolean => {
  if (min !== null && max !== null) {
    return isMinField ? min <= max : max >= min
  }
  return true
}
