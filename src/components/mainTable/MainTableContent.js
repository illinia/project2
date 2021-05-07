import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MainTableContentBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  
`;

const MainTableCell = styled.div`
  width: 150px;
  height: auto;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${palette.gray[4]};
  border-top: 
  ${props =>
    props.titleBoolean === true ?
      `2px solid ${palette.gray[6]}` :
      "none"
  };
  font-weight: 
  ${props =>
    props.titleBoolean === true ?
      "600" :
      "400"
  };
  
`;

const MainTableContent = ({ jsonList, titleBoolean }) => {
  return (
    <MainTableContentBlock>
      {jsonList.map(list => (
        <MainTableCell titleBoolean={titleBoolean}>{list}</MainTableCell>
      ))}
    </MainTableContentBlock>
  )
}

export default MainTableContent;