'use client'

import { Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

import { BACK_LOGIN_TEXT, ERROR_PAGE_HEADING } from '@/utils/constants'

import { backButtonStyles, backgroundStyles, errorStyles } from './styles'

export default function Error(): React.ReactElement {
  return (
    <Container
      sx={{
        ...errorStyles,
        backgroundStyles,
      }}
    >
      <Typography color="#3e6f6d" variant="h2">
        {ERROR_PAGE_HEADING}
      </Typography>
      <Button
        component={Link}
        href="/login"
        sx={backButtonStyles}
        variant="contained"
      >
        {BACK_LOGIN_TEXT}
      </Button>
    </Container>
  )
}
