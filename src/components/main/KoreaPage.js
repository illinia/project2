import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';
import korea1 from '../../json/korea1.json';
import korea2 from '../../json/korea2.json'
import state from '../../json/state.json'
import gender from '../../json/gender.json'
import age from '../../json/age.json'
import MainTableTitle from '../mainTable/MainTableTitle';
import MainTableContent from '../mainTable/MainTableContent';
import checkpieChart from './img/checkpie.png';
import addcntChart from './img/addcnt.png';
import confcntChart from './img/confcnt.png';
import stateChart from './img/state.png';
import statepieChart from './img/statepie.png';
import ageChart from './img/age.png';
import genderChart from './img/gender.png';
import TableTitle from '../common/TableTitle';


const KoreaPageBlock = styled(ChartSize)`

`;

const KoreaPage = () => {

  const korea1Json = korea1[0]
  const korea2Json = korea2[0]
  const stateJson = state
  const genderJson = gender
  const ageJson = age

  const korea1JsonTitle = ['기준일', '검사진행 수', '결과 음성 수', '누적 검사 수', '누적 검사 완료 수', '누적 환진률']
  const korea2JsonTitle = ['기준일', '일일 누적검사 수', '일일 누적검사 완료 수', '일일 격리해제 수', '일일 검사 확진자 수', '일일 결과 음성 수']
  const stateJsonTitle = ['기준일', '시도명', '확진자 수', '지역발생 수', '해외유입 수', '전일대비 증감 수', '격리중 환자 수', '격리 해제 수', '사망자 수']
  const genderJsonTitle = ['기준일', '연령', '확진자', '확진률', '사망자', '사망률', '치명률']
  const ageJsonTitle = ['기준일', '성별', '확진자', '확진률', '사망자', '사망률', '치명률']

  return (
    <KoreaPageBlock>
      <img src={checkpieChart} alt="로딩중" />
      <img src={addcntChart} alt="로딩중" />
      <img src={confcntChart} alt="로딩중" />
      <img src={stateChart} alt="로딩중" />
      <img src={statepieChart} alt="로딩중" />
      <img src={ageChart} alt="로딩중" />
      <img src={genderChart} alt="로딩중" />
      <TableTitle>코로나 검사 현황</TableTitle>
      <MainTableTitle jsonList={korea1JsonTitle} />
      <MainTableContent jsonList={Object.values(korea1Json)} />
      <MainTableTitle jsonList={korea2JsonTitle} />
      <MainTableContent jsonList={Object.values(korea2Json)} />
      <TableTitle>코로나 시.도 발생 현황</TableTitle>
      <MainTableTitle jsonList={stateJsonTitle} />
      {stateJson.map(list => (
        <>
          <MainTableContent jsonList={Object.values(list)} />
        </>
      ))}
      <TableTitle>연령별 코로나 확진 현황</TableTitle>
      <MainTableTitle jsonList={ageJsonTitle} />
      {ageJson.map(list => (
        <>
          <MainTableContent jsonList={Object.values(list)} />
        </>
      ))}
      <TableTitle>성별별 코로나 확진 현황</TableTitle>
      <MainTableTitle jsonList={genderJsonTitle} />
      {genderJson.map(list => (
        <>
          <MainTableContent jsonList={Object.values(list)} />
        </>
      ))}

      {/* <img src="http://127.0.0.1:9800/static/img/seoulareabar.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareabar1.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareabar2.png" alt="로딩안됨" />
      <img src="http://127.0.0.1:9800/static/img/seoulareapie.png" alt="로딩안됨" /> */}
    </KoreaPageBlock>
  )
}

export default KoreaPage;