import React, { useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, content, name, pass } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
    name: write.name,
    pass: write.pass
  }))
  const { responsive } = useSelector(responsive => responsive)

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      })
    )
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  useEffect(() => {
    return () => {
      dispatch(initialize());
    }
  }, [dispatch])

  return (
    <Editor
      responsive={responsive}
      onChange={onChange}
      onSubmit={onSubmit}
      title={title}
      content={content}
      name={name}
      pass={pass}
    />
  )
}

export default EditorContainer;