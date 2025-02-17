import { Box, Typography, Link } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'

export default function Footer(): React.ReactElement {

  return (
    <Box width="100%" display="flex" sx={{
      justifyContent: 'center',
      justifyItems: 'center',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      gap: 2,
      padding: '2rem',
      backgroundColor: '#2e4d4b',
      color: '#f5f5f1',

    }}>
      <PetsIcon sx={{
        color: '#f3923b',
        fontSize: '2rem'
      }} />
      <Typography variant='h6' component="p">
        Made by Rory for the Fetch take home challenge.
      </Typography>
      <Typography variant='h6' component="p">
        See it on{' '}
        <Link
          href="https://github.com/aurorahager/homeward-hound"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
        >
          GitHub
        </Link>
      </Typography>
    </Box>
  )
}