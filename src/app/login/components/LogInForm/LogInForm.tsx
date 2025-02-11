'use client'

import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'

import { setUserLogin } from '@/services/userService'
import { ApiError } from '@/utils/errors'

export default function LogInForm() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({ name: '', email: '' })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  // Add input validation and only push after success
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await setUserLogin(credentials)
      router.push('/search')
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(`Login failed (status ${error.status}):`, error.message)
      } else {
        console.error('Unexpected error:', error)
      }
    }
  }

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        required
        id="email"
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Log In
      </Button>
    </Box>
  )
}
