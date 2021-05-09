import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MainTableTitleBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 120px));
  grid-template-rows: 30px;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  margin-top: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const MainTableCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border-top: 2px solid ${palette.gray[6]};
  border-bottom: 1px solid ${palette.gray[6]};
  font-weight: 400; 
  white-space: nowrap;
`;

const MainTableTitle = ({ jsonList }) => {
  return (
    <MainTableTitleBlock>
      {jsonList.map(list => (
        <MainTableCell key={list._id}>{list}</MainTableCell>
      ))}
    </MainTableTitleBlock>
  )
}

export default MainTableTitle;