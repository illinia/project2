import React from 'react';
import styled from 'styled-components';
import ChartSize from '../../common/ChartSize';
import seoul1 from '../../json/seoul1.json';
import seoul2 from '../../json/seoul2.json';
import MainTableContent from '../mainTable/MainTableContent';
import MainTableTitle from '../mainTable/MainTableTitle';

const SeoulPageBlock = styled(ChartSize)`

`;

const SeoulPage = () => {
  const seoul1Json = seoul1
  console.log(seoul1Json)
  const seoul2Json = seoul2[0]

  const seoul2JsonValue1 = ['JONGNO', 'JUNGGU', 'YONGSAN', 'SEONGDONG', 'GWANGJIN', 'DDM', 'JUNGNANG', 'SEONGBUK', 'GANGBUK', 'DOBONG', 'NOWON', 'EP', 'SDM', 'MAPO', 'YANGCHEON', 'GANGSEO', 'GURO', 'GEUMCHEON', 'YDP', 'DONGJAK', 'GWANAK', 'SEOCHO', 'GANGNAM', 'SONGPA', 'GANGDONG', 'ETC']
  const seoul2JsonValue2 = ['JONGNOADD', 'JUNGGUADD', 'YONGSANADD', 'SEONGDONGADD', 'GWANGJINADD', 'DDMADD', 'JUNGNANGADD', 'SEONGBUKADD', 'GANGBUKADD', 'DOBONGADD', 'NOWONADD', 'EPADD', 'SDMADD', 'MAPOADD', 'YANGCHEONADD', 'GANGSEOADD', 'GUROADD', 'GEUMCHEONADD', 'YDPADD', 'DONGJAKADD', 'GWANAKADD', 'SEOCHOADD', 'GANGNAMADD', 'SONGPAADD', 'GANGDONGADD', 'ETCADD']
  let seoul2JsonResult1 = []
  let seoul2JsonResult2 = []

  seoul2JsonValue1.map(value => (
    seoul2JsonResult1.push(seoul2Json[value])
  ))
  seoul2JsonValue2.map(value => (
    seoul2JsonResult2.push(seoul2Json[value])
  ))

  const seoul2JsonTitle = ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구', '기타']
  const seoul1JsonTitle = ['기준일', '확진자', '추가확진자', '치료중', '추가퇴원', '퇴원', '사망']

  return (
    <SeoulPageBlock>
      서울시 코로나 현황
      <MainTableTitle jsonList={seoul1JsonTitle} />
      {seoul1Json.map(list => (
        <>
          <MainTableContent jsonList={Object.values(list)} />
        </>
      ))}
      <MainTableTitle jsonList={seoul2JsonTitle} />
      <MainTableContent jsonList={seoul2JsonResult1} />
      <MainTableContent jsonList={seoul2JsonResult2} />
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