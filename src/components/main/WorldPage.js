import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';
import world from '../../json/global.json';
import MainTableContent from '../mainTable/MainTableContent';
import MainTableTitle from '../mainTable/MainTableTitle';

const WorldPageBlock = styled(ChartSize)``;

const WorldPage = () => {

  const worldJson = world

  const worldJsonTitle = ['기준일', '지역명', '국가명', '국가별 확진자 수', '국가별 사망자 수']
  return (
    <WorldPageBlock>
      <MainTableTitle jsonList={worldJsonTitle} />
      {worldJson.map(list => (
        <>
          <MainTableContent jsonList={Object.values(list)} />
        </>
      ))}
    </WorldPageBlock>
  )
}

export default WorldPage;