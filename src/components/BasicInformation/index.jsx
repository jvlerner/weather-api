// eslint-disable react-hooks/exhaustive-deps

import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRequestCurrent } from '../../hooks/Request/useRequestCurrent'
import { CurrentWeatherCard } from '../CurrentWeatherCard'
import { HourWeatherCard } from '../HourWeatherCard'

export function BasicInformation() {
    const { getCurrent } = useRequestCurrent()
    const [location, setLocation] = useState([])

    useEffect(() => {
        getCurrent('Palhoça', 'yes').then((response) => {
          const data = response?.data

          setLocation(data.location)
        })
    }, [])

    return (
        <Box sx={{display:"flex",flexDirection:"column", alignItems:"center", margin:"10px"}}>
            {location?.name} - {location?.region}

            <CurrentWeatherCard
                condition='Clear'
                currentTemp={30}
                max = {32}
                min = {22}
            />
            <HourWeatherCard 
                hour={24}
                temp={32}
            />
            
        </Box>
    )
}