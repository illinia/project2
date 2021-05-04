import React from 'react';
import styled from 'styled-components';
import Loading from '../../common/Loading';
import Menu from '../../common/Menu';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import ReplyShowBox from './ReplyShowBox';
import ReplyWriteBox from './ReplyWriteBox';

const PostViewerBlock = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${palette.gray[2]};
  margin-bottom: 1rem;
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {


  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>
  }

  if (loading || !post) {
    return (
      <Loading />
    )
  }

  const { title, content, name, regDate } = post;

  return (
    <>
      <Menu>게시글 상세보기</Menu>
      <PostViewerBlock>
        <PostHead>
          <h1>{title}</h1>
          <SubInfo
            name={name}
            regDate={regDate}
            hasMarginTop
          />
        </PostHead>
        {actionButtons}
        <PostContent>{content}</PostContent>
        <ReplyWriteBox />
        <ReplyShowBox />
      </PostViewerBlock>
    </>
  )
}

export default PostViewer;