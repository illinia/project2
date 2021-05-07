import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TitleTableBlockBlock = styled.div`
  display: grid;
  grid-template-columns: 5% 8% 25% 35% 20% 7%;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 60px;
  min-height: 60px;
  font-size: 0.875rem;
  background: ${palette.gray[2]};
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 0.75rem;
    grid-template-columns: 7% 11% 22% 28% 20% 12%;
    height: 80px;
    min-height: 60px;
  }

  div:nth-child(1) {
    grid-column: 1 / 2;
  }
  div:nth-child(2) {
    grid-column: 2 / 3;
  }
  div:nth-child(3) {
    grid-column: 3 / 4;
  }
  div:nth-child(4) {
    grid-column: 4 / 5;
  }
  div:nth-child(5) {
    grid-column: 5 / 6;
  }
  div:nth-child(6) {
    grid-column: 6 / 7;
  }
`;

const TitleTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${palette.gray[4]};

  & + & {
    border-left: 1px solid ${palette.gray[4]};
  }
`;

const TitleTableBlock = ({ children }) => {
  return (
    <TitleTableBlockBlock>
      {children.map(list => (
        <TitleTable key={list._id}>{list}</TitleTable>
      ))}
    </TitleTableBlockBlock>
  )
}

export default TitleTableBlock;