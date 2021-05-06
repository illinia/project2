import React from 'react';
import styled from 'styled-components';
import Tab from '../../containers/main/Tab'

const DetailTabBlock = styled.div`
  width: 600px;
  height: 140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 40px;
  justify-content: space-between;
  align-content: center;

  a {
    font-size: 1.125rem;
  }

  a:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  a:nth-child(2) {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }
  a:nth-child(3) {
    grid-column: 5 / 7;
    grid-row: 1 / 2;
  }
  a:nth-child(4) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
  a:nth-child(5) {
    grid-column: 4 / 7;
    grid-row: 2 / 3;
  }

  transition: 0.3s ease-in-out;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    a {
      font-size: 0.875rem;
    }
  }
`;

const DetailTab = ({ category }) => {

  const active = category === "/pages"

  return (
    <DetailTabBlock>
      <Tab path="relaxhospital" active={active}>국민안심병원</Tab>
      <Tab path="respiratoryh">호흡기 전담클리닉</Tab>
      <Tab path="selecth">선별 진료소</Tab>
      <Tab path="selecthcar">차량 이동형 선별진료소</Tab>
      <Tab path="vaccinsenter">코로나 예방접종센터</Tab>
    </DetailTabBlock>
  )
}

export default DetailTab;