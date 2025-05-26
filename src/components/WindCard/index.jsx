import React from "react"
import PropTypes from 'prop-types'
import { Box, Divider, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import { TitleCard } from '../TitleCard'
import AirIcon from '@mui/icons-material/Air'
import styles from './styles.module.css'

export function WindCard({ data }) {
    const {
        windKph,
        gustKph,
        windDir,
        windDegree
    } = data

    return (
        <Box className={`${styles.container} shadowCard`}>
            <TitleCard title="Wind" icon={<AirIcon />} />

            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                p={2}
                gap={1}
            >
                <Box
                    flex="1 1 120px"
                    display="flex"
                    flexDirection="column"
                    gap={1}
                >
                    <Typography variant="body2">
                        Wind: {Math.round(windKph ?? 0)} km/h
                    </Typography>
                    <Divider className={styles.divider} sx={{ width: '100%' }} />
                    <Typography variant="body2">
                        Gusts: {Math.round(gustKph ?? 0)} km/h
                    </Typography>
                    <Divider className={styles.divider} sx={{ width: '100%' }} />
                    <Typography variant="body2">
                        Direction: {windDegree ?? 0}° {windDir ?? ''}
                    </Typography>
                </Box>

                <Box
                    flex="1 1 120px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={1}
                    >
                        <Typography variant="body2" fontWeight={500}>
                            {Math.round(windKph ?? 0)} km/h
                        </Typography>

                        <NavigationIcon
                            className={styles.arrowIcon}
                            style={{ transform: `rotate(${windDegree ?? 0}deg)` }}
                            sx={{ fontSize: '2.5rem' }}
                        />

                        <Typography variant="caption" color="textSecondary">
                            {windDegree ?? 0}°
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {windDir ?? ''}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

WindCard.propTypes = {
    data: PropTypes.shape({
        windKph: PropTypes.number.isRequired,
        gustKph: PropTypes.number,
        windDir: PropTypes.string.isRequired,
        windDegree: PropTypes.number.isRequired
    }).isRequired
}
