// theme.js ou theme.ts
import { createTheme } from '@mui/material/styles'
import { blue, grey } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[300],
    },
    background: {
      default: '#f0f4f8',
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: '12px',
      },
    },
  },
  typography: {
    fontFamily: ['Asap', 'sans-serif'].join(','),
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[200],
    },
    background: {
      default: '#021c2e',
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: '12px',
      },
    },
  },
  typography: {
    fontFamily: ['Asap', 'sans-serif'].join(','),
  },
})
