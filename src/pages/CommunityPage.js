import React from 'react';
import Menu from '../common/Menu';
import PostList from '../components/posts/PostList';

const CommunityPage = ({ Header }) => {
  return (
    <>
      <Menu>커뮤니티</Menu>
      <PostList />
    </>
  )
}

export default CommunityPage;