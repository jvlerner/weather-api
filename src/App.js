import './App.css'
import { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Box } from '@mui/material'
import { LocationContext } from './contexts/LocationContext'
import { getThemeByWeather, getBackgroundByWeather} from './services/theme'
import { Dashboard } from './components/Dashboard'
import { useRequestForecast } from './hooks/Request/useRequestForecast'
import { useRequestGeoLocation } from './hooks/Request/useRequestGeoLocation'

function App() {
    const { getForecast } = useRequestForecast()
    const { getGeoLocation } = useRequestGeoLocation()
    const [response, setResponse] = useState([])
    const { location, setLocation } = useContext(LocationContext);


    const handleGetForecast = useCallback(() => {
        const currentLocation = (position) => {
            getGeoLocation(position.coords.latitude, position.coords.longitude).then(res => {
                const city = res?.data?.features[0]?.properties?.city
                setLocation(city)
                requestGetForecast(city)
            })
        }

        const requestGetForecast = (locationRequest) => {
            getForecast(locationRequest, 3, true, true).then((res) => {
                setResponse(res?.data)
            })
        }

        if (!location) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(currentLocation)
            }
        } else {
            requestGetForecast(location)
        }
    }, [location, getGeoLocation, getForecast, setLocation])

    useEffect(() => {
        handleGetForecast()
    }, [location, handleGetForecast])

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
