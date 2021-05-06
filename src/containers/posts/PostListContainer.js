import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { initializeSearch, listPosts, onSearchChange } from '../../modules/posts';
import qs from 'qs';
import { initializeUpdate } from '../../modules/replyUpdate';
import { editShowInitialize } from '../../modules/reply';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, type, keyword } = useSelector(
    ({ posts, loading }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      type: posts.type,
      keyword: posts.keyword,
    })
  )

  const SearchChange = e => {
    const { name, value } = e.target;
    dispatch(
      onSearchChange({
        key: name,
        value,
      })
    )
  }

  const onSubmit = () => {
    const query = qs.stringify({ type, keyword })
    return `/community?${query}`
  }

  useEffect(() => {
    const { pagenum, type, keyword } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
    dispatch(listPosts({ pagenum, type, keyword }))
    dispatch(initializeSearch())
  }, [dispatch, location.search])

  const [searchButtonToggle, setSearchButtonToggle] = useState(false);

  useEffect(() => {
    setSearchButtonToggle((keyword !== "" && type !== "") ? true : false
    )
  }, [keyword, type])

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      SearchChange={SearchChange}
      onSubmit={onSubmit}
      searchButtonToggle={searchButtonToggle}
    />
  )
}

export default withRouter(PostListContainer);
