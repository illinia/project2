import React, { useEffect, useState } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, content, name, pass, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
    name: write.name,
    pass: write.pass,
    originalPostId: write.no,
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

  useEffect(() => {
    return () => {
      dispatch(initialize());
    }
  }, [dispatch])

  const [originalPostIdCheck, setOriginalPostId] = useState(false);

  useEffect(() => {
    if (originalPostId) {
      setOriginalPostId(true)
    } else if (!originalPostId) {
      setOriginalPostId(false)
    }
  }, [originalPostId])


  return (
    <Editor
      responsive={responsive}
      onChange={onChange}
      title={title}
      content={content}
      name={name}
      pass={pass}
      originalPostIdCheck={originalPostIdCheck}
    />
  )
}

export default EditorContainer;