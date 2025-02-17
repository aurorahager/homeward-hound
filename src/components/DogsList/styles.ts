import styled from "@emotion/styled";
import { Container } from '@mui/material'

export const ListContainer = styled(Container)`
  display: grid;
  grid-auto-rows: 25rem;
  grid-template-columns: repeat(1, auto);
  justify-content: center;
  gap: 1.27rem;
  width: 98%;
  max-width: 98%;
  min-width: 98%;
  margin: 3rem auto;

   @media (min-width: 800px) {
  grid-template-columns: repeat(3, auto);
    }

   @media (min-width: 1000px) {
  grid-template-columns: repeat(5, auto);
  }

`