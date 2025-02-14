import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'

import { DogProvider } from '@/context/dogsContext'
import ThemeRegistry from '../components/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Homeward Hound',
  description: 'Take home code challenge for Fetch',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <DogProvider>{children}</DogProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
