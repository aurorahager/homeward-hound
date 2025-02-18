import { Button } from '@mui/material'

import { searchButtonStyling } from './styles'

export default function SearchButton(): React.ReactElement {
  return (
    <Button
      color="primary"
      sx={searchButtonStyling}
      type="submit"
      variant="contained"
    >
      Search
    </Button>
  )
}
