import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';
import seoul1 from '../../json/seoul1.json';
import seoul2 from '../../json/seoul2.json';
import MainTableContent from '../mainTable/MainTableContent';
import MainTableTitle from '../mainTable/MainTableTitle';
import seoulareabar from './img/seoulareabar.png';
import seoulareapie from './img/seoulareapie.png'
import seoulareabar1 from './img/seoulareabar1.png';
import seoulareabar2 from './img/seoulareabar2.png';
import TableTitle from '../common/TableTitle';

const SeoulPageBlock = styled(ChartSize)`

`;

const SeoulPage = () => {
  const seoul1Json = seoul1
  const seoul2Json = seoul2[0]

  const seoul2JsonValue1Part1 = ['JONGNO', 'JUNGGU', 'YONGSAN', 'SEONGDONG', 'GWANGJIN', 'DDM', 'JUNGNANG', 'SEONGBUK', 'GANGBUK', 'DOBONG', 'NOWON', 'EP', 'SDM']
  const seoul2JsonValue1Part2 = ['MAPO', 'YANGCHEON', 'GANGSEO', 'GURO', 'GEUMCHEON', 'YDP', 'DONGJAK', 'GWANAK', 'SEOCHO', 'GANGNAM', 'SONGPA', 'GANGDONG', 'ETC']
  const seoul2JsonValue2Part1 = ['JONGNOADD', 'JUNGGUADD', 'YONGSANADD', 'SEONGDONGADD', 'GWANGJINADD', 'DDMADD', 'JUNGNANGADD', 'SEONGBUKADD', 'GANGBUKADD', 'DOBONGADD', 'NOWONADD', 'EPADD', 'SDMADD']
  const seoul2JsonValue2Part2 = ['MAPOADD', 'YANGCHEONADD', 'GANGSEOADD', 'GUROADD', 'GEUMCHEONADD', 'YDPADD', 'DONGJAKADD', 'GWANAKADD', 'SEOCHOADD', 'GANGNAMADD', 'SONGPAADD', 'GANGDONGADD', 'ETCADD']
  let seoul2JsonResult1Part1 = []
  let seoul2JsonResult1Part2 = []
  let seoul2JsonResult2Part1 = []
  let seoul2JsonResult2Part2 = []

  seoul2JsonValue1Part1.map(value => (
    seoul2JsonResult1Part1.push(seoul2Json[value])
  ))
  seoul2JsonValue1Part2.map(value => (
    seoul2JsonResult1Part2.push(seoul2Json[value])
  ))
  seoul2JsonValue2Part1.map(value => (
    seoul2JsonResult2Part1.push(seoul2Json[value])
  ))
  seoul2JsonValue2Part2.map(value => (
    seoul2JsonResult2Part2.push(seoul2Json[value])
  ))

  const seoul2JsonTitle1 = ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구']
  const seoul2JsonTitle2 = ['마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구', '기타']
  const seoul1JsonTitle = ['기준일', '확진자', '추가확진자', '치료중', '추가퇴원', '퇴원', '사망']

  return (
    <SeoulPageBlock>
      <img src="http://localhost:9100/static/img/seoulareabar.png" alt={seoulareabar} />
      <img src="http://localhost:9100/static/img/seoulareapie.png" alt={seoulareapie} />
      <img src="http://localhost:9100/static/img/seoulareabar1.png" alt={seoulareabar1} />
      <img src="http://localhost:9100/static/img/seoulareabar2.png" alt={seoulareabar2} />
      <TableTitle>서울시 코로나 현황</TableTitle>
      <MainTableTitle jsonList={seoul1JsonTitle} />
      {seoul1Json.map(list => (
        <>
          <MainTableContent jsonList={Object.values(list)} />
        </>
      ))}
      <TableTitle>서울시 코로나 현황(자체구별)</TableTitle>
      <MainTableTitle jsonList={seoul2JsonTitle1} />
      <MainTableContent jsonList={seoul2JsonResult1Part1} />
      <MainTableContent jsonList={seoul2JsonResult2Part1} />

      <MainTableTitle jsonList={seoul2JsonTitle2} />
      <MainTableContent jsonList={seoul2JsonResult1Part2} />
      <MainTableContent jsonList={seoul2JsonResult2Part2} />
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