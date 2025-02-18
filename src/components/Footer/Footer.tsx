import PetsIcon from '@mui/icons-material/Pets'
import { Link, Typography } from '@mui/material'

import { FOOTER } from '@/utils/constants'

import { FooterContainer, linkStyles, petsIconStyles } from './styles'

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <PetsIcon sx={petsIconStyles} />
      <Typography component="p" variant="h6">
        {FOOTER.MAIN_TEXT}
      </Typography>
      <Typography component="p" variant="h6">
        {FOOTER.SUBTEXT}{' '}
        <Link
          href={FOOTER.GITHUB_LINK}
          rel="noopener noreferrer"
          sx={linkStyles}
          target="_blank"
        >
          GitHub
        </Link>
      </Typography>
    </FooterContainer>
  )
}
