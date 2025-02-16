import styled from '@emotion/styled'
import { AppBar } from '@mui/material';

export const HeaderContainer = styled(AppBar)`
  background: linear-gradient(135deg, #aad79e 0%, #9fd1c8 100%);
  padding: 1rem;
  color: #3e6f6d;
  // text-align: center;
  min-height: 4rem;
`;

export const LogoText = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
