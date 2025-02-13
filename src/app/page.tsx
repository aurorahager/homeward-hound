import { isLoggedIn } from '@/utils/auth'
import { redirect } from 'next/navigation'

export default async function Home(): FC {
  const isUser = await isLoggedIn()
  if (isUser) {
    redirect('/search')
  } else {
    redirect('/login')
  }
}
