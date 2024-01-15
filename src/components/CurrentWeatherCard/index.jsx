import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export function CurrentWeatherCard({ currentTemp, icon, condition, max, min }) {
    return (
        <Box className={styles.container} >
            <Typography variant="h6" >Current Weather</Typography>
            <Box className={styles.temperature} >
                <Typography className={styles.temp} variant="h2" >
                    {currentTemp}º
                </Typography>

                <img src ={icon} alt="Icon" />
            </Box>
            <Typography variant="h6" >{condition}</Typography>
            <Box className={styles.variant}>
                <Typography variant="subtitle2">Max.: {max}º</Typography>
                <Typography variant="subtitle2">Min.: {min}º</Typography>
            </Box>
        </Box>
    )
}

CurrentWeatherCard.propTypes = {
    currentTemp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}