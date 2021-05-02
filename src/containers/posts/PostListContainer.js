import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import qs from 'qs';

const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector(
    ({ posts, loading }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS']
    })
  )

  useEffect(() => {
    const { pagenum, type, keyword } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
    dispatch(listPosts({ pagenum, type, keyword }))
  }, [dispatch, location.search])

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
    />
  )
}

export default withRouter(PostListContainer);
