import { useDogsUpdate } from '@/services/dogsService'
import { SearchOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { searchButtonStyling } from './styles'

export default function SearchButton() {
  const { trigger } = useDogsUpdate()
  const handleSubmit = () => {
    // const mockParams = { ageMin: 6 }
    // trigger(mockParams)
    console.log('SEARCH', search)
  }
  return (
    <Button
      color="primary"
      sx={searchButtonStyling}
      variant="text"
      onClick={handleSubmit}
    >
      Search
      <SearchOutlined fontSize="large" />
    </Button>
  )
}
