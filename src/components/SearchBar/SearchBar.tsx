'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Divider } from '@mui/material'

import { useScrollEffect } from '@/utils/hooks';
import { createQueryString } from '@/utils/helpers'
import { searchSchema } from '@/utils/validation'
import { useDogContext } from '@/context/dogsContext'

import AgeFilters from '@/components/AgeFilters';
import BreedFilter from '@/components/BreedFilter';
import MatchButton from '@/components/MatchButton'
import SearchButton from '@/components/SearchButton'
import SortSelect from '@/components/SortSelect'

import {
  BarStack,
  FilterOptionsStack,
} from './styles'

type FormValues = {
  breeds: string[] | [],
  ageMin: number | null,
  ageMax: number | null,
  sort: string
}
export default function SearchBar(): React.ReactElement {
  const { dispatch } = useDogContext()
  const bgColor = useScrollEffect(40)
  // TODO fix types
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      breeds: [],
      ageMin: null,
      ageMax: null,
      sort: 'breed:desc'
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data): void => {
    console.log('hit', data)
    const stringQ = createQueryString(data)
    dispatch({ type: 'SET_SEARCH_QUERY', payload: stringQ })
  }

  return (
    <BarStack bgcolor={bgColor} useFlexGap divider={<Divider flexItem orientation="vertical" />}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
