import { FindMatchButton } from './styles'
import MatchModal from '../MatchModal'
import { useState } from 'react'
import { useDogContext } from '@/context/dogsContext'

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
        Generate Match
      </FindMatchButton>
      <MatchModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
