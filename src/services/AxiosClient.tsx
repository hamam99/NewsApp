import axios from 'axios';
import env from '../../env.json';

// const BASE_URL = 'https://newsapi.org/v2';
const BASE_URL = env.base_url;
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    console.log('Call API success', {data: response?.data});
    return response;
  },
  function (error) {
    console.log('Call API failed', {error: error?.response});
    return Promise.reject(error);
  },
);

export default axiosClient;
