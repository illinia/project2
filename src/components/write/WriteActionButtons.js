import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';


const WriteActionButtonsBlock = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  width: 60px;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onPublish}>
        {isEdit ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  )
}

export default WriteActionButtons;