import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
          main: green[500],
        },
    },
    typography: {
      fontFamily: [
        'Asap',
        'sans-serif',
      ].join(','),
    }
})
