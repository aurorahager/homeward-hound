'use client'
import { useDogBreeds } from '@/services/dogsService'

export default function DogsList() {
  const { breeds } = useDogBreeds()
  console.log('breeds', breeds)
  return <div>hi</div>
}
