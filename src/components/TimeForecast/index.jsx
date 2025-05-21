import React from "react"
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/material'
import { HourWeatherCard } from "../HourWeatherCard"
import { TitleCard } from '../TitleCard'

export function TimeForecast({ hours }) {
    let currentHour = new Date().getHours()
    return (
        <Box className={`${styles.containerHour} shadowCard`}>
            <TitleCard
                icon={<AccessTimeIcon />}
                title="Time Forecast"
            />

            <Box
                className={styles.scrollHour}
                sx={{ display: 'flex', overflowX: 'auto' }}
            >

                {hours?.map((hour, index) => {
                    if (index < currentHour) return null;

                    const hour24 = parseInt(hour.time.slice(11, 13));
                    const period = hour24 >= 12 ? 'PM' : 'AM';
                    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

                    return (
                        <HourWeatherCard
                            key={index}
                            isDay={hour?.is_day}
                            icon={hour?.condition?.icon}
                            hour={index === currentHour ? "Now" : `${hour12}${period}`}
                            temp={parseInt(hour.temp_c)}
                        />
                    );
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