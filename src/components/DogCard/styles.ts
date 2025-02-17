import styled from '@emotion/styled';
import { Box, Card } from '@mui/material';

export const CardContainer = styled(Card)`
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
    

  @media (max-width: 787px) {
    width: 85%;
  }
  `

export const CardInfoWrapper = styled(Box)`
display: flex;
flex-direction: column;
        justify-content: space-between;
        height: 100%;
`

export const MediaWrapper = styled(Box)`
width: 100%;
height: 75%;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`