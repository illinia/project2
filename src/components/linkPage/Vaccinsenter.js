import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import HospitalList from '../../containers/linkPage/HospitalList';

const VaccinsenterBlock = styled.div``;

const Vaccinsenter = () => {
  const titleList = ["번호", "시도", "상세주소", "예방접종센터명", "전화번호", "지도"]
  return (
    <VaccinsenterBlock>
      <Menu>코로나 예방접종센터 목록</Menu>
      <HospitalList
        pageno="1"
        titleList={titleList}
      />
    </VaccinsenterBlock>
  )
}

export default Vaccinsenter;