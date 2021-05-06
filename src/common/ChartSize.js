import React from 'react';
import styled from 'styled-components';

const ChartSizeBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 800px;
    height: auto;
  }

  @media (max-width: 800px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ChartSize = ({ children }) => {
  return (
    <ChartSizeBlock>
      {children}
    </ChartSizeBlock>
  )
}

export default ChartSize;