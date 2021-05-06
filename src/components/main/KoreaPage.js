import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';

const KoreaPageBlock = styled(ChartSize)``;

const KoreaPage = () => {
  return (
    <KoreaPageBlock>
      <img src="http://127.0.0.1:9800/static/img/seoulareabar.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareabar1.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareabar2.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareapie.png" alt="로딩안됨" />
    </KoreaPageBlock>
  )
}

export default KoreaPage;