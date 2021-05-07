import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import HospitalList from '../../containers/linkPage/HospitalList';

const SelecthBlock = styled.div``;

const Selecth = () => {
  const titleList = ["번호", "시도", "시군구", "선별진료소(운영시간)", "전화번호", "지도"]
  return (
    <SelecthBlock>
      <Menu>선별진료소 목록</Menu>
      <HospitalList
        pageno="3"
        titleList={titleList}
      />
    </SelecthBlock>
  )
}

export default Selecth;