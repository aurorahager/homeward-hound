import { useState } from 'react'

import MatchModal from '@/components/MatchModal'
import { useDogContext } from '@/context/dogsContext'

import { FindMatchButton } from './styles'

export default function MatchButton(): React.ReactElement {
  const { state } = useDogContext()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGenerateMatch = (): void => {
    setIsModalOpen(true)
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
      <MatchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}
