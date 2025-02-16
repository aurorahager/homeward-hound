'use client'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { setUserLogout } from '@/services/userService'
import { useDogContext } from '@/context/dogsContext'

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
        <LogoText>
          Homeward Hound
        </LogoText>

        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </HeaderContainer>
  )
}
