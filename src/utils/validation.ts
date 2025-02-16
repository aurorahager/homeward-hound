import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Z-]+$/, 'Name can only contain letters and hyphens'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email is not valid'),
});

const validateAgeOrder = (min: number | null, max: number | null, isMinField: boolean) => {
  if (min !== null && max !== null) {
    return isMinField ? min <= max : max >= min;
  }
  return true;
};

// TODO fix types
export const searchSchema = yup.object().shape({
  ageMin: yup.number()
    .nullable()
    .transform((value) => (value === '' || isNaN(value) ? null : Number(value)))
    .default(null)
    .min(0, 'Age cannot be negative')
    .test('min-less-than-max', 'Cannot be greater than max age', function (value) {
      return validateAgeOrder(value, this.parent.ageMax, true);
    }),
  ageMax: yup.number()
    .nullable()
    .transform((value) => (value === '' || isNaN(value) ? null : Number(value)))
    .default(null)
    .min(0, 'Age cannot be negative')
    .test('max-greater-than-min', 'Cannot be less than min age', function (value) {
      return validateAgeOrder(this.parent.ageMin, value, false);
    }),

  breeds: yup.array().of(yup.string()).default([]),
  sort: yup.string().default('breed:desc'),
});
