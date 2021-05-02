import React from 'react';
import Menu from '../common/Menu';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const CommunityPage = ({ Header }) => {
  return (
    <>
      <Menu>커뮤니티</Menu>
      <PostListContainer />
      <PaginationContainer />
    </>
  )
}

export default CommunityPage;