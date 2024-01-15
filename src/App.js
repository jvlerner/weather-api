import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './services/theme'
import { Dashboard } from './components/Dashboard';
import { Box } from '@mui/material'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box className='container'>
                <Dashboard />
            </Box>
        </ThemeProvider>
    )
}

export default App;
