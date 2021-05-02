import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette'

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const PageNumber = styled(Link)`
  color: ${props =>
    !props.active ? "black" : `${palette.gray[6]}`
  };

`;

const buildLink = ({ pagenum }) => {
  const query = qs.stringify({ pagenum })
  return `/community?${query}`
}

const Pagination = ({ posts, pagenum }) => {
  const pageCount = posts["pageCount"]
  let pageList = []
  for (var i = 1; i < 11; i++) {
    const listNumber = Math.floor(((pagenum - 1) * 0.1)) * 10 + i
    if (listNumber <= pageCount) {
      pageList.push(Math.floor(((pagenum - 1) * 0.1)) * 10 + i)
    } else {
      break;
    }
  }
  const minPage = Math.min.apply(null, pageList)

  return (
    <PaginationBlock>
      <Button
        disabled={minPage === 1}
        to={
          minPage === 1 ? undefined : buildLink({ pagenum: minPage - 10 })
        }
      >
        이전
      </Button>
      {pageList.map(page => (
        <PageNumber
          to={pagenum !== page ?
            buildLink({ pagenum: page }) :
            buildLink({ pagenum: pagenum })
          }
          active={pagenum === page ? true : false}
        >{page}</PageNumber>
      ))}
      <Button
        disabled={pagenum >= pageCount}
        to={
          pageCount <= pagenum ?
            undefined :
            (pageCount < (minPage + 10) ?
              buildLink({ pagenum: pageCount }) :
              buildLink({ pagenum: minPage + 10 })
            )
        }
      >
        다음
      </Button>
    </PaginationBlock>
  )
}

export default Pagination;