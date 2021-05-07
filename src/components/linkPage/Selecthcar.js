import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import HospitalList from '../../containers/linkPage/HospitalList';

const SelecthcarBlock = styled.div``;

const Selecthcar = () => {
  const titleList = ["번호", "시도", "시군구", "차량이동형 선별진료소(운영시간)", "전화번호", "지도"]
  return (
    <SelecthcarBlock>
      <Menu>차량 이동형 선별진료소 목록</Menu>
      <HospitalList
        pageno="4"
        titleList={titleList}
      />
    </SelecthcarBlock>
  )
}

export default Selecthcar;