import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import { Link, withRouter } from 'react-router-dom';
import palette from '../../lib/styles/palette'

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const PageNumber = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props =>
    !props.active ? "black" : `${palette.gray[6]}`
  };

`;

const Pagination = ({ posts, pagenum, location }) => {
  const { type, keyword } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const buildLink = ({ pagenum }) => {
    const query = qs.stringify({ pagenum, type, keyword })
    return `/community?${query}`
  }

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

export default withRouter(Pagination);