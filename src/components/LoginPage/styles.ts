import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const LoginWrapper = styled(Box)`
  display: flex;
  justify-content: stretch;
  width: 100vw;
  height: 100vh;

  @media (max-width: 787px) {
    justify-content: center;
    flex-direction: column;
    justify-items: center;
  }
`

export const Title = styled(Typography)`
  font-family: 'Outfit', sans-serif;
  color: #2e4d4b;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-left: 3%;
  margintop: 1%;
`

export const LoginImage = styled(Box)`
  background-color: #bae4b4;
  height: 20%;

  @media (min-width: 800px) {
    background-image: url('/main.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50vw;
    height: 100vh;
    min-width: 50vw;
  }
`
