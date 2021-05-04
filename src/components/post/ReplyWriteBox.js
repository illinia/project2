import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button'

const ReplyWriteBoxBlock = styled.div`
  width: 700px;
  min-height: 100px;
  display: grid;
  grid-template-columns: minmax(0, auto) 150px 150px 70px;
  grid-template-rows: 40px 40px;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 460px) {
    grid-template-columns: minmax(0, auto) 2fr 2fr 1fr;
    transition: 0.3s ease-in-out;
    Button {
      transition: 0.3s ease-in-out;
      width: 50px;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  input:nth-child(1) {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }

  input:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  input:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  Button {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  input {
    outline: none;
    border: none;
    font-size: 1rem;
  }
`;

const ReplyWriteContentBox = styled.input`
  width: 100%;
  height: 40px;
`;

const ReplyWriteDetailBox = styled.input`
  width: 100%;
  height: 40px;
`;

const ReplySubmitButton = styled(Button)`
  width: 70px;
  height: 30px;
`;


const ReplyWriteBox = () => {
  return (
    <ReplyWriteBoxBlock>
      <ReplyWriteContentBox
        name="content"
        placeholder="댓글을 입력해 주세요."
      />
      <ReplyWriteDetailBox
        name="name"
        placeholder="이름"
      />
      <ReplyWriteDetailBox
        name="pass"
        type="password"
        placeholder="비밀번호"
      />
      <ReplySubmitButton cyan>등록</ReplySubmitButton>
    </ReplyWriteBoxBlock>
  )
}

export default ReplyWriteBox;