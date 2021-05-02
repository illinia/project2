import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';
import Loading from '../../common/Loading';

const PostListBlock = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 1rem;
  transition: 0.3s ease-in;
  @media (max-width: 730px) {
    width: calc(100% - 50px)
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  p {
    margin-top: 0.5rem;
  }
`;

const TitleBlock = styled(Link)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 0;
  height: 1.375rem;
  overflow: hidden;
  &:hover {
    color: ${palette.gray[6]};
    cursor: pointer;
  }
`;

const PostItem = ({ post }) => {
  const { regDate, name, title, content, no } = post

  return (
    <PostItemBlock>
      <TitleBlock to={`/community/post/${no}`}>{title}</TitleBlock>
      <SubInfo no={no} name={name} regDate={new Date(regDate)} />
      <p>{content}</p>
    </PostItemBlock>
  )
}

const PostList = ({ posts, loading, error }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to="/community/write">
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts["boardList"].map(post => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  )
}

export default PostList;