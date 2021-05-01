import React, { useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ write }) => ({
    form: write
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

  useEffect(() => {
    dispatch(initialize('posts'));
  }, [dispatch])

  return (
    <Editor
      onChange={onChange}
      onSubmit={onSubmit}
      form={form} />
  )
}

export default EditorContainer;