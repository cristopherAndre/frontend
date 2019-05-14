import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-cris.herokuapp.com',
});

export default api;