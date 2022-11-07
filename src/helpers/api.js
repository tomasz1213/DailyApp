import axios from 'axios';
import { store } from 'store/reducer/root';

const instance = axios.create({
  baseURL: 'http://192.168.8.168:5000/api/',
  withCredentials: false,
});
instance.interceptors.request.use(function (config) {
  config.headers.Authorization =
    `BARE ${store?.getState()?.user?.data?.token}` || '';

  return config;
});

export const apiRequest = (method, url, data = undefined) => {
  return instance
    .request({
      method,
      url,
      data,
    })
    .catch(error => {
      throw new Error(error);
    });
};
