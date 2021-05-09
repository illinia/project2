import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Pagination from '../../components/posts/Pagination';

const PaginationContainer = ({ location, pathName }) => {
  const { list, loading } = useSelector(({ hospital, loading }) => ({
    list: hospital.list,
    loading: loading['hospital/LIST_HOSPITAL'],
  }))

  const { pagenum = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  if (!list || loading) return null;

  return (
    <Pagination
      pagenum={parseInt(pagenum, 10)}
      posts={list}
      pageCheck="hospital"
      pathName={pathName}
    />
  )
}

export default withRouter(PaginationContainer);