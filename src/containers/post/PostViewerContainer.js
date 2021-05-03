import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { initialize, setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/post';

const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, password } = useSelector(({ write, post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    password: write.pass,
  }));

  useEffect(() => {
    dispatch(readPost(postId));

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId])

  const onEdit = () => {
    dispatch(setOriginalPost(post))
    history.push('/community/write')
  }

  const onRemove = async (no) => {
    const pass = password
    try {
      const result = (await removePost({ no, pass })).data;
      console.log(result)
      if (result === -2) {
        alert("비밀번호를 입력해주세요.")
        history.back();
      } else if (result === -1) {
        alert("비밀번호가 틀립니다.");
        history.back();
      } else if (result === 0) {
        console.log("서버 에러가 발생하였습니다.")
        history.push('/community');
      }
      dispatch(initialize());
      alert("삭제되었습니다.")
      history.push('/community');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        <PostActionButtons
          postId={postId}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      }
    />
  )
}

export default withRouter(PostViewerContainer);