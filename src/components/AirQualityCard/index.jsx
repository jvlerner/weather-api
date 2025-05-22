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

export function AirQualityCard({ data }) {
    if (!data) {
        return (
            <Box className={`${styles.container} shadowCard`}>
                <TitleCard icon={<AirIcon />} title="Air Quality" />
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Typography variant="body2">No data available</Typography>
                </Box>
            </Box>
        )
    }

    const {
        co,
        no2,
        o3,
        so2,
        pm25,
        pm10,
        usEpaIndex,
        gbDefraIndex
    } = data

    const airData = [
        { label: 'CO', value: co, key: 'co' },
        { label: 'NO₂', value: no2, key: 'no2' },
        { label: 'O₃', value: o3, key: 'o3' },
        { label: 'SO₂', value: so2, key: 'so2' },
        { label: 'PM2.5', value: pm25, key: 'pm25' },
        { label: 'PM10', value: pm10, key: 'pm10' },
        { label: 'US EPA Index', value: usEpaIndex, key: 'epa' },
        { label: 'GB DEFRA Index', value: gbDefraIndex, key: 'defra' }
    ]

    return (
        <Box className={`${styles.container} shadowCard`}>
            <TitleCard icon={<AirIcon />} title="Air Quality" />

            <Box display="flex" justifyContent="space-between" flexWrap="wrap" p={2} gap={1}>
                <Box display="flex" flexDirection="column" gap={1} minWidth="120px">
                    {airData.slice(0, 4).map((item) => (
                        <Box key={item.label} display="flex" alignItems="center" gap={1}>
                            <Box width={12} height={12} borderRadius="50%" bgcolor={getColor(item.key, item.value)} />
                            <Typography variant="body2">
                                {item.label}: {Math.round(item.value ?? 0)} µg/m³
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box display="flex" flexDirection="column" gap={1} minWidth="120px">
                    {airData.slice(4).map((item) => (
                        <Box key={item.label} display="flex" alignItems="center" gap={1}>
                            <Box width={12} height={12} borderRadius="50%" bgcolor={getColor(item.key, item.value)} />
                            <Typography variant="body2">
                                {item.label}: {Math.round(item.value ?? 0)}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

AirQualityCard.propTypes = {
    data: PropTypes.shape({
        co: PropTypes.number.isRequired,
        no2: PropTypes.number.isRequired,
        o3: PropTypes.number.isRequired,
        so2: PropTypes.number.isRequired,
        pm25: PropTypes.number.isRequired,
        pm10: PropTypes.number.isRequired,
        usEpaIndex: PropTypes.number.isRequired,
        gbDefraIndex: PropTypes.number.isRequired
    }).isRequired
}
