'use client'

import { useDogContext } from '@/context/dogsContext'
import { getPrefetchPage } from '@/services/dogsService'

import { PaginationButton, PaginationContainer } from './styles'

export default function PaginationButtons(): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { prevPage, nextPage } = state ?? {}
  const setPageNavigation = (value: string): void => {
    window.scrollTo({
      top: 0,
    })
    dispatch({ type: 'SET_SEARCH_QUERY', payload: value })
  }

  const handlePagination =
    (pageUrl: string) =>
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()
      setPageNavigation(pageUrl)
    }

  const handleButtonHover = (url: string) => (): void => {
    getPrefetchPage(url).catch((error) => {
      throw error
    })
  }

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={!prevPage}
        size="large"
        variant="contained"
        onClick={handlePagination(prevPage)}
      >
        Previous
      </PaginationButton>
      <PaginationButton
        disabled={!nextPage}
        size="large"
        variant="contained"
        onClick={handlePagination(nextPage)}
        onMouseEnter={handleButtonHover(nextPage)}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  )
}
