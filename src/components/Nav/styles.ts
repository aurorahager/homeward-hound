import styled from '@emotion/styled'
import { AppBar } from '@mui/material'

export const HeaderContainer = styled(AppBar)`
  background: linear-gradient(135deg, #aad79e 0%, #9fd1c8 100%);
  padding: 1rem;
  color: #3e6f6d;
  position: static;
  z-index: 1;
  min-height: 12rem;
  max-width: 100%;
  width: 100%;
`

export const LogoText = styled.h1`
  font-family: 'Outfit', sans-serif;
  color: #2e4d4b;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
`
