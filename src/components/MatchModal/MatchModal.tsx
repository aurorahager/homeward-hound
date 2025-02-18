'use client'

import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Image from 'next/image'

import { useDogContext } from '@/context/dogsContext'
import useDogMatch from '@/hooks/useDogMatch'
import useDogsInfo from '@/hooks/useDogsInfo'
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
import { useMemo } from 'react'

type MatchModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}
export default function MatchModal({
  isModalOpen,
  setIsModalOpen,
}: MatchModalProps): React.ReactElement {
  const { state } = useDogContext()

  const favoriteIds = useMemo(() => state.favoriteIds, [state.favoriteIds])

  const shouldFetchMatch = isModalOpen && state.favoriteIds.length > 1
  const { data: matchData, error: matchError } = useDogMatch(
    shouldFetchMatch ? state.favoriteIds : null,
  )
  const shouldFetchDogInfo = isModalOpen && matchData?.match != null
  const { dogs = [], error: infoError } = useDogsInfo(
    shouldFetchDogInfo ? [matchData.match] : null,
  )
  const { name, breed, zip_code: zipCode, age, img } = dogs[0] ?? {}

  const handleCloseModal = (): void => {
    setIsModalOpen(false)
  }

  // * Error boundary will handle displaying the error page
  if (matchError) {
    throw new Error(matchError.message)
  }

  if (infoError) {
    throw new Error(infoError.message)
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
            alt={`${name ?? 'Dog'} the ${breed ?? 'unknown breed'}`}
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
              {MODAL_MESSAGES.TEXT(
                name ?? 'Dog',
                age ?? 'unknown age',
                breed ?? 'unknown breed',
              )}
            </Typography>
            <Typography
              color="text.primary"
              component="div"
              sx={subtitleTwoTextStyles}
            >
              {MODAL_MESSAGES.SUB_TEXT(zipCode ?? 'unknown location')}
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
