import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export function HourWeatherCard({ hour, temp }) {
    return (
        <Box className={styles.container} >
            <Typography variant="h2" >
                {temp} º
            </Typography>
            <Typography variant="h6" >{hour}</Typography>
          
        </Box>
    )
}

HourWeatherCard.propTypes = {
    temp: PropTypes.number.isRequired,
    hour: PropTypes.number.isRequired
}