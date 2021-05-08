import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { initializeSearch, listHospital, onSearchChange } from '../../modules/hospital';
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