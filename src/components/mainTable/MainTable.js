import React from 'react';
import styled from 'styled-components';
import MainTableContent from './MainTableContent';

const MainTableBlock = styled.div`
  width: 100vw;
  margin: 2rem auto;
  font-size: 0.875rem;
`;

const MainTable = ({ jsonFile, jsonTitle, listCheck }) => {

  return (
    <MainTableBlock>
      <MainTableContent titleBoolean jsonList={jsonTitle} />
      {listCheck === true ?
        `${jsonFile.map(list => (
          <MainTableContent jsonList={Object.values(list)} />
        ))}`
        : <MainTableContent jsonList={Object.values(jsonFile)} />
      }
    </MainTableBlock>
  )
}

export default MainTable;