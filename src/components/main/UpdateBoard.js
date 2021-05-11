import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const UpdateBoardBlock = styled.div`
  width: 800px;
  height: 120px;
  border-radius: 20px;
  background: white;
  box-shadow: 1px 1px 3px 0 ${palette.gray[5]};
  padding: 0 15px;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
  transition: 0.3s ease-in-out;
  margin-top: 20px;

  @media (max-width: 820px) {
    width: 90%;
    div {
      width: 100%;
      justify-content: center;
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
  justify-content: center;
  color: ${palette.gray[7]};
  padding: 1rem 0;
  font-weight: 500;
  & + & {
    border-left: 2px solid ${palette.gray[4]};
  }
`;

const UpdateDetailBox = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  height: 30px;
  display: flex;
  align-items: center;
  color: red;
`;

const UpdateBoard = ({ updateData, updateTitle }) => {
  return (
    <UpdateBoardBlock>
      <UpdateBox>
        {updateTitle[0]}
        <UpdateDetailBox>
          {Object.values(updateData)[0].toLocaleString()}
        </UpdateDetailBox>
      </UpdateBox>
      <UpdateBox>
        {updateTitle[1]}
        <UpdateDetailBox>
          {Object.values(updateData)[1].toLocaleString()}
        </UpdateDetailBox>
      </UpdateBox>
      <UpdateBox>
        {updateTitle[2]}
        <UpdateDetailBox>
          {Object.values(updateData)[2].toLocaleString()}
        </UpdateDetailBox>
      </UpdateBox>
    </UpdateBoardBlock>
  )
}

export default UpdateBoard;