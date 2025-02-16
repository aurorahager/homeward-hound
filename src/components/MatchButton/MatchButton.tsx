import { useState } from 'react'

import { useDogContext } from '@/context/dogsContext'

import MatchModal from '@/components/MatchModal'

import { FindMatchButton } from './styles'

export default function MatchButton(): React.ReactElement {
  const { state } = useDogContext()

  const [isOpen, setIsOpen] = useState(false)

  const handleGenerateMatch = () => {
    setIsOpen(true)
  }

  return (
    <>
      <FindMatchButton
        color="secondary"
        disabled={state.favoriteIds.length < 2}
        variant="contained"
        onClick={handleGenerateMatch}
      >
        Find a Match
      </FindMatchButton>
      <MatchModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
