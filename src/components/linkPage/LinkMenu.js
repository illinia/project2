import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';

const LinkMenuBlock = styled(Menu)`
  height: 60px;
`;

const LinkMenu = ({ children }) => {
  return (
    <LinkMenuBlock>
      {children}
    </LinkMenuBlock>
  )
}

export default LinkMenu;