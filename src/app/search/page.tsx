import Nav from '@/components/Nav'
import { isLoggedIn } from '@/utils/auth'
import DogsList from './components/DogsList'
import SearchBar from './components/SearchBar'

export default async function Search(): FC {
  const isUser = await isLoggedIn()
  if (!isUser) {
    // redirect('/login')
  }
  return (
    <>
      <Nav />
      <SearchBar />
      <DogsList />
    </>
  )
}
