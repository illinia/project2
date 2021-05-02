import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const UpdateBoardBlock = styled.div`
  width: 800px;
  height: 160px;
  border-radius: 20px;
  background: white;
  box-shadow: 1px 1px 3px 0 ${palette.gray[5]};
  padding: 30px 15px;
  display: grid;
  grid-template-columns: auto auto auto;
  transition: 0.3s ease-in-out;
  margin-top: 20px;

  @media (max-width: 820px) {
    width: 90%;
    div {
      width: 100%;
      transition: inherit;
    }
  }
`;

const UpdateBox = styled.div`
  width: 250px;
  height: 100px;
  transition: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    border-left: 2px solid ${palette.gray[4]};
  }
`;

const UpdateBoard = () => {
  return (
    <UpdateBoardBlock>
      <UpdateBox>테스트</UpdateBox>
      <UpdateBox>테스트</UpdateBox>
      <UpdateBox>테스트</UpdateBox>
    </UpdateBoardBlock>
  )
}

export default UpdateBoard;