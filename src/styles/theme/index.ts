import { createTheme } from '@mui/material/styles'
import { PaletteOptions } from '@mui/material/styles/createPalette'
import { Nunito, Poppins } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const palette: PaletteOptions = {
  primary: {
    light: '#c5e5be',
    main: '#89b4aa',
    dark: '#74b4b8',
  },
  secondary: {
    main: '#f3923b',
    dark: '#d47c29',
  },
  background: {
    default: '#f5f5f1',
    paper: '#e7f0e4',
  },
  text: {
    primary: '#3e6f6d',
    secondary: '#51635a',
  },
}

const theme = createTheme({
  palette,
  typography: {
    fontFamily: nunito.style.fontFamily,
    h1: {
      fontFamily: poppins.style.fontFamily,
    },
    h2: {
      fontFamily: poppins.style.fontFamily,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
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
          textTransform: 'none',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
        },
      },
    },
  },
})

export default theme
