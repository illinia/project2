import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';
import korea1 from '../../json/korea1.json';
import korea2 from '../../json/korea2.json'
import state from '../../json/state.json'
import gender from '../../json/gender.json'
import age from '../../json/age.json'
import MainTable from '../mainTable/MainTable';

const KoreaPageBlock = styled(ChartSize)`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

const KoreaPage = () => {

  const korea1Json = korea1[0]
  const korea2Json = korea2[0]
  const stateJson = state
  const genderJson = gender
  const ageJson = age
  const korea1JsonTitle = ["기준일", '검사진행 수', '결과 음성 수', '누적 검사 수', '누적 검사 완료 수', '누적 환진률']

  stateJson.map(list => (
    console.log(Object.values(list))
  ))


  return (
    <KoreaPageBlock>
      <div>
        <MainTable jsonFile={korea1Json} jsonTitle={korea1JsonTitle} ListCheck={false} />
        <MainTable jsonFile={korea2Json} jsonTitle={korea1JsonTitle} ListCheck={false} />
        <MainTable jsonFile={stateJson} jsonTitle={korea1JsonTitle} ListCheck={true} />
        <MainTable jsonFile={genderJson} jsonTitle={korea1JsonTitle} ListCheck={true} />
        <MainTable jsonFile={ageJson} jsonTitle={korea1JsonTitle} ListCheck={true} />
      </div>
      {/* <img src="http://127.0.0.1:9800/static/img/seoulareabar.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareabar1.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareabar2.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareapie.png" alt="로딩안됨" /> */}
    </KoreaPageBlock>
  )
}

export default KoreaPage;