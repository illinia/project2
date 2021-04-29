import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/write';
import { write } from '../../lib/api/post';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ write }) => ({
    form: write.posts
  }))

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'posts',
        key: name,
        value
      })
    )
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ])

  useEffect(() => {
    dispatch(initializeForm('posts'));
  }, [dispatch])

  return (
    <Editor
      onChange={onChange}
      onSubmit={onSubmit}
      form={form} />
  )
}

export default EditorContainer;