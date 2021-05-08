import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const MenuBlock = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    height: 60px;
  }
`;

const MenuBox = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  transition: 0.3s ease-in;
  @media (max-width: 820px) {
    width: calc(100% - 50px);
  }
`;

const MenuTitle = styled.div`
  min-width: 250px;
  height: 48px;
  font-size: 2rem;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    width: 250px;
    height: 30px;
    font-size: 1.25rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${palette.gray[4]};
`;

const Menu = ({ children, ...rest }) => {
  return (
    <MenuBlock {...rest}>
      <MenuBox>
        <MenuTitle>{children}</MenuTitle>
        <Line />
      </MenuBox>
    </MenuBlock>
  )
}

export default Menu;