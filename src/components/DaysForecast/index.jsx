import React from "react"
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box } from '@mui/material'
import { TitleCard } from '../TitleCard'
import { DayForecast } from "./Components/DayForecast";

export function DaysForecast({ days }) {
    return (
        <Box className={styles.container}>
            <TitleCard
                icon={<CalendarMonthIcon />}
                title="Days Forecast"
            />

            <Box
                display="flex"
                gap={2}
                flexDirection="column"
            >
                {days?.map((day, index) => {
                    return (
                        <DayForecast
                            key={index}
                            date={day.date}
                            icon={day.day.condition.icon}
                            maxTemp={parseInt(day.day.maxtemp_c)}
                            minTemp={parseInt(day.day.mintemp_c)}
                            chanceOfRain={day.day?.daily_will_it_rain ? day.day?.daily_chance_of_rain :  0}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}

DaysForecast.propTypes = {
    days: PropTypes.instanceOf(Array)
}

DaysForecast.defaultProps = {
    days: []
}