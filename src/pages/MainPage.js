import React from 'react';
import Board from '../components/main/Board';
import SeoulPage from '../components/main/SeoulPage';
import { Route } from 'react-router-dom';
import DetailTab from '../components/main/DetailTab';
import KoreaPage from '../components/main/KoreaPage';
import WorldPage from '../components/main/WorldPage';

const MainPage = ({ match, location }) => {
  const category = location.pathname
  return (
    <>
      <Board boardtitle="코로나 19 실시간 현황" subtitle="코로나 테스트" />
      <DetailTab category={category} />
      {match.path === "/" && <SeoulPage />}
      <Route path={`${match.path}/seoul`} component={SeoulPage} />
      <Route path={`${match.path}/korea`} component={KoreaPage} />
      <Route path={`${match.path}/world`} component={WorldPage} />
    </>
  )
}

export default MainPage;