import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const boxStyling = css`
  display: flex;
  justify-content: center;
  width: 95%;

  @media (max-width: 600px) {
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 50vw;
    max-width: 50vw;
  }
`

export const LoginPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  padding: 0 2rem;
  margin: 4rem 0.2rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
    gap: 4rem;
    margin: 1rem 2rem;
  }
`

export const formStyling = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    padding: 0;
    gap: 2rem;
  }
`
export const loginButtonStyling = css`
  height: 3.2rem;
  margintop: 1rem;
  color: white;
`
