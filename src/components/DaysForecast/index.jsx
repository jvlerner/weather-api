import React from "react"
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box } from '@mui/material'
import { TitleCard } from '../TitleCard'
import { DayForecast } from "./Components/DayForecast";

export function DaysForecast({ days }) {
    return (
        <Box className={`${styles.container} shadowCard`}>
            <TitleCard
                icon={<CalendarMonthIcon />}
                title="3-Days Forecast"
            />
            <Box className={styles.listDaysForecast} p={2}>
                {days.map((day, index) => (
                    <DayForecast key={index} day={day} index={index} />
                ))}
            </Box>
        </Box>
    )
}

DaysForecast.propTypes = {
    days: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        maxTemp: PropTypes.number.isRequired,
        minTemp: PropTypes.number.isRequired,
        condition: PropTypes.shape({
            text: PropTypes.string,
            icon: PropTypes.string
        }).isRequired,
        dailyChanceOfRain: PropTypes.number
    }))
}

DaysForecast.defaultProps = {
    days: []
}
