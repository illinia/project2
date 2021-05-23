import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Pagination from '../../components/posts/Pagination';

// 병원 페이징 컨테이너
const PaginationContainer = ({ location, pathName }) => {
  const { list, loading } = useSelector(({ hospital, loading }) => ({
    list: hospital.list,
    loading: loading['hospital/LIST_HOSPITAL'],
  }))

  // 페이지 기본값은 1로 지정
  const { pagenum = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  // 페이지를 불러올 수 없을 때나 로딩중일땐 null을 리턴하여 에러 방지
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