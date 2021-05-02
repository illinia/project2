import client from './client';
import qs from 'qs';

export const writePost = ({ title, content, name, pass }) =>
  client.post(`/lulu/write`, { title, content, name, pass })

export const readPost = no =>
  client.get(`/lulu/community/post/${no}`);

export const listPosts = ({ pagenum, type, keyword }) => {
  const queryString = qs.stringify({
    pagenum,
    type,
    keyword,
  })
  return client.get(`/lulu/community?${queryString}`);
}

export const updatePost = ({ no, title, content }) =>
  client.patch(`/lulu/community/post/${no}`, {
    title, content
  })

//localhost:8080/lulu/community?pagenum=1&type=title&keyword=테스