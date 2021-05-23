import React from 'react';
import Menu from '../common/Menu';
import NewsList from '../components/news/NewsList';

// 뉴스 api 페이지
const NewsPage = () => {
  return (
    <>
      <Menu>실시간 관련뉴스</Menu>
      <NewsList />
    </>
  )
}

export default NewsPage;