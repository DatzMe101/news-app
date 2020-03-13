import axios from 'axios';

const API_KEY = '290db0c2df3d4841860b392712d56f57';
const BASE_URL = 'http://newsapi.org/v2';

export default axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
});
