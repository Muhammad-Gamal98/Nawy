import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.9:8080', // Replace with your API base URL
});

export default instance;