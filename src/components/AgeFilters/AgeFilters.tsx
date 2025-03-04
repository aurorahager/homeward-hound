'use client'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { SearchFormValues } from '@/types/ui'

import { NumberField } from './styles'

type AgeFilterProps = {
  register: UseFormRegister<SearchFormValues>
  errors: FieldErrors
}

export default function AgeFilters({
  errors = {},
  register,
}: AgeFilterProps): React.ReactElement {
  return (
    <>
      <NumberField
        error={!!errors.ageMin}
        helperText={String(errors.ageMin?.message ?? '')}
        id="ageMin"
        label="Minimum Age"
        type="number"
        {...register('ageMin')}
      />
      <NumberField
        error={!!errors.ageMax}
        helperText={String(errors.ageMax?.message ?? '')}
        label="Maximum Age"
        type="number"
        {...register('ageMax', {
          setValueAs: (v) => (v === '' ? 100 : Number(v)), // *react-hook-form makes null or '' change to 0
        })}
      />
    </>
  )
}
