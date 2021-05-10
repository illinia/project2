import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { withRouter } from 'react-router-dom';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 125px;
  min-height: 27px;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${props =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const Button = ({ to, history, ...rest }) => {
  const onClick = e => {
    if (to) {
      history.push(to);
    }
    if (rest.onClick) {
      rest.onClick(e);
    }
  }
  return <StyledButton {...rest} onClick={onClick} />
}

export default withRouter(Button);