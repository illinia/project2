import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import LinkMenu from './LinkMenu';
import HospitalList from '../../containers/linkPage/HospitalList';
import PaginationContainer from '../../containers/linkPage/PaginationContainer';
import SearchHospital from '../../containers/linkPage/SearchHospital';

const RespiratoryhBlock = styled.div``;

const Respiratoryh = ({ location }) => {
  const titleList = ["번호", "시도", "상세주소", "호흡기전담클리닉(운영시간)", "전화번호", "지도"]
  let pathName = location.pathname.split('/')

  if (pathName[2] === undefined) {
    pathName = "relaxhospital"
  } else {
    pathName = `${pathName[2]}`
  }

  return (
    <>
      <RespiratoryhBlock espiratoryhBlock>
        <LinkMenu>호흡기전담클리닉 목록</LinkMenu>
        <SearchHospital />
        <HospitalList
          pageno="2"
          titleList={titleList}
        />
      </RespiratoryhBlock>
      <PaginationContainer pathName={pathName} />
    </>
  )
}

export default withRouter(Respiratoryh);