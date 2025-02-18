import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'

import { DogProvider } from '@/context/dogsContext'
import { APP_DESCRIPTION, APP_TITLE } from '@/utils/constants'

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
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
          <DogProvider>{children}</DogProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
