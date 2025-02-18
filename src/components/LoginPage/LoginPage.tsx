'use client'

import PetsIcon from '@mui/icons-material/Pets'

import LoginForm from '@/components/LoginForm'
import { petsLogoStyles } from '@/styles/globalStyles'
import { APP_TITLE } from '@/utils/constants'

import { LoginImage, LoginWrapper, Title } from './styles'

export default function LoginPage(): React.ReactElement {
  return (
    <LoginWrapper>
      <LoginImage>
        <Title style={{ flexGrow: 1 }} variant="h4">
          {APP_TITLE}
          <PetsIcon sx={petsLogoStyles} />
        </Title>
      </LoginImage>
      <LoginForm />
    </LoginWrapper>
  )
}
