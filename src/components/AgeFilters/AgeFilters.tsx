'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form';

import {
  NumberField,
} from './styles'

// TODO fix types
type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

export default function AgeFilters({ errors, register }: Props): React.ReactElement {
  return (
    <>
      <NumberField
        label="Minimum Age"
        type="number"
        error={!!errors.ageMin}
        helperText={errors.ageMin?.message}
        {...register('ageMin')}
      />
      <NumberField
        label="Maximum Age"
        type="number"
        error={!!errors.ageMax}
        helperText={errors.ageMax?.message}
        {...register('ageMax')}
      />
    </>
  )
}