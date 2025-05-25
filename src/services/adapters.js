
export function AirQualityfromWeatherApi(data) {
    return {
        co: data?.current?.air_quality?.co ?? 0,
        no2: data?.current?.air_quality?.no2 ?? 0,
        o3: data?.current?.air_quality?.o3 ?? 0,
        so2: data?.current?.air_quality?.so2 ?? 0,
        pm25: data?.current?.air_quality?.pm2_5 ?? 0,
        pm10: data?.current?.air_quality?.pm10 ?? 0,
        usEpaIndex: data?.current?.air_quality?.['us-epa-index'] ?? 0,
        gbDefraIndex: data?.current?.air_quality?.['gb-defra-index'] ?? 0
    }
}

export function WindfromWeatherApi(data) {
    return {
        windKph: data?.current?.wind_kph ?? 0,
        gustKph: data?.current?.gust_kph ?? 0,
        windDir: data?.current?.wind_dir ?? 'N',
        windDegree: data?.current?.wind_degree ?? 0
    }
}

export function CurrentWeatherfromWeatherApi(data) {
    return {
        condition: data?.current?.condition?.text || 'N/A',
        currentTemp: data?.current?.temp_c || 0,
        max: data?.forecast?.forecastday[0]?.day?.maxtemp_c || 0,
        min: data?.forecast?.forecastday[0]?.day?.mintemp_c || 0,
        icon: data?.current?.condition?.icon || ''
    }
}

export function ForecastDaysfromWeatherApi(data) {
    const forecastDays = data?.forecast?.forecastday || []

    return forecastDays.map(days => ({
        date: days.date || 'N/A',
        maxTemp: days.day?.maxtemp_c ?? 0,
        minTemp: days.day?.mintemp_c ?? 0,
        condition: {
            text: days.day?.condition?.text ?? '',
            icon: days.day?.condition?.icon ?? ''
        },
        dailyChanceOfRain: days.day?.daily_chance_of_rain ?? 0
    }))
}

