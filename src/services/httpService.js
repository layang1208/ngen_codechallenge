import axios from 'axios';

export const HTTP = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: process.env.VUE_APP_API_DEFAULT_TIMEOUT,
})