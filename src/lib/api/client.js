import axios from 'axios';

const client = axios.create({
  responseType: 'json',
});

export default client;