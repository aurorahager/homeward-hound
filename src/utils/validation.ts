import * as yup from 'yup'

import { SearchFormValues } from '@/types/ui'

import { VALIDATION_MESSAGES } from './constants'
import { validateAgeOrder } from './helpers'

export const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required(VALIDATION_MESSAGES.NAME.REQUIRED)
    .matches(/^[a-zA-Z-]+$/, VALIDATION_MESSAGES.NAME.NO_NUM),
  email: yup
    .string()
    .required(VALIDATION_MESSAGES.EMAIL.REQUIRED)
    .email(VALIDATION_MESSAGES.EMAIL.INVALID),
})

export const searchSchema = yup.object<SearchFormValues>().shape({
  ageMin: yup
    .number()
    .nullable()
    .transform((value) =>
      value === '' || Number.isNaN(value) || value === 0 ? null : Number(value),
    )
    .default(null)
    .min(0, VALIDATION_MESSAGES.AGE.NO_NEG)
    .test(
      'min-less-than-max',
      VALIDATION_MESSAGES.AGE.MIN,
      function minLessThanMax(value) {
        console.log('min', value)
        const parent = this.parent as SearchFormValues
        return validateAgeOrder(value, parent.ageMax, true)
      },
    ),
  ageMax: yup
    .number()
    .nullable()
    .transform((value) =>
      value === '' || Number.isNaN(value) || value === 0 ? null : Number(value),
    )
    .default(null)
    .min(0, VALIDATION_MESSAGES.AGE.NO_NEG)
    .test(
      'max-greater-than-min',
      VALIDATION_MESSAGES.AGE.MAX,
      function MaxGreaterThanMin(value) {
        console.log('max', value)
        const parent = this.parent as SearchFormValues
        return validateAgeOrder(parent.ageMin, value, false)
      },
    ),

  breeds: yup.array().of(yup.string()).default([]),
  sort: yup.string().default('breed:desc'),
})
