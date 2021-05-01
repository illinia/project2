import React from 'react';
import Menu from '../common/Menu';
import NewsList from '../components/news/NewsList';

const NewsPage = () => {
  return (
    <>
      <Menu>실시간 관련뉴스</Menu>
      <NewsList />
    </>
  )
}

export default NewsPage;