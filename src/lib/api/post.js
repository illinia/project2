import client from './client';
import qs from 'qs';

// 글쓰기 (제목, 내용, 작성자, 비밀번호)
export const writePost = ({ title, content, name, pass }) => {
  const queryString = qs.stringify({
    title, content, name, pass
  })
  return client.post(`http://localhost:8080/WebProject/community/post?${queryString}`)
}

// 댓글쓰기 (게시글 번호, 작성자, 내용, 비밀번호)
export const writeReply = ({ boardno, name, content, pass }) => {
  const queryString = qs.stringify({
    boardno, name, content, pass
  })
  return client.post(`http://localhost:8080/WebProject/community/post/reply?${queryString}`)
}

// 게시글 상세보기
export const readPost = no =>
  client.get(`http://localhost:8080/WebProject/community/post/${no}`);

// 전체 게시글 보기(페이지 번호, 검색 타입, 검색 키워드)
export const listPosts = ({ pagenum, type, keyword }) => {
  const queryString = qs.stringify({
    pagenum,
    type,
    keyword,
  })
  return client.get(`http://localhost:8080/WebProject/community?${queryString}`);
}

// 게시글 업데이트 (게시글 번호, 제목, 내용, 비밀번호)
export const updatePost = ({ no, title, content, pass }) => {
  const queryString = qs.stringify({
    title, content, pass
  })
  return client.post(`http://localhost:8080/WebProject/community/post/${no}?${queryString}`)
}

// 댓글 업데이트 (댓글 번호, 내용, 비밀번호확인)
export const updateReply = ({ replyNo, contentUpdate, passUpdate }) =>
  client.post(`http://localhost:8080/WebProject/community/post/reply/${replyNo}?content=${contentUpdate}&pass=${passUpdate}`)

// 게시글 삭제 (게시글 번호, 비밀번호확인)
export const removePost = ({ no, pass }) => {
  const queryString = qs.stringify({
    pass
  })
  return client.delete(`http://localhost:8080/WebProject/community/post/${no}?${queryString}`)
}

// 댓글 삭제 (댓글 번호, 비밀번호 확인)
export const replyDelete = ({ replyNo, pass }) => {
  const queryString = qs.stringify({
    pass
  })
  return client.delete(`http://localhost:8080/WebProject/community/post/reply/${replyNo}?${queryString}`)
}