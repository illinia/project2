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
  display: flex;
  width: 600px;
  height: 30px;
`;

const StyledButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  font-size: 1.125rem;
  color: rgb(248, 249, 250);
  outline: none;
  cursor: pointer;
  background: none;
  text-decoration: none;
  
  &:hover,
  &:focus {
    transform: translateY(-3px) scale(1.1);
    border-bottom: 2px solid rgb(248, 249, 250);
  }

  & + & {
    margin-left: 9px;
  }

  ${props =>
    props.active && css`
      transform: translateY(-3px) scale(1.1);
      border-bottom: 2px solid #ced4da;
  `}
`;

const HeaderButton = ({ form, onChange }) => {

  return (
    <ButtonsBlock>
      {categories.map(c => (
        <StyledButton
          key={c.name}
          active={form.name === c.name}
          onClick={() => onChange(c)}
          exact={c.name === 'main'}
          to={c.name === 'main' ? '/' : `/${c.name}`}
        >{c.text}</StyledButton>
      ))}
    </ButtonsBlock>
  )
}

export default HeaderButton;