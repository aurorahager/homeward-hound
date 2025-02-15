'use client'
import Nav from '@/components/Nav'
import ThemeRegistry from '@/components/ThemeRegistry'
import DogsList from '@/components/DogsList'
import SearchBar from '@/components/SearchBar'
import PaginationButtons from '@/components/PaginationButtons'
import { useRouter } from 'next/navigation'
import { useDogContext } from '@/context/dogsContext'
import { useEffect } from 'react'

export default function Search(): React.ReactElement | null {
  const router = useRouter()
  const { state } = useDogContext()

  useEffect(() => {
    if (!state.isAuthenticated) {
      router.push('/login')
    }
  }, [router, state.isAuthenticated])

  if (!state.isAuthenticated) { return null }

  return (
    <>
      <ThemeRegistry>
        <Nav />
        <SearchBar />
        <DogsList />
        <PaginationButtons />
      </ThemeRegistry>
    </>
  )
}
