import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PaginationContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  margin: 2rem 0;
`;

export const PaginationButton = styled(Button)`
  background: #f3923b;
  color: white;
  width: 10rem;
  height: 3rem;
  border-radius: 30px;
  padding: 5px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: #d47c29;
  }
`;
