import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const CardContainer = styled(Card)`
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }`
