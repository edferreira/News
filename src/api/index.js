import axios from 'axios';

const baseURL = 'https://newsapi.org/v2/'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': '82744283f47b427a919cede80c61d6af',
  },
});

export default axiosInstance;
