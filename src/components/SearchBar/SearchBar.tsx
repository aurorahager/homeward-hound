'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Divider } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

import AgeFilters from '@/components/AgeFilters'
import BreedFilter from '@/components/BreedFilter'
import MatchButton from '@/components/MatchButton'
import SearchButton from '@/components/SearchButton'
import SortSelect from '@/components/SortSelect'
import { useDogContext } from '@/context/dogsContext'
import { SearchFormValues } from '@/types/ui'
import { createQueryString } from '@/utils/helpers'
import useScrollEffect from '@/hooks/useScrollEffect'
import { searchSchema } from '@/utils/validation'

import { BarStack, FilterOptionsStack } from './styles'

export default function SearchBar(): React.ReactElement {
  const { dispatch } = useDogContext()
  const bgColor = useScrollEffect(40)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      breeds: [],
      ageMin: null,
      ageMax: null,
      sort: 'breed:asc',
    },
  })

  const onSubmit: SubmitHandler<SearchFormValues> = (formData): void => {
    const stringQ = createQueryString(formData)
    dispatch({ type: 'SET_SEARCH_QUERY', payload: stringQ })
  }

  return (
    <BarStack
      useFlexGap
      bgcolor={bgColor}
      divider={<Divider flexItem orientation="vertical" />}
    >
      <Box component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
        <FilterOptionsStack useFlexGap gap={2}>
          <BreedFilter control={control} />
          <AgeFilters errors={errors} register={register} />
          <SortSelect register={register} />
          <SearchButton />
        </FilterOptionsStack>
      </Box>
      <MatchButton />
    </BarStack>
  )
}
