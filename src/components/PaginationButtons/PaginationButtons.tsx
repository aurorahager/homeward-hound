'use client'

import { Button, Stack } from "@mui/material"
import { useDogContext } from "@/context/dogsContext"
import { usePrefetchPage } from "@/services/dogsService"

export default function PaginationButtons(): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { prevPage, nextPage } = state ?? {}
  const setPageNavigation = (value: string) => {
    window.scrollTo({
      top: 0,
    });
    dispatch({ type: 'SET_SEARCH_QUERY', payload: value })
  }

  const handlePagination = (pageUrl: string) => (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setPageNavigation(pageUrl)
  }

  const handleButtonHover = (url: string) => (): void => {
    usePrefetchPage(url)
  }

  return (
    <Stack direction="row" sx={{ padding: '5rem', m: '5rem', alignContent: 'center' }}>
      <Button size="large" disabled={!prevPage} onClick={handlePagination(prevPage)} variant="contained">Previous</Button>
      <Button size="large" disabled={!nextPage} onClick={handlePagination(nextPage)} onMouseEnter={handleButtonHover(nextPage)} variant="contained">Next</Button>
    </Stack>
  )

}