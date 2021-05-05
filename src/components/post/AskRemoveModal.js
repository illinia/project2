import React from 'react';
import AskModal from '../common/AskModal'
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/write';

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  const dispatch = useDispatch();
  const { pass } = useSelector(({ write }) => ({
    pass: write.pass
  }))

  const onChangeFunction = e => {
    const { value, name } = e.target
    dispatch(
      changeField({
        key: name,
        value
      })
    )
  }

  return (
    <AskModal
      visible={visible}
      title="삭제하기"
      description="정말 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
      pass={pass}
      onChangeFunction={onChangeFunction}
    />
  )
}

export default AskRemoveModal;