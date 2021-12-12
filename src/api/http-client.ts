import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

 export const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 1000,
});
