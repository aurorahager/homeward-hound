'use client'

import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Image from 'next/image'

import { useDogContext } from '@/context/dogsContext'
import { useDogMatch, useDogsInfo } from '@/services/dogsService'
import { IMG_PLACEHOLDER, MODAL_MESSAGES } from '@/utils/constants'

import {
  CustomBackdrop,
  ImgWrapper,
  ModalContentWrapper,
  ModalTextWrapper,
  modalTitleStyles,
  subtitleTextStyles,
  subtitleTwoTextStyles,
} from './styles'

type props = {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}
export default function MatchModal({
  isModalOpen,
  setIsModalOpen,
}: props): React.ReactElement {
  const { state } = useDogContext()
  const { data, isError: isMatchError } = useDogMatch(
    isModalOpen && state.favoriteIds.length > 1 ? state.favoriteIds : null,
  )
  const { dogs = [], isError: isInfoError } = useDogsInfo(
    isModalOpen && data?.match != null ? [data.match] : null,
  )
  const { name, breed, zip_code: zipCode, age, img } = dogs[0] ?? {}

  const handleCloseModal = (): void => {
    setIsModalOpen(false)
  }

  if (isMatchError || isInfoError) {
    throw Error
  }

  return (
    <Dialog
      open={isModalOpen}
      slots={{
        backdrop: CustomBackdrop,
      }}
      onClose={handleCloseModal}
    >
      {/* Modal Heading */}
      <DialogTitle component="div" sx={modalTitleStyles}>
        <Typography
          color="primary"
          component="h1"
          sx={{ fontWeight: 800 }}
          variant="h4"
        >
          {MODAL_MESSAGES.HEADING}
        </Typography>
      </DialogTitle>
      {/* Modal main content */}
      <ModalContentWrapper>
        <ImgWrapper>
          <Image
            alt={`${name ?? ''} the ${breed ?? ''}`}
            height={350}
            src={img ?? IMG_PLACEHOLDER}
            width={350}
          />
        </ImgWrapper>
        {/* Modal text */}
        <ModalTextWrapper sx={{ px: '1rem' }}>
          <>
            <Typography
              color="text.primary"
              component="div"
              sx={subtitleTextStyles}
            >
              {' '}
              {MODAL_MESSAGES.TEXT(name ?? '', age ?? '', breed ?? '')}
            </Typography>
            <Typography
              color="text.primary"
              component="div"
              sx={subtitleTwoTextStyles}
            >
              {MODAL_MESSAGES.SUB_TEXT(zipCode ?? '')}
            </Typography>
          </>
        </ModalTextWrapper>
      </ModalContentWrapper>
      {/* Close button */}
      <DialogActions>
        <Button
          color="secondary"
          size="large"
          sx={{ color: '#f5f5f5' }}
          variant="contained"
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
