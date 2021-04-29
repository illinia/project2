import client from './client';

export const write = ({ title, body, writer, password }) =>
  client.post('http://localhost:8080/posts')