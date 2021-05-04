import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};
  display: flex;
  justify-content: space-between;
`;

const SubInfoLeft = styled.div`
  width: 150px;
  height: 20px;
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\|';
  }

  @media (max-width: 270px) {
    display: flex;
    flex-direction: column;
    height: 40px;
    font-size: 0.875rem;
    span + span:before {
      content: none;
    }
  }
`;

const CountInfoBlock = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 300px) {
    width: 80px;
    font-size: 0.875rem;
  }
`;

const SubInfo = ({ cnt, name, regDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <SubInfoLeft>
        <span>
          <b>{name}</b>
        </span>
        <span>{new Date(regDate).toLocaleDateString()}</span>
      </SubInfoLeft>
      <CountInfoBlock>
        조회수: {cnt}
      </CountInfoBlock>
    </SubInfoBlock>
  )
}

export default SubInfo;