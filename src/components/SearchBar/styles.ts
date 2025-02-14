import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

export const autoCompleteStyling = css`
  width: 22rem;

  @media (max-width: 787px) {
    grid-column: 1 / span 2;
  }
`

export const BarStack = styled(Stack)`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  position: sticky;
  padding: 0.7rem 0rem;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.palette.primary.light};
  top: 8.6vh;
  z-index: 1100;

  @media (max-width: 787px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0.7rem;
    top: 6vh;
    gap: 0.4rem;
    position: static;
  }
`

export const FilterOptionsStack = styled(Stack)`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  @media (max-width: 787px) {
    display: grid;
    grid-template: repeat(3, auto) / repeat(2, auto);
    grid-gap: 0.5rem;
    justify-items: center;
    align-items: center;
    align-content: center;
  }
`

export const NumberField = styled(TextField)`
  min-width: 10rem;
  max-width: 15rem;
  input {
    appearance: textfield;
  }

  @media (max-width: 787px) {
    width: 50%;
  }
`
