import React, { useState, useEffect } from 'react';
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

  const [updateCheck, setUpdateCheck] = useState(false);

  const onPublish = () => {
    if (originalPostId) {
      const result = dispatch(
        updatePost({
          title,
          content,
          no: originalPostId,
          pass
        })
      )
      if (result.type === "write/UPDATE_POST") {
        setUpdateCheck(true);
      }
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
      if (updateCheck === true && post === 1) {
        alert("업데이트 완료")
        history.push(`/community/`);
      } else if (updateCheck === true && post === -1) {
        alert("비밀번호가 틀립니다.")
      } else if (updateCheck === true && post === 0) {
        alert("서버 에러.")
      } else if (updateCheck === true && post === -2) {
        alert("비밀번호를 입력해주세요.")
      }
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError, updateCheck])

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  )
}

export default withRouter(WriteActionButtonsContainer);