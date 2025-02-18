'use client'

import PetsIcon from '@mui/icons-material/Pets'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'

import { useDogContext } from '@/context/dogsContext'
import { setUserLogout } from '@/hooks/useAuth'
import { petsLogoStyles } from '@/styles/globalStyles'

import { HeaderContainer, LogoText } from './styles'

export default function Nav(): React.ReactElement {
  const { dispatch } = useDogContext()

  const handleLogout = async (): Promise<void> => {
    await setUserLogout()
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <HeaderContainer elevation={0}>
      <Toolbar>
        <LogoText>
          Homeward Hound
          <PetsIcon sx={petsLogoStyles} />
        </LogoText>
        <Button
          color="inherit"
          size="large"
          sx={{ fontSize: '1.2rem' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </HeaderContainer>
  )
}
