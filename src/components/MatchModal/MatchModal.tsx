import { useDogMatchInfo } from '@/services/dogsService'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Image from 'next/image'

type props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  dogId: string
}
export default function MatchModal({ isOpen, setIsOpen, dogId }: props): FC {
  console.log('DOGID', dogId)
  const { data } = useDogMatchInfo([dogId])
  const { name, breed, location, age, img } = data ?? {}
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={handleCloseModal}>
      <DialogTitle>Match Found!</DialogTitle>
      <DialogContent>
        <Image alt={`${name} the ${breed}`} src={img} />
        <p>Name: {name}</p>
        <p>Breed: {breed}</p>
        <p>Location: {location}</p>
        <p>Age: {age}</p>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCloseModal}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
