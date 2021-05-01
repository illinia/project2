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
import { withRouter } from 'react-router-dom';

const App = ({ location }) => {
  let pathName = location.pathname.split('/')

  if (pathName[1] === "") {
    pathName = ["", "main"]
  }
  return (
    <>
      <Header category={pathName[1]} />
      <Route component={CommunityPage} path="/community" exact />
      <Route component={InfoPage} path="/infoPage" exact />
      <Route component={LinkPage} path="/pages" exact />
      <Route component={MainPage} path={["/", "/main"]} exact />
      <Route component={NewsPage} path="/news" exact />
      <Route component={VaccinePage} path="/vaccine" exact />
      <Route component={WritePage} path="/write" exact />
      <Route component={PostPage} path="/community/:postId" exact />
    </>
  )
}

export default withRouter(App);