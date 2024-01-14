import api from "../../services/api";

export function useRequestCurrent() {

    const getCurrent = async (local, hasAirQuality = true) => {
        // Parameter local -> Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name.
        // Parameter hasAirQuality -> Get air quality data

        const airQuality = hasAirQuality ? 'yes' : 'no'

        try {
            const response = await api.get(`/current.json?q=${local}&aqi=${airQuality}`)
    
            return response
        } catch (error) {
            return error
        }
    }

    return {
        getCurrent
    }
}