import styled from '@emotion/styled'

import Button from '@mui/material/Button'

export const FindMatchButton = styled(Button)`
  width: 14rem;
  height: 3.5rem;
  font-size: 1.1rem;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 787px) {
    width: 100%;
  }
`
