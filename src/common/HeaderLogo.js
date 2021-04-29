import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = styled(NavLink)`
  width: 171px;
  height: 54px;
  font-weight: 600;
  font-size: 2.25rem;
  color: rgb(248, 249, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;


const HeaderLogo = () => {
  return (
    <div>
      <Logo to="/">
        BIGTORE
      </Logo>
    </div>
  )
}

export default HeaderLogo;