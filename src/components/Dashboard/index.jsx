// eslint-disable react-hooks/exhaustive-deps

import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRequestForecast } from '../../hooks/Request/useRequestForecast'
import { CurrentWeatherCard } from '../CurrentWeatherCard'
import styles from './styles.module.css'
import { TimeForecast } from '../TimeForecast'
import { DaysForecast } from '../DaysForecast'

export function Dashboard() {
    const { getForecast } = useRequestForecast()
    const [response, setResponse] = useState([])

    const handleGetForecast = () => {
        getForecast('Palhoça', 10, true, true).then((response) => {
            const data = response?.data
  
            setResponse(data)
        })
    }

    useEffect(() => {
        handleGetForecast()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box className={styles.container}>
            <Box sx={{ display:'flex', flexDirection:'column', marginTop: 2, fontSize: '25px', fontWeight: 700 }}>
                {response.location?.name} - {response.location?.region}
            </Box>

            <CurrentWeatherCard
                condition={response?.current?.condition?.text ?? ''}
                currentTemp={response.current?.temp_c ?? 0}
                icon={response.current?.condition?.icon ?? ''}
                max={response?.forecast?.forecastday[0]?.day.maxtemp_c ?? 0}
                min={response?.forecast?.forecastday[0]?.day.mintemp_c ?? 0}
            />

            <Box className={styles.boxCards}>
                <TimeForecast hours={response?.forecast?.forecastday[0]?.hour} />

                <DaysForecast days={response?.forecast?.forecastday} />
            </Box>
        </Box>
    )
}