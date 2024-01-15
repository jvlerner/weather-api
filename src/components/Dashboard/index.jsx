// eslint-disable react-hooks/exhaustive-deps

import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRequestForecast } from '../../hooks/Request/useRequestForecast'
import { CurrentWeatherCard } from '../CurrentWeatherCard'
import styles from './styles.module.css'
import { TimeForecast } from '../TimeForecast'
import { DaysForecast } from '../DaysForecast'
import { LottieFile } from '../LottieFile'
import lottieCloud from '../../assets/lotties/cloud.json'

export function Dashboard() {
    const { getForecast } = useRequestForecast()
    const [response, setResponse] = useState([])

    const handleGetForecast = () => {
        getForecast('Palhoça', 10, true, true).then((response) => {
            const data = response?.data
  
            setResponse(data)
        })
    }

    const mergeArrayHours = (hoursToday, hoursTomorrow) => {
        if (!hoursToday || !hoursTomorrow) {
            return []
        }

        return hoursToday.concat(hoursTomorrow)
    }

    const changeBackgroundNight = () => {
        // if (! response?.current?.is_day) {
        //     return
        // }

        const body = document.querySelector('body')

        const propName = 'background'
        const propValue = 'linear-gradient(90deg, rgba(24,24,24,1) 0%, rgba(26,31,255,1) 100%)'        

        console.log('entrou', body, propValue)

        body.style[propName] = propValue
    }

    const changeBackgroundNight2 = () => {
        // if (! response?.current?.is_day) {
        //     return
        // }

        const body = document.querySelector('body')

        const propName = 'animation'
        const propValue = 'changeBackgroundColor 7s infinite'        

        console.log('2222', body, propValue)

        body.style[propName] = propValue
    }

    useEffect(() => {
        handleGetForecast()

        setTimeout(() => {
            // changeBackgroundNight2()
        }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box className={styles.container}>
            <Box className={styles.boxLottieCloud}>
                <LottieFile animationData={lottieCloud} height="100%" width="100%" />
            </Box>

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
                <TimeForecast
                    hours={mergeArrayHours(response?.forecast?.forecastday[0]?.hour, response?.forecast?.forecastday[1]?.hour)}
                />

                <DaysForecast days={response?.forecast?.forecastday} />
            </Box>
        </Box>
    )
}