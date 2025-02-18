import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const FooterContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #2e4d4b;
  color: #f5f5f1;
`

export const petsIconStyles = css`
  color: #f3923b;
  font-size: 2rem;
`

export const linkStyles = css`
  text-decoration: none;
  &:hover: {
    text-decoration: underline;
  }
`
