import axios from 'axios';

const API_URL = 'http://localhost:4001/api/auth/';

export const userRegister = (name, email, password) => {
  return axios.post(API_URL + 'register', { name, email, password });
};

export const LoginUser = (email, password) => {
  return axios.post(API_URL + 'login', { email, password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response;
    });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {LoginUser, logout };

