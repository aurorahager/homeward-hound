import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Nav() {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar>
        <Typography
          style={{ flexGrow: 1 }}
          variant="h6"
          sx={{
            fontFamily: "'Cabin', sans-serif",
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            display: 'inline-block',
            '::after': {
              content: '""',
              display: 'block',
              width: '16%',
              position: 'absolute',
              height: '4px',
              backgroundColor: 'secondary.main',
              borderRadius: '2px',
              margin: '0 auto',
              marginTop: '2px',
            },
          }}
        >
          Homeward Hound
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  )
}
