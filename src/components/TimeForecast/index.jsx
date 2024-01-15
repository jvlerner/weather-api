import React from "react"
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/material'
import { HourWeatherCard } from "../HourWeatherCard"
import { TitleCard } from '../TitleCard'

export function TimeForecast({ hours }) {
    return (
        <Box className={`${styles.containerHour} shadowCard`}>
            <TitleCard
                icon={<AccessTimeIcon />}
                title="Time Forecast"
            />

            <Box
                className={styles.scrollHour}
                sx={{ display:'flex', overflowX:'auto' }}
            >

            {hours?.map((hour, index) => {
                return (
                    <HourWeatherCard
                        key={index}
                        isDay={hour?.is_day}
                        icon={hour?.condition?.icon}
                        hour={hour.time.slice(11, 13)}
                        temp={parseInt(hour.temp_c)}
                    />
                )
            })}
            </Box>
        </Box>
    )
}

TimeForecast.propTypes = {
    hours: PropTypes.instanceOf(Array)
}

TimeForecast.defaultProps = {
    hours: []
}