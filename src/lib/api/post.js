import client from './client';
import qs from 'qs';

export const writePost = ({ title, content, name, pass }) => {
  const queryString = qs.stringify({
    title, content, name, pass
  })
  return client.post(`/lulu/community/post?${queryString}`)
}

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

export const updatePost = ({ no, title, content, pass }) => {
  const queryString = qs.stringify({
    title, content, pass
  })
  return client.post(`/lulu/community/post/${no}?${queryString}`)
}

export const removePost = ({ no, pass }) => {
  const queryString = qs.stringify({
    pass
  })
  return client.delete(`/lulu/community/post/${no}?${queryString}`)
}

//localhost:8080/lulu/community?pagenum=1&type=title&keyword=테스