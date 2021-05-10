import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../components/common/Button';

const HeaderLogoBlock = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logo = styled(NavLink)`
  width: 170px;
  height: 54px;
  font-weight: 600;
  font-size: 2.25rem;
  color: rgb(248, 249, 250);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
`;

const HeaderLogo = () => {
  return (
    <HeaderLogoBlock>
      <Logo to="/">
        BIGTORE
      </Logo>
      <Button
        onClick={() => window.open("https://38e199339b39.ngrok.io/chat2", "BIGTORE 챗봇 서비스", "width=750, height=700", "_blank")}
      >
        챗봇서비스
      </Button>
    </HeaderLogoBlock>
  )
}

export default HeaderLogo;