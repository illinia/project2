import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Menu from '../../common/Menu';
import HospitalList from '../../containers/linkPage/HospitalList';
import PaginationContainer from '../../containers/linkPage/PaginationContainer';
import LinkMenu from './LinkMenu';
import SearchHospital from '../../containers/linkPage/SearchHospital';

const VaccinsenterBlock = styled.div``;

const Vaccinsenter = ({ location }) => {
  const titleList = ["번호", "시도", "상세주소", "예방접종센터명", "전화번호", "지도"]

  let pathName = location.pathname.split('/')

  if (pathName[2] === undefined) {
    pathName = "relaxhospital"
  } else {
    pathName = `${pathName[2]}`
  }

  return (
    <>
      <VaccinsenterBlock>
        <LinkMenu>코로나 예방접종센터 목록</LinkMenu>
        <SearchHospital />
        <HospitalList
          pageno="1"
          titleList={titleList}
        />
      </VaccinsenterBlock>
      <PaginationContainer pathName={pathName} />
    </>
  )
}

export default withRouter(Vaccinsenter);