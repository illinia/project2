import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const PostListBlock = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 1rem;
  transition: 0.3s ease-in;
  @media (max-width: 800px) {
    width: calc(100% - 50px)
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const PostItemblock = styled.div`
  padding-top: 3rem;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
    height: 1.125rem;
    overflow: hidden;
    &:hover {
      color: ${palette.gray[6]};
      cursor: pointer;
    }
  }
  p {
    margin-top: 0.5rem;
  }
`;

const SubInfo = styled.div`
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\|';
  }
`;

const PostItem = () => {
  return (
    <PostItemblock>
      <h2>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</h2>
      <SubInfo>
        <span>
          <b>username</b>
        </span>
        <span>{new Date().toLocaleDateString()}</span>
      </SubInfo>
      <p>포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용</p>
    </PostItemblock>
  )
}

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  )
}

export default PostList;