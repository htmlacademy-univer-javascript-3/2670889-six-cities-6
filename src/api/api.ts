import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: 'https://14.design.htmlacademy.pro/six-cities',
    timeout: 5000,
  });

  return api;
};
