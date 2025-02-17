'use client'
import { Container, Typography, Button } from "@mui/material"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }): React.ReactElement {

  return (
    <Container sx={{
      backgroundImage: 'url(/error-page.png)', height: '100vh', width: '100vw', minWidth: '100%', backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#afddb6',
      display: 'flex',
      justifyContent: 'flext-start',
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column'
    }}>

      <Typography variant="h2" color="#3e6f6d">Oops! Something went wrong</Typography>
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