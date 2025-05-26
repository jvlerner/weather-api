import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY
if (!apiKey) {
    throw new Error("REACT_APP_WEATHER_API_KEY is not defined");
}

const api = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
    params: {
        'key': apiKey
    }
})

export default api