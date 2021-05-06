import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';
import checkpie from './checkpie.png';
import addcnt from './addcnt.png';

const SeoulPageBlock = styled(ChartSize)`

`;

const SeoulPage = () => {
  return (
    <SeoulPageBlock>
      <img src={checkpie} alt="로딩안됨" />
      <img src={addcnt} alt="로딩안됨" />
      {/* <img src="http://127.0.0.1:9800/static/img/checkpie.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/addcnt.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/confcnt.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/state.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/statepie.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/age.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/gender.png" alt="로딩안됨" /> */}
    </SeoulPageBlock>
  )
}

export default SeoulPage;