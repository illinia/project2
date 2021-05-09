import React from 'react';
import styled from 'styled-components';

const TableTitleBlock = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 2rem;
`;

const TableTitle = ({ children }) => {
  return (
    <TableTitleBlock>
      {children}
    </TableTitleBlock>
  )
}

export default TableTitle;