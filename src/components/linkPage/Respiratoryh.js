import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import HospitalList from '../../containers/linkPage/HospitalList';

const RespiratoryhBlock = styled.div``;

const Respiratoryh = () => {
  const titleList = ["번호", "시도", "상세주소", "호흡기전담클리닉(운영시간)", "전화번호", "지도"]
  return (
    <RespiratoryhBlock>
      <Menu>호흡기전담클리닉 목록</Menu>
      <HospitalList
        pageno="2"
        titleList={titleList}
      />
    </RespiratoryhBlock>
  )
}

export default Respiratoryh;