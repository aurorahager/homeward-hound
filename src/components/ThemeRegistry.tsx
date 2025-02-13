'use client'

import theme from '@/styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
