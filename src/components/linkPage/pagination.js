import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette'

const paginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const pageNumber = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props =>
    !props.active ? "black" : `${palette.gray[6]}`
  };
`;

const pagination = () => {
  return (
    <paginationBlock>

    </paginationBlock>
  )
}

export default pagination;