import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
          main: blue[300],
        },
    },
    components: {
      MuiSvgIcon: {
        defaultProps: {
          fontSize: '12px'
        }
      }
    },
    typography: {
      fontFamily: [
        'Asap',
        'sans-serif',
      ].join(','),
    }
})
