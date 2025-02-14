'use client'

import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { setUserLogin } from '@/services/userService'

export default function LogInForm(): React.ReactElement {
  const router = useRouter()
  const [credentials, setCredentials] = useState({ name: '', email: '' })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  // Add input validation and only push after success
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault()
    await setUserLogin(credentials)
    router.push('/search')
  }

  return (
    <Box
      m={0}
      sx={{
        display: 'flex',
        justifyContent: 'stretch',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/login-img.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#aad79e',
          width: '50vw',
          height: '100vh',
        }}
      >
        <Typography
          style={{ flexGrow: 1 }}
          variant="h5"
          sx={{
            fontFamily: "'Cabin', sans-serif",
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            display: 'inline-block',
            marginLeft: '3%',
            marginTop: '1%',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              position: 'absolute',
              height: '4px',
              backgroundColor: 'secondary.main',
              borderRadius: '2px',
              margin: '0 auto',
              marginTop: '1px',
            },
          }}
        >
          Homeward Hound
        </Typography>
      </Box>

      <Box
        noValidate
        autoComplete="off"
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#e8dba5',
          width: '50vw',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
            width: '80%',
            padding: 5,
            marginY: 5,
            boxShadow: 'none',
            backgroundColor: '#ebdfae',
          }}
        >
          <Typography>
            Welcome! Please enter your name and email to login.
          </Typography>
          <TextField
            required
            id="name"
            label="Name"
            name="name"
            sx={{ backgroundColor: 'transparent' }}
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            required
            id="email"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            onChange={handleInputChange}
          />
          <Button
            sx={{ height: 50, marginTop: 2 }}
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </Box>
  )
}
