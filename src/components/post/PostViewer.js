import userEvent from '@testing-library/user-event';
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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

const SubInfo = styled.div`
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\|';
  }
`;

const PostContent = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>
  }

  if (loading || !post) {
    return null;
  }

  const { title, content, name, regDate } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{name}</b>
          </span>
          <span>{new Date(regDate).toLocaleDateString()}</span>
        </SubInfo>
      </PostHead>
      <PostContent>{content}</PostContent>
    </PostViewerBlock>
  )
}

export default PostViewer;