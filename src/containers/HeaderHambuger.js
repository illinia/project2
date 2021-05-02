import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderButton from '../common/HeaderButton';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderHambugerBlock = styled.div`
  display: ${props =>
    props.responsiveCheck ? "flex" : "none"};
  position: ${props =>
    !props.toggle ? "fixed" : "static"};
  justify-content: flex-end;
  width: 100vw;
`;

const MenuBar = styled.div`
  color: white;
  font-size: 2.25rem;
  display: flex;
  align-items: center;
  z-index: 10;
  margin-right: 20px;
  cursor: pointer;
`;

const MenuBoard = styled.div`
  display: ${props =>
    !props.toggle ? "flex" : "none"};
  position: fixed;
  top: 0%;
  right: 0%;
  width: 100vw;
  height: 100vh;
  background: rgb(45,77,158);
  z-index: 5;
  align-items: center;
  justify-content: center;
`;

const HeaderHambuger = ({ category, responsiveCheck }) => {

  const [toggle, setToggle] = useState(true);

  const menuClick = () => {
    if (toggle === false) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  return (
    <HeaderHambugerBlock toggle={toggle} responsiveCheck={responsiveCheck}>
      <MenuBar toggle={toggle} >
        <GiHamburgerMenu onClick={menuClick} />
      </MenuBar>
      <MenuBoard onClick={menuClick} toggle={toggle}>
        <HeaderButton toggle={toggle} category={category} responsiveCheck={!responsiveCheck} />
      </MenuBoard>
    </HeaderHambugerBlock>
  )
}

export default HeaderHambuger;