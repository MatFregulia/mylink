import axios from 'axios';

export const key = 'fc242cc841cd565469940aaeef6879c5830aa77a'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization' : `Bearer ${key}`
    }
})

export default api;