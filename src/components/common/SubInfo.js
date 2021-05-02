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

    span + span:before {
      color: ${palette.gray[4]};
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      content: '\|';
    }
`;

const SubInfo = ({ no, name, regDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>{name}</b>
      </span>
      <span>{new Date(regDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  )
}

export default SubInfo;