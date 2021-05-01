import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, content, name, pass, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
    name: write.name,
    pass: write.pass,
    post: write.post,
    postError: write.postError,
  }))

  const onPublish = () => {
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
      history.push(`/community/${no}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError])

  return (
    <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />
  )
}

export default withRouter(WriteActionButtonsContainer);