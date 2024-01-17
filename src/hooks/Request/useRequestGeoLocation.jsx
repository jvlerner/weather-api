import geoapi from "../../services/geoapi";

export function useRequestGeoLocation() {

    const getGeoLocation = async (latitude, longitude) => {
        
        try {
            const response = await geoapi.get(`/geocode/reverse?lat=${latitude}&lon=${longitude}`)
            return response
        } catch (error) {
            return error
        }
    }

    return {
        getGeoLocation
    }
}