import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ReplyShowBoxBlock = styled.div`
  width: 700px;
  height: 40px;
  display: grid;
  grid-template-columns: 200px auto;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;

  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 20px 30px;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
  }
`;

const ReplyDetailBox = styled.div`
  height: 20px;
  color: ${palette.gray[7]};
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 0.5rem;
  }
  @media (max-width: 600px) {
    &.first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    &.last-child {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }
`;

const ReplyInfoBox = styled.div`
  min-width: 150px;
  height: 20px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const ReplyContentBox = styled.div`
  width: 400px;
  height: 20px;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 0;
  }
`;

const ReplyShowBox = (replyList) => {
  return (
    <>
      {replyList.replyList.map(reply => (
        <ReplyShowBoxBlock>
          <ReplyInfoBox>
            <ReplyDetailBox>{reply.name}</ReplyDetailBox>
            <ReplyDetailBox>|</ReplyDetailBox>
            <ReplyDetailBox>{new Date(reply.regDate).toLocaleDateString()}</ReplyDetailBox>
          </ReplyInfoBox>
          <ReplyContentBox>{reply.content}</ReplyContentBox>
        </ReplyShowBoxBlock>
      ))}
    </>
  )
}

export default ReplyShowBox;