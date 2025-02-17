import styled from "@emotion/styled";
import { Container } from '@mui/material'

export const ListContainer = styled(Container)`
  display: grid;
  grid-auto-rows: 1rem;
  grid-template-columns: repeat(1, auto);
  justify-content: center;
  gap: 1.27rem;
  width: 98%;
  max-width: 98%;
  min-width: 98%;
  margin: 3rem auto;

  & > div {
  grid-row: span 13;
  }



   @media (min-width: 800px) {
  grid-template-columns: repeat(3, auto);
   & > div:nth-of-type(2n) {
    grid-row: span 12;
  }

  & > div:nth-of-type(3n) {
    grid-row: span 15;
  }

  & > div:nth-of-type(4n) {
    grid-row: span 11;
  }

  & > div:nth-of-type(5n) {
    grid-row: span 14;
}
    }

   @media (min-width: 1000px) {
  grid-template-columns: repeat(5, auto);
  }

`