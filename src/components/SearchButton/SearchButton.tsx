
import { SearchOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { searchButtonStyling } from './styles'

export default function SearchButton({ handleSubmit }: { handleSubmit: () => void }): React.ReactElement {
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
