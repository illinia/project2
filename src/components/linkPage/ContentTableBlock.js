import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import TitleTableBlock from './TitleTableBlock';

const ContentTableBlockBlock = styled(TitleTableBlock)`
  
`;

const ContentTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  font-weight: 400;
  padding: 0.5rem;

  & + & {
    border-left: 1px solid ${palette.gray[4]};
  }
`;

const ContentTableBlock = ({ children }) => {
  return (
    <ContentTableBlockBlock>
      {children.map(list => (
        <ContentTable key={list._id}>{list}</ContentTable>
      ))}
    </ContentTableBlockBlock>
  )
}

export default ContentTableBlock;