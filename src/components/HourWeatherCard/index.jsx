import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export function HourWeatherCard({ icon, hour, temp }) {
    return (
        <Box className={styles.container} >
            <Typography variant="caption">
                {hour}
            </Typography>

            <img className={styles.icon} src={icon} alt="icon" />

            <Typography variant="subtitle2" >
                {temp}º
            </Typography>
        </Box>
    )
}

HourWeatherCard.propTypes = {
    icon: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
}