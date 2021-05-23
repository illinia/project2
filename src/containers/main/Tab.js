import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const TabBlock = styled(Link)`
  width: 100%;
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

  @media (max-width: 800px) {
    font-size: 1.125rem;
  }
`;

// 전체 페이지에 처음 들어왔을때 전체 탭에서 메인 페이지가 선택되게 하는 기능
const Tab = ({ match, children, active, path, location }) => {
  let matchpath = match.path

  if (matchpath === "/") {
    matchpath = "/main"
  }
  const locationsplit = location.pathname.split('/')
  const locationpath = locationsplit[2]

  return (
    <TabBlock
      active={path === locationpath || active}
      to={`${matchpath}/${path}`}
    >
      {children}
    </TabBlock>
  )
}

export default withRouter(Tab);