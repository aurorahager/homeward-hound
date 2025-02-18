import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'

export const CardContainer = styled(Card)`
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 787px) {
    width: 85%;
  }
`

export const CardInfoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const MediaWrapper = styled(Box)`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const mediaStyles = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const iconButtonStyles = css`
  position: absolute;
  top: 0.1875rem;
  right: 1.25rem;
`

export const iconStyles = css`
  font-size: 1.8rem;
  color: white;
`

export const contentBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10%;
`

export const cardContentStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const dotIconStyles = css`
  font-size: 0.5rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
`
