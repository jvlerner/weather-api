import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        'key': 'ed5cb95f8ee0401e800220140241201' 
    }
})

export default api