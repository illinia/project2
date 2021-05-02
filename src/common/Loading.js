import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const LoadingBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 55px;
  height: 60vh;
  margin: 0 auto;

  div {
    background-color: ${palette.gray[5]};
    width: 6px;
    height: 30px;
    z-index: -1;
  }

  @keyframes box {
    0% {
      transform: none;
    }
    30% {
      transform: scale(1, 2.5);
    }
    60% {
      transform: none;
    }
  }

  .box1 {
    animation: box 1s infinite ease-in-out;
  }
  .box2 {
    animation: box 1s 0.1s infinite ease-in-out;
  }
  .box3 {
    animation: box 1s 0.2s infinite ease-in-out;
  }
  .box4 {
    animation: box 1s 0.3s infinite ease-in-out;
  }
  .box5 {
    animation: box 1s 0.4s infinite ease-in-out;
  }
`;

const Loading = () => {
  return (
    <LoadingBlock>
      <div className="box1" />
      <div className="box2" />
      <div className="box3" />
      <div className="box4" />
      <div className="box5" />
    </LoadingBlock>
  )
}

export default Loading;