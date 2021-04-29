import React from 'react';
import styled from 'styled-components';

const MenuBlock = styled.div`
  width: 978px;
  height: 68px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;

  @media (max-width: 978px) {
    width: calc(100% - 50px)
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
  background: #c4c4c4;
`;

const Menu = ({ category }) => {
  return (
    <MenuBlock>
      <MenuTitle>{category}</MenuTitle>
      <Line />
    </MenuBlock>
  )
}

export default Menu;