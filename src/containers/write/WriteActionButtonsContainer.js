import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, content, name, pass, post, postError, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
    name: write.name,
    pass: write.pass,
    post: write.post,
    postError: write.postError,
    originalPostId: write.no
  }))

  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, content, no: originalPostId }))
      return;
    }
    dispatch(
      writePost({
        title,
        content,
        name,
        pass
      })
    )
  }

  const onCancel = () => {
    history.goBack();
  }

  useEffect(() => {
    if (post) {
      const { no } = post;
      history.push(`/community/post/${no}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError])

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  )
}

export default withRouter(WriteActionButtonsContainer);