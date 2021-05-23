import React from 'react';
import Board from '../components/main/Board';
import SeoulPage from '../components/main/SeoulPage';
import { Route } from 'react-router-dom';
import DetailTab from '../components/main/DetailTab';
import KoreaPage from '../components/main/KoreaPage';
import WorldPage from '../components/main/WorldPage';
import covidmain from '../json/covidmain.json';

// 메인페이지
const MainPage = ({ match, location }) => {
  const category = location.pathname
  // 코로나 json 데이터
  const covidmainData = covidmain[0];
  // 현황판 제목
  const covidmainTitle = ['누적확진자수', '일일추가확진자수', '격리해제수']

  return (
    <>
      <Board
        boardtitle="코로나 19 실시간 현황"
        subtitle="코로나 현황판"
        updateData={covidmainData}
        updateTitle={covidmainTitle}
      />
      <DetailTab category={category} />
      {match.path === "/" && <SeoulPage />}
      <Route path={`${match.path}/seoul`} component={SeoulPage} />
      <Route path={`${match.path}/korea`} component={KoreaPage} />
      <Route path={`${match.path}/world`} component={WorldPage} />
    </>
  )
}

export default MainPage;