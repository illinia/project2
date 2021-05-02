import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'main',
    text: '코로나 현황'
  },
  {
    name: 'vaccine',
    text: '백신 현황'
  },
  {
    name: 'infoPage',
    text: '코로나란'
  },
  {
    name: 'news',
    text: '관련 뉴스'
  },
  {
    name: 'community',
    text: '커뮤니티'
  },
  {
    name: 'pages',
    text: '참고사이트'
  }
]

const ButtonsBlock = styled.div`
  display: ${props =>
    props.responsiveCheck ? "none" : "flex"};
  ${props =>
    props.toggle === false ? css`
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
    ` : css`
      flex-direction: row;
      width: 620px;
      height: 30px;
      justify-content: center;
      align-items: none;
      margin-right: 5px;
    `}

  /* flex-direction: ${props =>
    props.toggle ? "column" : "row"};
  width: ${props =>
    props.toggle ? "100vw" : "600px"};
  height: ${props =>
    props.toggle ? "100vh" : "30px"};
  justify-content: ${props =>
    props.toggle ? "center" : "none"};
  align-items: ${props =>
    props.toggle ? "center" : "none"}; */
`;

const StyledButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props =>
    props.toggle === false ? "100px" : "90px"};
  height: ${props =>
    props.toggle === false ? "60px" : "30px"};
  font-size: 1.125rem;
  color: rgb(248, 249, 250);
  outline: none;
  cursor: pointer;
  background: none;
  text-decoration: none;
  margin: ${props =>
    props.toggle === false ? "0 auto" : "0 0 0 11px"};
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    border-bottom: 2px solid #ced4da;
  }

  ${props =>
    props.active && css`
      transform: translateY(-3px) scale(1.1);
      border-bottom: 2px solid rgb(248, 249, 250);
  `}
`;

const HeaderButton = ({ toggle, category, responsiveCheck }) => {
  return (
    <ButtonsBlock responsiveCheck={responsiveCheck} toggle={toggle} >
      {categories.map(c => (
        <StyledButton
          toggle={toggle}
          key={c.name}
          active={category === c.name}
          exact={c.name === 'main'}
          to={c.name === 'main' ? '/' : `/${c.name}`}
        >{c.text}</StyledButton>
      ))}
    </ButtonsBlock>
  )
}

export default HeaderButton;