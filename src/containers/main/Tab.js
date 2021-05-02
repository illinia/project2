import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const TabBlock = styled(Link)`
  width: 30%;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }

  ${props =>
    props.active && css`
      border-bottom: 2px solid rgb(51, 51, 51);
  `}
`;

const Tab = ({ match, children, active, path, location }) => {
  let matchpath = match.path

  if (matchpath === "/") {
    matchpath = "/main"
  }
  const locationsplit = location.pathname.split('/')
  const locationpath = locationsplit[2]

  return (
    <TabBlock active={path === locationpath || active} to={`${matchpath}/${path}`}>
      {children}
    </TabBlock>
  )
}

export default withRouter(Tab);