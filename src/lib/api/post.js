import client from './client';

export const write = ({ title, content, name, pass }) =>
  client.post('http://localhost:8080/posts')

export const readPost = id => client.get(`http://localhost:8080/posts?id=${id}`);