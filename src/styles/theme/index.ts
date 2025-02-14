import { createTheme } from '@mui/material/styles'
import { PaletteOptions } from '@mui/material/styles/createPalette'

const palette: PaletteOptions = {
  primary: {
    light: '#aad79e',
    main: '#3e6f6d',
    dark: '#0d302e',
    contrastText: '#f8f1ae',
  },
  secondary: {
    light: '#d9b592',
    main: '#f3923b',
    dark: '#c76e0f',
    contrastText: '#e5e7c6',
  },
  background: {
    default: '#e8dba5',
    paper: '#ebdfae',
  },
  text: {
    primary: '#24322e',
    secondary: '#51635a',
  },
}

const theme = createTheme({
  palette,
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          strokeWidth: '1',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#7ba2b6',
            },
          },
          '& .MuiInputBase-input': {
            color: '#4e4e4e',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              // borderColor: '#b3d1df',
            },
            '&:hover fieldset': {
              // borderColor: '#f6c28b',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7ba2b6',
            },
          },
          '& .MuiInputBase-input': {
            color: '#4e4e4e',
          },
        },
        popper: {
          '& .MuiPaper-root': {
            backgroundColor: '#eaeccf',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // backgroundColor: '#8fbfb7',
          borderColor: '#f3923b',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f3923b',
            },
            '&:hover fieldset': {
              borderColor: '#f3923b',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f3923b',
            },
          },
          '& .MuiInputBase-input': {
            color: '#4e4e4e',
          },
        },
        menu: {
          backgroundColor: '#eaeccf',
        },
      },
    },
  },
})

export default theme
