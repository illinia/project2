import React from 'react';
import Board from '../components/main/Board';
import styled from 'styled-components';
import vaccine1pieChart from '../components/main/img/vaccine1pie.png';
import vaccine1 from '../json/vaccine1.json';
import vaccine2 from '../json/vaccine2.json';
import MainTableTitle from '../components/mainTable/MainTableTitle';
import MainTableContent from '../components/mainTable/MainTableContent';
import TableTitle from '../components/common/TableTitle';
import vaccinemain from '../json/vaccinemain.json';

const VaccineChart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 800px;
    height: auto;
  }

  @media (max-width: 800px) {
    img {
      width: 100%;
      height: 100%;
    }
  } 
  margin-top: 5rem;
`;

// 백신 페이지
const VaccinePage = () => {
  const vaccine1Json = vaccine1[0]
  const vaccine2Json = vaccine2

  // 표데이터 제목
  const vaccine1JsonTitle = ['기준일', '1분기 1차접종대상', '1분기 1차실접종자', '1분기 2차접종대상', '1분기 2차실접종']
  const vaccine2JsonTitle = ['기준일', '기관', '1차 접종대상자', '1차 실접종자', '1차접종률', '백신종류']

  // 백신 현황판 제목
  const vaccinemainData = vaccinemain[0];
  const vaccinemainTitle = ['1분기 접종대상자', '1차 접종률', '2차 접종률']

  return (
    <>
      <Board
        boardtitle="백신 실시간 현황"
        subtitle="백신 현황판"
        updateData={vaccinemainData}
        updateTitle={vaccinemainTitle}
      />
      <VaccineChart>
        <img src={vaccine1pieChart} alt="로딩중" />
        <TableTitle>코로나19 백신 1분기 예방접종 현황</TableTitle>
        <MainTableTitle jsonList={vaccine1JsonTitle} />
        <MainTableContent jsonList={Object.values(vaccine1Json)} />
        <TableTitle>코로나19 기관별 백신 예방접종 현황</TableTitle>
        <MainTableTitle jsonList={vaccine2JsonTitle} />
        {vaccine2Json.map(list => (
          <>
            <MainTableContent jsonList={Object.values(list)} />
          </>
        ))}
      </VaccineChart>
    </>
  )
}

export default VaccinePage;