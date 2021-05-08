import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MainTableContentBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  grid-template-rows: 30px;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  font-size: 0.875rem;
`;

const MainTableCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border-bottom: 1px solid ${palette.gray[4]};
  font-weight: 400; 
`;

const MainTableContent = ({ jsonList }) => {
  return (
    <MainTableContentBlock>
      {jsonList.map(list => (
        <MainTableCell>{list}</MainTableCell>
      ))}
    </MainTableContentBlock>
  )
}

export default MainTableContent;