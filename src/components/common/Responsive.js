import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return (
    <ResponsiveBlock {...rest}>
      {children}
    </ResponsiveBlock>
  )
}

export default Responsive;