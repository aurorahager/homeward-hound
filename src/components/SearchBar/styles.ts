import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const BarStack = styled(Stack)`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  position: sticky;
  margin: 0 auto;
  padding: 0.7rem 0rem;
  max-width: 98vw;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 12px;
  top: 15vh;
  // z-index: 1100;

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
