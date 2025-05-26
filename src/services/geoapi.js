import axios from "axios"

const apiKey = process.env.REACT_APP_GEO_API_KEY
if (!apiKey) {
    throw new Error("REACT_APP_GEO_API_KEY is not defined");
}

const geoapi = axios.create({
    baseURL: 'https://api.geoapify.com/v1',
    params: {
        apiKey: apiKey
    }
})

export default geoapi
