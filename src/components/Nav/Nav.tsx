'use client'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { setUserLogout } from '@/services/userService'
import { useDogContext } from '@/context/dogsContext'
import PetsIcon from '@mui/icons-material/Pets'

import { HeaderContainer, LogoText } from './styles'

export default function Nav(): React.ReactElement {
  const { dispatch } = useDogContext()
  const handleLogout = () => {
    setUserLogout()
    dispatch({ type: 'LOGOUT' })
  }
  return (
    <HeaderContainer elevation={0}>
      <Toolbar>
        <>
          <LogoText>
            Homeward Hound
            <PetsIcon sx={{
              color: '#f3923b',
              marginLeft: '0.2rem',
              fontSize: '1.5rem',
              transform: 'rotate(15deg)',
            }} />

          </LogoText>

        </>
        <Button color="inherit" onClick={handleLogout} sx={{ fontSize: '1.2rem' }} size='large'>Logout</Button>
      </Toolbar>
    </HeaderContainer>
  )
}
