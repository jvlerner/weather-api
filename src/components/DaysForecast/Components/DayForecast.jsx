import React from "react"
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import styles from '../styles.module.css'

const DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function DayForecast({ date, icon, minTemp, maxTemp, chanceOfRain }) {
    const dateForecast = new Date(date)
    const dayOfTheWeek = dateForecast.getUTCDay()

    const currentDate = new Date()
    const currentDay = currentDate.getUTCDay()

    return (
        <Box
            display="flex"
            gap={2}
            justifyContent="space-around"
            alignItems="center"
        >
            <Box width="100px">
                {dayOfTheWeek === currentDay ? 'Today' : DAYS_OF_THE_WEEK[dayOfTheWeek]}
            </Box>
            
            <Box className={styles.rowChanceOfRain}>
                <img src={icon} width="30px" alt="Icon" />

                { chanceOfRain > 0 ? (
                    <Box className={styles.labelChanceOfRain}>
                        { chanceOfRain }%
                    </Box>
                ) : '' }
            </Box>

            <Box display="flex" alignItems="center">
                { minTemp }
                <hr className={styles.linhaMinMaxTemp}></hr>
                { maxTemp }
            </Box>

        </Box>
    )
}

DayForecast.propTypes = {
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    chanceOfRain: PropTypes.number.isRequired
}

DayForecast.defaultProps = {

}