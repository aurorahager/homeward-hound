'use client'

import { useDogSearch } from '@/services/dogsService'

export default function DogsList() {
  const { dogIds } = useDogSearch()
  console.log('DOGGS', dogIds)
  return <div>hi</div>
}
