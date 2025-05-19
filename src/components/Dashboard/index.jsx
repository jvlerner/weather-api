// eslint-disable react-hooks/exhaustive-deps

import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useRequestForecast } from '../../hooks/Request/useRequestForecast'
import { useRequestGeoLocation } from '../../hooks/Request/useRequestGeoLocation'
import { CurrentWeatherCard } from '../CurrentWeatherCard'
import styles from './styles.module.css'
import { TimeForecast } from '../TimeForecast'
import { DaysForecast } from '../DaysForecast'
import { LottieFile } from '../LottieFile'
import lottieCloud from '../../assets/lotties/cloud.json'
import LocationSelect from '../LocationSelect'
import { LocationContext } from '../../contexts/LocationContext';

export function Dashboard() {
    const { getForecast } = useRequestForecast()
    const { getGeoLocation } = useRequestGeoLocation()
    const [response, setResponse] = useState([])
    const { location, setLocation } = useContext(LocationContext)

    const requestGetForecast = (locationRequest) => {
        getForecast(locationRequest, 10, true, true).then((response) => {
            const data = response?.data
            setResponse(data)
        })
    }

    const handleGetForecast = () => {
        const currentLocation = (position) => {
            getGeoLocation(position.coords.latitude, position.coords.longitude).then(response => {
                const city = response?.data?.features[0].properties.city

                setLocation(city)
                requestGetForecast(city)
            })
        }

        if (navigator.geolocation === !undefined || !location) {
            navigator.geolocation.getCurrentPosition(currentLocation)
            return
        }

        requestGetForecast(location)
    }


    const mergeArrayHours = (hoursToday, hoursTomorrow) => {
        if (!hoursToday || !hoursTomorrow) {
            return []
        }

        return hoursToday.concat(hoursTomorrow)
    }

    useEffect(() => {
        handleGetForecast()
        if (!location || location.length === 0) {
            return
        }

        requestGetForecast(location)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <Box className={styles.container}>
            <Box className={styles.boxLottieCloud}>
                <LottieFile animationData={lottieCloud} height="100%" width="100%" />
            </Box>

            <Box sx={{ display: 'flex', alignItems:'center', flexDirection: 'column', marginTop: 2, fontSize: '25px', fontWeight: 700 }}>
              <LocationSelect/>
            </Box>

            <CurrentWeatherCard
                condition={response?.current?.condition?.text ?? ''}
                currentTemp={response.current?.temp_c ?? 0}
                icon={response.current?.condition?.icon ?? ''}
                max={response?.forecast?.forecastday[0]?.day.maxtemp_c ?? 0}
                min={response?.forecast?.forecastday[0]?.day.mintemp_c ?? 0}
            />

            <Box className={styles.boxCards}>
                <TimeForecast
                    hours={mergeArrayHours(response?.forecast?.forecastday[0]?.hour, response?.forecast?.forecastday[1]?.hour)}
                />

                <DaysForecast days={response?.forecast?.forecastday} />
                <Box display='flex'>
                   
                </Box>
            </Box>
        </Box>
    )
}