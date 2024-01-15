import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './services/theme'
import { Dashboard } from './components/Dashboard';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    )
}

export default App;
