import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.2.8:2020'
})

export default api;