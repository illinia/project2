import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import HospitalList from '../../containers/linkPage/HospitalList';
import PaginationContainer from '../../containers/linkPage/PaginationContainer';
import SearchHospital from '../../containers/linkPage/SearchHospital';
import LinkMenu from './LinkMenu';

const SelecthBlock = styled.div``;

const Selecth = ({ location }) => {
  const titleList = ["번호", "시도", "시군구", "선별진료소(운영시간)", "전화번호", "지도"]

  let pathName = location.pathname.split('/')

  if (pathName[2] === undefined) {
    pathName = "relaxhospital"
  } else {
    pathName = `${pathName[2]}`
  }

  return (
    <>
      <SelecthBlock>
        <LinkMenu>선별진료소 목록</LinkMenu>
        <SearchHospital />
        <HospitalList
          pageno="3"
          titleList={titleList}
        />
      </SelecthBlock>
      <PaginationContainer pathName={pathName} />
    </>
  )
}

export default withRouter(Selecth);