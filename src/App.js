import './App.css'
import { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Box } from '@mui/material'
import { LocationContext } from './contexts/LocationContext'
import { getThemeByWeather, getBackgroundByWeather } from './services/theme'
import { Dashboard } from './components/Dashboard'
import { useRequestForecast } from './hooks/Request/useRequestForecast'

function App() {
    const { getForecast } = useRequestForecast()
    const { location, setLocation } = useContext(LocationContext)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        if (!location) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const lat = position?.coords?.latitude
                        const lon = position?.coords?.longitude
                        if (!lat || !lon) {
                            setLocation('Sao Paulo')
                            return
                        }
                        const local = `${lat},${lon}`
                        setLocation(local)
                    },
                    () => {
                        setLocation('Sao Paulo')
                    }
                )
            } else {
                setLocation('Sao Paulo')
            }
        }
    }, [location, setLocation])

    useEffect(() => {
        if (!location) return
        getForecast(location, 3, true, true).then((res) => {
            setResponse(res?.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const isDay = response?.current?.is_day === 1
    const condition = response?.current?.condition?.text || ''

    const theme = getThemeByWeather(condition, isDay)
    const background = getBackgroundByWeather(condition, isDay)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                className='container'
                sx={{
                    minHeight: '100vh',
                    background: background,
                    backgroundSize: 'cover',
                    transition: 'background 0.5s ease-in-out'
                }}
            >
                <Dashboard data={response} />
            </Box>
        </ThemeProvider>
    )
}

export default App
