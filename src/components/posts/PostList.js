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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SearchBox = styled.div`
  width: 270px;
  height: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
  }
`;

const SearchTypeBox = styled.select`
  width: 70px;
  height: 20px;
  outline: none;
  border: none;
`;

const SearchInput = styled.input`
  width: 150px;
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};

  &:active{
    background: none;
  }

  @media (max-width: 500px) {
    width: 100px;
  }
`;

const SearchButton = styled(Button)`
  width: 50px;
  height: 25px;
  padding: 0;
  font-size: 0.875rem;
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
  const { regDate, name, title, content, no, cnt } = post;

  return (
    <PostItemBlock>
      <TitleBlock to={`/community/post/${no}`}>{title}</TitleBlock>
      <SubInfo no={no} name={name} regDate={new Date(regDate)} cnt={cnt} />
      <p>{content}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, SearchChange, onSubmit, searchButtonToggle }) => {
  if (error) {
    return <PostListBlock>
      {console.error(error)}
    </PostListBlock>
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <SearchBox>
          <SearchTypeBox
            onChange={SearchChange}
            name="type"
          >
            <option defaultValue value="title">제목</option>
            <option value="name">글쓴이</option>
            <option value="content">내용</option>
          </SearchTypeBox>
          <SearchInput
            onChange={SearchChange}
            name="keyword"
            placeholder="키워드 검색"
          />
          <SearchButton
            to={onSubmit()}
            disabled={!searchButtonToggle}
          >
            검색
          </SearchButton>
        </SearchBox>
        <Button cyan to="/community/write" style={{ minWidth: "125px", minHeight: "27px" }}>
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

export default React.memo(PostList);