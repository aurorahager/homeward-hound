'use client'
import { useDogContext } from '@/context/dogsContext'
import { useDogsInfo, useDogMatch } from '@/services/dogsService'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { Typography } from '@mui/material'
import Image from 'next/image'

import { ImgWrapper, ModalContentWrapper, ModalTextWrapper } from './styles'

type props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}
export default function MatchModal({ isOpen, setIsOpen }: props): React.ReactElement {
  const { state } = useDogContext()
  // TODO fix types
  const { data, isError: isMatchError } = useDogMatch(isOpen && state.favoriteIds.length > 1 ? state.favoriteIds : null)
  const { dogs = [], isError: isInfoError } = useDogsInfo(isOpen && data?.match ? [data.match] : null)
  const { name, breed, zip_code, age, img } = dogs[0] ?? {}

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  if (isMatchError || isInfoError) {
    throw Error
  }


  return (
    <Dialog open={isOpen} onClose={handleCloseModal} BackdropProps={{
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)'
      },
    }}>
      <DialogTitle sx={{ mx: '2rem', marginTop: '.4rem' }} component="div">
        <Typography variant='h4' component="h1" color='primary' sx={{ fontWeight: 800 }}>It's a Match!</Typography>
      </DialogTitle>

      <ModalContentWrapper>
        <ImgWrapper>
          <Image alt={`${name} the ${breed}`} src={img} width={350} height={350} />
        </ImgWrapper>
        <ModalTextWrapper sx={{ px: '1rem' }}>
          <>
            <Typography component="p" color="text.primary" sx={{ fontSize: '1.2rem', mx: '0.1rem', my: '1rem' }}>
              {`You and ${name} (a lovable ${age}-year-old ${breed}) are meant to be!`}
            </Typography>
            <Typography component="p" color="text.primary" sx={{
              fontSize: '1.2rem', mx: '0.1rem', my: '0.5rem'
            }}>
              {` Ready to meet your new best friend in ${zip_code}?`}
            </Typography>
          </>
        </ModalTextWrapper>
      </ModalContentWrapper>
      <DialogActions>
        <Button color="secondary" size='large' variant="contained" onClick={handleCloseModal} sx={{ color: '#f5f5f5' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
