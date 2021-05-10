import React from 'react';
import styled from 'styled-components';
import Tab from '../../containers/main/Tab';

const DetailTabBlock = styled.div`
  width: 600px;
  height: 40px;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;

  transition: 0.3s ease-in-out;
  @media (max-width: 640px) {
    width: 95%;
    margin-top: 60px;
  }
`;

const DetailTab = ({ category }) => {

  const active = category === "/"

  return (
    <DetailTabBlock>
      <Tab path="seoul" active={active}>서울 현황</Tab>
      <Tab path="korea">국내 현황</Tab>
      <Tab path="world">국외 현황</Tab>
    </DetailTabBlock>
  )
}

export default DetailTab;