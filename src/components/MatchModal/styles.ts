import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, DialogContent } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'

export const CustomBackdrop = styled(Backdrop)`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`

export const ModalContentWrapper = styled(DialogContent)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 35vw;

  @media (max-width: 787px) {
    justify-content: center;
    width: 100%;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;

  & > img {
    border-radius: 12px;
  }
`
export const ModalTextWrapper = styled(Box)`
  width: 100%;
`
export const modalTitleStyles = css`
  margin: 0.4rem 2rem 0 2rem;
`
export const subtitleTextStyles = css`
  font-size: 1.2rem;
  margin: 1rem 0.1rem;
`
export const subtitleTwoTextStyles = css`
  font-size: 1.2rem;
  margin: 0.5rem 0.1rem;
`
