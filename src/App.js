import './App.css';
import { useMemo } from 'react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './services/theme';
import { Dashboard } from './components/Dashboard';
import { Box, CssBaseline } from '@mui/material'
import { LocationProvider } from './contexts/LocationContext'

function App() {
    const theme = useMemo(() => {
        const hour = new Date().getHours()
        const isDay = hour >= 6 && hour < 18
        return isDay ? lightTheme : darkTheme
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocationProvider>
                <Box className='container'>
                    <Dashboard />
                </Box>
            </LocationProvider>
        </ThemeProvider>
    )
}

export default App;
