import axios from 'axios';
import { constants } from '../utils/constants';

const BASE_URL = constants.api.apiUrl;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${constants.api?.keyV4}`,
  },
});

//Interceptor agregar token
instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${constants.api?.keyV4}`;
    return config;
  },
  (error) => {
    console.log('Interceptor de peticion Axios error', error);
    return Promise.reject(error);
  },
);
export default instance;
