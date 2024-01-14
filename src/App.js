import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './services/theme'
import { BasicInformation } from './components/BasicInformation';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BasicInformation />
        </ThemeProvider>
    )
}

export default App;
