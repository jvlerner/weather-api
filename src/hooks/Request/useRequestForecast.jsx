import api from "../../services/api";

export function useRequestForecast() {

    const getForecast = async (local, hasAirQuality = true, hasAlerts = true) => {
        // Parameter local -> Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name.
        // Parameter hasAirQuality -> Get air quality data
        // Parameter hasAlerts -> Get weather alert data

        const airQuality = hasAirQuality ? 'yes' : 'no'
        const alerts = hasAlerts ? 'yes' : 'no'

        try {
            const response = await api.get(`/forecast.json?q=${local}&aqi=${airQuality}&alerts=${alerts}`)
    
            return response
        } catch (error) {
            return error
        }
    }

    return {
        getForecast
    }
}