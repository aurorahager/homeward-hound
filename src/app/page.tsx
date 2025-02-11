import { redirect } from 'next/navigation'
import { isLoggedIn } from '@/utils/auth'

export default async function Home() {
  const isUser = await isLoggedIn()
  if (isUser) {
    redirect('/search')
  } else {
    redirect('/login')
  }
}
