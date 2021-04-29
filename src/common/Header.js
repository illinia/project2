import React, { useState, useCallback } from 'react';
import HeaderButton from './HeaderButton';
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
    text: '코로나 실시간 뉴스'
  },
  {
    name: 'community',
    text: '자유게시판'
  }
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
  height: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  const [category, setCategory] = useState('main');
  const onSelect = useCallback(category =>
    setCategory(category), [])

  const MenuCheck = menuCategory.findIndex(c => category === c["name"])

  return (
    <>
      <HeaderBlock>
        <HeaderBox>
          <Logo />
          <HeaderButton category={category} onSelect={onSelect} />
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