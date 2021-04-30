import React from 'react';
import { Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import InfoPage from './pages/InfoPage';
import LinkPage from './pages/LinkPage';
import MainPage from './pages/MainPage';
import VaccinePage from './pages/VaccinePage';
import NewsPage from './pages/NewsPage';
import Header from './common/Header';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Header />
      <Route component={CommunityPage} path="/community" exact />
      <Route component={InfoPage} path="/infoPage" />
      <Route component={LinkPage} path="/pages" />
      <Route component={MainPage} path={["/", "/main"]} exact />
      <Route component={NewsPage} path="/news" />
      <Route component={VaccinePage} path="/vaccine" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/community/posts?:postId" />
    </>
  )
}

export default App;