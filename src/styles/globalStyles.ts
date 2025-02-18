import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const TexturedBackground = styled('div')`
  background: #f3f3f3;
  background-image: url('/y-so-serious-white.png');
  object-fit: repeat;
  background-blend-mode: multiply;
  min-height: 100vh;
`

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`

// ? use in login?
export const ValidationInput = styled(TextField)`
  input {
    &:invalid {
      animation: ${shake} 0.3s ease;
    }
  }
`
export const petsLogoStyles = css`
  color: #f3923b;
  margin-left: 0.2rem;
  font-size: 1.8rem;
  transform: rotate(15deg);
`
