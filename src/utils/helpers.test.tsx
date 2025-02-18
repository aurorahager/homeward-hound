import { createQueryString, validateAgeOrder } from './helpers'
import { SearchFormValues } from '@/types/ui'

describe('Query Utils', () => {
  describe('createQueryString', () => {
    it('should create a query string from filters', () => {
      const filters: SearchFormValues = {
        breeds: ['husky', 'beagle'],
        ageMin: 2,
        ageMax: 5,
        sort: 'age:desc',
      }

      const result = createQueryString(filters)

      expect(result).toBe(
        'breeds=husky&breeds=beagle&ageMin=2&ageMax=5&sort=age%3Adesc',
      )
    })

    it('should handle empty filters', () => {
      const filters: SearchFormValues = {
        breeds: [],
        ageMin: null,
        ageMax: null,
        sort: '',
      }

      const result = createQueryString(filters)

      expect(result).toBe('ageMin=&ageMax=&sort=')
    })
  })

  describe('validateAgeOrder', () => {
    it('should return true if both min and max are null', () => {
      const result = validateAgeOrder(null, null, true)

      expect(result).toBe(true)
    })

    it('should return true if min is less than or equal to max', () => {
      const result = validateAgeOrder(2, 5, true)

      expect(result).toBe(true)
    })

    it('should return false if min is greater than max', () => {
      const result = validateAgeOrder(6, 3, true)

      expect(result).toBe(false)
    })

    it('should return true if max is greater than or equal to min', () => {
      const result = validateAgeOrder(3, 6, false)

      expect(result).toBe(true)
    })

    it('should return false if max is less than min', () => {
      const result = validateAgeOrder(5, 2, false)

      expect(result).toBe(false)
    })
  })
})
