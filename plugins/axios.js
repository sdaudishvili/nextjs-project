import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const restApi = axios.create({
    baseURL: `http://localhost:3001/api/`
});

restApi.interceptors.request.use((config) => {
    const token = cookies.get('testUser');
    if (token !== undefined) {
        // eslint-disable-next-line no-param-reassign
        config.headers.common.Authorization = token;
    }
    return config;
});

export default restApi;
