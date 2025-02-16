import { SearchOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'

import { searchButtonStyling } from './styles'

export default function SearchButton(): React.ReactElement {
  return (
    <Button
      color="primary"
      sx={searchButtonStyling}
      variant="contained"
      type='submit'
    >
      Search
    </Button>
  )
}
