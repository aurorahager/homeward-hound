'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import DogsList from '@/components/DogsList'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PaginationButtons from '@/components/PaginationButtons'
import SearchBar from '@/components/SearchBar'
import ThemeRegistry from '@/components/ThemeRegistry'
import { useDogContext } from '@/context/dogsContext'
import { TexturedBackground } from '@/styles/globalStyles'

export default function Search(): React.ReactElement | null {
  const router = useRouter()
  const { state } = useDogContext()

  useEffect(() => {
    if (!state.isAuthenticated) {
      router.push('/login')
    }
  }, [router, state.isAuthenticated])

  if (!state.isAuthenticated) {
    return null
  }

  return (
    <ThemeRegistry>
      <TexturedBackground>
        <Nav />
        <SearchBar />
        <DogsList />
        <PaginationButtons />
      </TexturedBackground>
      <Footer />
    </ThemeRegistry>
  )
}
