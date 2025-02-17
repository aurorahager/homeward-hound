import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const BarStack = styled(Stack)(({ bgColor }: { bgColor: string }) => (`
   justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  position: sticky;
  margin: -5rem auto 0 auto;
  padding: 2.5rem 0rem;
  max-width: 95vw;
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   background-color: ${bgColor};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  transition: background-color 0.3s ease;
  top: 0;
  z-index: 1100;

  @media (max-width: 787px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0.7rem;
    top: 6vh;
    gap: 0.4rem;
    position: static;
  }
`))


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
