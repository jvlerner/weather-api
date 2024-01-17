import axios from "axios";

const geoapi = axios.create({
    baseURL: 'https://api.geoapify.com/v1',
    params: {
        'apiKey': 'da97553c8fef4730bbaf830a4ea2564f' 
    }
})

export default geoapi