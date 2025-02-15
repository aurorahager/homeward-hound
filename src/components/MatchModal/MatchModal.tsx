'use client'
import { useDogContext } from '@/context/dogsContext'
import { useDogsInfo, useDogMatch } from '@/services/dogsService'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { DialogContentText, Typography } from '@mui/material'
import Image from 'next/image'

import { ImgWrapper, ModalContentWrapper, ModalTextWrapper } from './styles'

type props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}
export default function MatchModal({ isOpen, setIsOpen }: props): React.ReactElement {
  const { state } = useDogContext()
  const { data, isError: isMatchErr, isLoading: isMatchLoading } = useDogMatch(state.favoriteIds)
  const { dogs = [], isError, isLoading } = useDogsInfo([data?.match ?? ''])
  const { name, breed, zip_code, age, img } = dogs[0] ?? {}

  const handleCloseModal = () => {
    setIsOpen(false)
  }


  return (
    <Dialog open={isOpen} onClose={handleCloseModal}>
      <DialogTitle sx={{ mx: '2rem', marginTop: '.5rem' }} component="div">
        <Typography variant='h4' component="h1" color='primary'>Match Found!</Typography>
        <Typography variant='h6' component="h2" color='textSecondary'>Get ready to meet your new best friend</Typography>
      </DialogTitle>

      <ModalContentWrapper>
        <ImgWrapper>
          <Image alt={`${name} the ${breed}`} src={img} width={400} height={400} />
        </ImgWrapper>
        <ModalTextWrapper sx={{ px: '2rem' }}>
          <>
            <Typography component="span" sx={{ fontSize: '1.7rem', display: 'inline-flex', mx: '0.5rem' }}>{name}</Typography><span>•</span>

            <Typography component="span" sx={{ fontSize: '1.2rem', display: 'inline-flex', mx: '0.5rem' }}>{breed}</Typography>
          </>
          <>
            <Typography component="span" sx={{ display: 'inline-flex', m: '1rem' }}>Age: {age}</Typography>
            <Typography component="span" sx={{ display: 'inline-flex', m: '1rem' }}>Location: {zip_code}</Typography>
          </>
        </ModalTextWrapper>
      </ModalContentWrapper>
      <DialogActions>
        <Button color="secondary" size='large' onClick={handleCloseModal}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
