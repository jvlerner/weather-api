import geoapi from "../../services/geoapi";

export function useRequestCompleteLocation() {

    const getCompleteLocation = async ( text ) => {
        
        try {
            const response = await geoapi.get(`geocode/autocomplete?text=${text}&lang=en&limit=3&type=city&format=json`)
            return response
        } catch (error) {
            return error
        }
    }

    return {
        getCompleteLocation
    }
}
