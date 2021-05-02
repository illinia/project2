import React from 'react';
import styled from 'styled-components';
import UpdateBoard from './UpdateBoard';

const BoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 200px;
  background: rgb(45, 77, 158);
  padding-top: 20px;
`;

const BoardTitle = styled.div`
  color: rgb(248, 249, 250);
  font-size: 2.25rem;
  font-weight: 500;
`;

const BoardSubTitle = styled.div`
  color: rgb(248, 249, 250);
  font-size: 1.25rem;
  font-weight: 500;
`;

const board = ({ boardtitle, subtitle }) => {
  return (
    <>
      <BoardBlock>
        <BoardTitle>{boardtitle}</BoardTitle>
        <BoardSubTitle>{subtitle}</BoardSubTitle>
        <UpdateBoard />
      </BoardBlock>
    </>
  )
}

export default board;