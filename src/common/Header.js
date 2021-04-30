import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer';
import Logo from './HeaderLogo';
import styled from 'styled-components';
import Menu from './Menu';
import Responsive from '../components/common/Responsive';



const menuCategory = [
  {
    name: 'infoPage',
    text: '예방행동수칙'
  },
  {
    name: 'news',
    text: '건강관련 실시간 뉴스'
  },
  {
    name: 'community',
    text: '자유게시판'
  },
]

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

const MainBlock = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  const { category } = useSelector(({ page }) => ({
    category: page.page.name
  }))

  const MenuCheck = menuCategory.findIndex(c => category === c["name"])

  return (
    <>
      <HeaderBlock>
        <HeaderBox>
          <Logo />
          <HeaderContainer />
        </HeaderBox>
      </HeaderBlock>
      <MainBlock>
        {MenuCheck !== -1 && (
          <Menu category={menuCategory[MenuCheck]["text"]} />
        )}
      </MainBlock>
    </>
  )
}

export default Header;