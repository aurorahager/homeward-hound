'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

import theme from '@/styles/theme'

export default function ThemeRegistry({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
