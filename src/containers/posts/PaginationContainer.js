import React from 'react';
import Pagination from '../../components/posts/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location }) => {
  const { posts, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }))

  const { pagenum = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  if (!posts || loading) return null;

  return (
    <Pagination
      pagenum={parseInt(pagenum, 10)}
      posts={posts}
      pageCheck="community"
    />
  )
}

export default withRouter(PaginationContainer);