import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const MenuBlock = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuBox = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  transition: 0.3s ease-in;
  @media (max-width: 800px) {
    width: calc(100% - 50px);
  }
`;

const MenuTitle = styled.div`
  width: 300px;
  height: 48px;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${palette.gray[4]};
`;

const Menu = ({ children }) => {
  return (
    <MenuBlock>
      <MenuBox>
        <MenuTitle>{children}</MenuTitle>
        <Line />
      </MenuBox>
    </MenuBlock>
  )
}

export default Menu;