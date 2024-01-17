import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './services/theme'
import { Dashboard } from './components/Dashboard';
import { Box } from '@mui/material'
import { LocationProvider } from './contexts/LocationContext'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocationProvider>
                <Box className='container'>
                    <Dashboard />
                </Box>
            </LocationProvider>
        </ThemeProvider>
    )
}

export default App;
