import axios from 'axios';
import { getToken } from '../utils/helper';

const Axios = axios.create({
    baseURL: 'http://localhost:5000/'
})

Axios.interceptors.request.use(async (config) => {
    const token = getToken();
    const configuration = config;
    if(token){
        configuration.headers.Authorization = `Bearer ${token}`
    }
    return configuration
})

export default Axios;