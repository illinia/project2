import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import HospitalList from '../../containers/linkPage/HospitalList';
import HospitalTable from './HospitalTable';

const RelaxhospitalBlock = styled.div`

`;

const Relaxhospital = () => {
  const titleList = ["번호", "시도", "상세주소", "병원명", "전화번호", "지도"]
  return (
    <RelaxhospitalBlock>
      <Menu>국민안심병원 목록</Menu>
      <HospitalList
        pageno="5"
        titleList={titleList}
      />
    </RelaxhospitalBlock>
  )
}

export default Relaxhospital;