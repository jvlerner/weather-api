import { Box } from '@mui/material'
import styles from './styles.module.css'
import { TimeForecast } from '../TimeForecast'
import { DaysForecast } from '../DaysForecast'
import { LottieFile } from '../LottieFile'
import lottieCloud from '../../assets/lotties/cloud.json'
import LocationSelect from '../LocationSelect'
import { CurrentWeatherCard } from '../CurrentWeatherCard'
import { WindCard } from '../WindCard'
import { AirQualityCard } from '../AirQualityCard'
import { AirQualityfromWeatherApi, CurrentWeatherfromWeatherApi, ForecastDaysfromWeatherApi, WindfromWeatherApi } from '../../services/adapters'

export function Dashboard({ data }) {
    const mergeArrayHours = (hoursToday, hoursTomorrow) => {
        if (!hoursToday || !hoursTomorrow) return []
        return hoursToday.concat(hoursTomorrow)
    }
    
    const currentWeatherData = CurrentWeatherfromWeatherApi(data)
    const forecastDaysData = ForecastDaysfromWeatherApi(data)
    const airQualityData = AirQualityfromWeatherApi(data)
    const windData = WindfromWeatherApi(data)

    return (
        <Box className={styles.container}>
            <Box className={styles.boxLottieCloud}>
                <LottieFile animationData={lottieCloud} height="100%" width="100%" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 2, fontSize: '25px', fontWeight: 700 }}>
                <LocationSelect />
            </Box>

            <CurrentWeatherCard data={currentWeatherData} />

            <Box className={styles.boxCards}>
                <TimeForecast
                    hours={mergeArrayHours(
                        data?.forecast?.forecastday[0]?.hour,
                        data?.forecast?.forecastday[1]?.hour
                    )}
                />

                <DaysForecast days={forecastDaysData} />

                <Box display='flex' flexDirection='row' justifyContent='space-between' width='100%' gap={2}>
                    <WindCard data={windData} />
                    <AirQualityCard data={airQualityData} />
                </Box>
            </Box>
        </Box>
    )
}
