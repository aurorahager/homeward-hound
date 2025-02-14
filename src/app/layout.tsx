import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'

import { DogsProvider } from '@/context/dogsContext'
import ThemeRegistry from '../components/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Homeward Hound',
  description: 'Take home code challenge for Fetch',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <DogsProvider>{children}</DogsProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
