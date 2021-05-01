import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Logo from './HeaderLogo';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const HeaderBlock = styled.div`
  width: 100vw;
  height: 114px;
  display: flex;
  justify-content: center;
  background: rgb(45, 77, 158);
`;

const HeaderBox = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

const Header = ({ category }) => {
  return (
    <>
      <HeaderBlock>
        <HeaderBox>
          <Logo />
          <HeaderContainer category={category} />
        </HeaderBox>
      </HeaderBlock>
    </>
  )
}

export default Header;