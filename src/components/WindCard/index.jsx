import React from "react"
import PropTypes from 'prop-types'
import { Box, Divider, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import { TitleCard } from '../TitleCard'
import AirIcon from '@mui/icons-material/Air'
import styles from './styles.module.css'

export function WindCard({ current }) {
    return (
        <Box className={`${styles.container} shadowCard`}>
            <TitleCard title="Wind" icon={<AirIcon />} />

            <Box className={styles.windContent}>
                <Box className={styles.windData}>
                    <Typography variant="body2">
                        Wind: {Math.round(current?.wind_kph)} km/h
                    </Typography>
                    <Divider className={styles.divider} />
                    <Typography variant="body2">
                        Gusts: {Math.round(current?.gust_kph ?? 0)} km/h
                    </Typography>
                    <Divider className={styles.divider} />
                    <Typography variant="body2">
                        Direction: {current?.wind_degree}° {current?.wind_dir}
                    </Typography>
                </Box>


                <Box className={styles.windIcon}>
                    <Typography variant="body1" fontWeight={500}>
                        {Math.round(current?.wind_kph)} km/h
                    </Typography>

                    <NavigationIcon
                        className={styles.arrowIcon}
                        style={{
                            transform: `rotate(${current?.wind_degree}deg)`
                        }}
                        sx={{ fontSize: '3rem' }}
                    />

                    <Typography variant="caption" color="textSecondary">
                        {current?.wind_degree}°
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {current?.wind_dir}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

WindCard.propTypes = {
    current: PropTypes.shape({
        wind_kph: PropTypes.number.isRequired,
        gust_kph: PropTypes.number,
        wind_dir: PropTypes.string.isRequired,
        wind_degree: PropTypes.number.isRequired
    }).isRequired
}
