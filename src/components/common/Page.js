import React from 'react';
import styled from 'styled-components';

const PageBlock = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Page = ({ children, ...rest }) => {
  return (
    <PageBlock {...rest}>
      {children}
    </PageBlock>
  )
}

export default Page;