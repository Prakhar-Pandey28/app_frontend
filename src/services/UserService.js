import axios from 'axios';

const API_BASE_URL = 'mongodb+srv://prakhar2811:03122811@cluster0.6c2zrzq.mongodb.net/'; // Replace with your backend URL

export default {
  login(credentials) {
    return axios.post(`${API_BASE_URL}/auth/login`, credentials);
  },

  signup(userData) {
    return axios.post(`${API_BASE_URL}/auth/signup`, userData);
  },

  // Add other user-related API calls as needed
};
