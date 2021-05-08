import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import HospitalList from '../../containers/linkPage/HospitalList';
import PaginationContainer from '../../containers/linkPage/PaginationContainer';
import SearchHospital from '../../containers/linkPage/SearchHospital';
import LinkMenu from './LinkMenu';

const RelaxhospitalBlock = styled.div`

`;

const Relaxhospital = ({ location }) => {
  const titleList = ["번호", "시도", "상세주소", "병원명", "전화번호", "지도"]

  let pathName = location.pathname.split('/')

  if (pathName[2] === undefined) {
    pathName = "relaxhospital"
  } else {
    pathName = `${pathName[2]}`
  }

  return (
    <>
      <RelaxhospitalBlock>
        <LinkMenu>국민안심병원 목록</LinkMenu>
        <SearchHospital />
        <HospitalList
          pageno="5"
          titleList={titleList}
        />
      </RelaxhospitalBlock>
      <PaginationContainer pathName={pathName} />
    </>
  )
}

export default withRouter(Relaxhospital);