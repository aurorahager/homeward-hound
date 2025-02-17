'use client'

import { Box } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'

import LoginForm from '@/components/LoginForm'

import { LoginImage, LoginWrapper, Title } from './styles'

export default function LoginPage(): React.ReactElement {

  return (
    <LoginWrapper>
      <LoginImage >
        <Title
          style={{ flexGrow: 1 }}
          variant="h4"
        >
          Homeward Hound
          <PetsIcon sx={{
            color: '#f3923b',
            marginLeft: '0.2rem',
            fontSize: '1.8rem',
            transform: 'rotate(15deg)',
          }} />
        </Title>
      </LoginImage>
      <LoginForm />
    </LoginWrapper>
  )
}

