import { Container, Typography, Button } from "@mui/material"
import Link from "next/link"

export default function NotFound(): React.ReactElement {

  return (
    <Container sx={{
      backgroundImage: 'url(/not-found.png)', height: '100vh', width: '100vw', minWidth: '100%', backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#9dd0b1',
      display: 'flex',
      justifyContent: 'flext-start',
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column'
    }}>

      <Typography variant="h2" color="#3e6f6d">Page Not Found</Typography>
      <Typography variant="h4" color="#3e6f6d">There's nothing to see here. We promise.</Typography>
      <Button
        component={Link}
        href="/login"
        variant="contained"
        sx={{ textDecoration: 'none', backgroundColor: '#f3923b', height: '3rem', width: '12rem' }}
      >
        Go back to Login
      </Button>
    </Container>
  )
}