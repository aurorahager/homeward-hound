import { Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

import { BACK_LOGIN_TEXT, NOT_FOUND_TEXT } from '@/utils/constants'

import { backButtonStyles, backgroundStyles, notFoundStyles } from './styles'

export default function NotFound(): React.ReactElement {
  return (
    <Container sx={{ ...notFoundStyles, ...backgroundStyles }}>
      <Typography color="#3e6f6d" variant="h2">
        {NOT_FOUND_TEXT.HEADING}
      </Typography>
      <Typography color="#3e6f6d" variant="h4">
        {NOT_FOUND_TEXT.SUBHEADING}
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
