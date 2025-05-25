import api from "../../services/api";

export function useRequestForecast() {

    const getForecast = async (local, days = 1, hasAirQuality = true, hasAlerts = true) => {
        // Parameter local -> Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name.
        const airQuality = hasAirQuality ? 'yes' : 'no'
        const alerts = hasAlerts ? 'yes' : 'no'

        try {
            const response = await api.get(`/forecast.json?q=${local}&days=${days}&aqi=${airQuality}&alerts=${alerts}`)
    
            return response
        } catch (error) {
            throw error
        }
    }

    return {
        getForecast
    }
}