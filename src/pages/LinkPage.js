import React from 'react';
import { Route } from 'react-router-dom';
import DetailTab from '../components/linkPage/DetailTab';
import Relaxhospital from '../components/linkPage/Relaxhospital';
import Respiratoryh from '../components/linkPage/Respiratoryh';
import Selecth from '../components/linkPage/Selecth';
import Selecthcar from '../components/linkPage/Selecthcar';
import Vaccinsenter from '../components/linkPage/Vaccinsenter';

// 병원 페이지
const LinkPage = ({ match, location }) => {
  // 파라미터에 따른 첫페이지 출력
  const category = location.pathname

  return (
    <>
      <DetailTab category={category} />
      {category === "/pages" && <Relaxhospital />}
      <Route path={`${match.path}/relaxhospital`} component={Relaxhospital} />
      <Route path={`${match.path}/respiratoryh`} component={Respiratoryh} />
      <Route path={`${match.path}/selecth`} component={Selecth} />
      <Route path={`${match.path}/selecthcar`} component={Selecthcar} />
      <Route path={`${match.path}/vaccinsenter`} component={Vaccinsenter} />

    </>
  )
}

export default LinkPage;