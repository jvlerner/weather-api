import React from "react"
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { DateTime } from 'luxon'
import styles from '../styles.module.css'

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function DayForecast({ day, index }) {
    const { date, maxTemp, minTemp, condition, dailyChanceOfRain} = day

    const dateForecast = DateTime.fromISO(date, { zone: "America/Sao_Paulo" })
    const dayOfTheWeek = dateForecast.weekday % 7 
    const dayOfMonth = dateForecast.day

    const currentDate = new Date()
    const currentDay = currentDate.getDate()

    return currentDay <= dayOfMonth ? (
        <Box
            display="flex"
            gap={1}
            justifyContent="space-between"
            alignItems="center"
            key={index}
        >
            <Box minWidth="150px">
                {dayOfMonth === currentDay ? 'Today, '+ currentDay : daysOfTheWeek[dayOfTheWeek] + ", " + dayOfMonth}
            </Box>

            <Box className={styles.rowChanceOfRain}>
                <img src={condition?.icon} width="30px" alt="Icon" />
                
                <Box className={styles.labelChanceOfRain}>
                    {Math.round(dailyChanceOfRain)}%
                </Box>
            </Box>

            <Box display="flex" alignItems="center" justifyContent={"center"} minWidth={"150px"}>
                { Math.round(minTemp) }º
                <hr className={styles.linhaMinMaxTemp}></hr>
                { Math.round(maxTemp) }º
            </Box>
        </Box>
    ) : null
}

DayForecast.propTypes = {
    day: PropTypes.shape({
        date: PropTypes.string.isRequired,
        maxTemp: PropTypes.number,
        minTemp: PropTypes.number,
        condition: PropTypes.shape({
            icon: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
        dailyChanceOfRain: PropTypes.number
    }).isRequired,
    index: PropTypes.number.isRequired
}
