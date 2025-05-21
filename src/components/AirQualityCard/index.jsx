import React from "react"
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { TitleCard } from '../TitleCard'
import AirIcon from '@mui/icons-material/Air'

function getColor(pollutant, value) {
    const limits = {
        co: [4400, 9400, 12400, 15400],   // μg/m3
        no2: [40, 100, 200, 400],         // μg/m3
        o3: [100, 180, 240, 300],         // μg/m3
        so2: [20, 500, 750, 1000],        // μg/m3
        pm2_5: [10, 25, 50, 75],          // μg/m3
        pm10: [20, 50, 100, 150]          // μg/m3
    }

    const [low, moderate, high, veryHigh] = limits[pollutant] || [Infinity, Infinity, Infinity, Infinity]

    if (value <= low) return '#00BFFF'        // Azul Claro
    if (value <= moderate) return '#32CD32'   // Verde
    if (value <= high) return '#FFD700'       // Amarelo
    if (value <= veryHigh) return '#FF8C00'   // Laranja
    return '#FF0000'                          // Vermelho
}

export function AirQualityCard({ air }) {
    if (!air) {
        return (
            <Box className={`${styles.container} shadowCard`}>
                <TitleCard icon={<AirIcon />} title="Air Quality" />
                <Typography variant="body2">Dados indisponíveis.</Typography>
            </Box>
        )
    }

    const data = [
        { label: 'CO', value: air.co, key: 'co' },
        { label: 'NO₂', value: air.no2, key: 'no2' },
        { label: 'O₃', value: air.o3, key: 'o3' },
        { label: 'SO₂', value: air.so2, key: 'so2' },
        { label: 'PM2.5', value: air.pm2_5, key: 'pm2_5' },
        { label: 'PM10', value: air.pm10, key: 'pm10' },
        { label: 'US EPA Index', value: air['us-epa-index'], key: 'epa' },
        { label: 'GB DEFRA Index', value: air['gb-defra-index'], key: 'defra' }
    ]

    return (
        <Box className={`${styles.container} shadowCard`}>
            <TitleCard icon={<AirIcon />} title="Air Quality" />

            <Box display="flex" justifyContent="space-around" mt={2}>
                <Box display="flex" flexDirection="column" gap={1}>
                    {data.slice(0, 4).map((item) => (
                        <Box key={item.label} display="flex" alignItems="center" gap={1}>
                            <Box width={12} height={12} borderRadius="50%" bgcolor={getColor(item.key, item.value)} />
                            <Typography variant="body2">
                                <strong>{item.label}:</strong> {Math.round(item.value)} µg/m³
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box display="flex" flexDirection="column" gap={1}>
                    {data.slice(4).map((item) => (
                        <Box key={item.label} display="flex" alignItems="center" gap={1}>
                            <Box width={12} height={12} borderRadius="50%" bgcolor={getColor(item.key, item.value)} />
                            <Typography variant="body2">
                                <strong>{item.label}:</strong> {Math.round(item.value)}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

AirQualityCard.propTypes = {
    air: PropTypes.shape({
        co: PropTypes.number,
        no2: PropTypes.number,
        o3: PropTypes.number,
        so2: PropTypes.number,
        pm2_5: PropTypes.number,
        pm10: PropTypes.number,
        'us-epa-index': PropTypes.number,
        'gb-defra-index': PropTypes.number
    })
}
