import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { TextField } from '@mui/material';

export const TexturedBackground = styled('div')`
  background: #f3f3f3;
  background-image: url('/p6.webp');
  object-fit: repeat;
  background-blend-mode: multiply;
  min-height: 100vh;
  // width: 100vw;
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export const ValidationInput = styled(TextField)`
  input{
  &:invalid {
    animation: ${shake} 0.3s ease;
  }
}
`;
