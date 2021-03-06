import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import ContentTableBlock from './ContentTableBlock';
import TitleTableBlock from './TitleTableBlock';
import Loading from '../../common/Loading';
import palette from '../../lib/styles/palette';

const HospitalTableBlock = styled.div`
  width: 90%;
  border-top: 1px solid ${palette.gray[8]};
  border-bottom: 1px solid ${palette.gray[8]};
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    height: 30px;
  }
`;

const MapButton = styled(Button)`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0;
  width: 35px;
  height: 20px;
`;

const HospitalTable = ({ titleList, hospitalPageList, loading }) => {
  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <HospitalTableBlock>
      <TitleTableBlock>
        {titleList}
      </TitleTableBlock>
      {!loading && hospitalPageList && (
        <>
          {hospitalPageList.hospitalList.map(list => (
            <ContentTableBlock key={list.no}>
              {list.no}{list.sido}{list.address}{list.name}{list.callNum}{<MapButton onClick={() => window.open(`https://map.kakao.com/link/to/${list.name},${list.lat},${list.lng}`, "", "_blank")}>지도</MapButton>}
            </ContentTableBlock>
          ))}
        </>
      )}
    </HospitalTableBlock>
  )
}

export default HospitalTable;