import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import WriteActionButtonsContainer from '../../containers/write/WriteActionButtonsContainer';
import palette from '../../lib/styles/palette';

const EditorBlock = styled.div`
  padding: 2rem 2rem 0.5rem 2rem;
  width: 800px;
  margin: 0 auto;

  input {
    padding-left: 0;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TitleInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  // border-bottom: 1px solid ${palette.gray[4]};
  width: 100%;
`;

const DetailInput = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[4]};
  display: grid;
  min-height: 50px;
  align-items:center;
  grid-template-columns: auto auto auto;

  @media (max-width: 600px) {
    height: 150px;
    grid-template-rows: 50px 50px 50px;
    grid-template-columns: 100%;
  }
`;

const WriterInput = styled.input`
  width: 200px;
  outline: none;
  border: none;
  font-size: 1.125rem;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 1rem;
    height: 50px;

    & + & {
      border-top: 1px solid ${palette.gray[4]};
    }
  }
`;

const BodyInput = styled.textarea`
  font-size: 1.125rem;
  width: 100%;
  min-height: 320px;
  line-height: 1.5;
  outline: none;
  border: none;
  margin-top: 1rem;
  resize: none;

  @media (max-width: 600px) {
    min-height: 160px;
  }
`;

const Editor = ({ responsive, onChange, onSubmit, title, content, name, pass }) => {
  return (
    <>
      <Menu>게시글 작성하기</Menu>
      <form onSubmit={onSubmit}>
        <EditorBlock>
          <TitleInput
            name="title"
            placeholder="제목을 입력하세요"
            onChange={onChange}
            value={title}
          />
          <BodyInput
            name="content"
            placeholder="내용을 입력하세요"
            onChange={onChange}
            value={content}
          />
          <DetailInput>
            <WriterInput
              name="name"
              placeholder="이름을 입력하세요"
              onChange={onChange}
              value={name}
            />
            <WriterInput
              name="pass"
              placeholder="비밀번호를 입력하세요"
              type="password"
              onChange={onChange}
              value={pass}
            />
            <WriteActionButtonsContainer />
          </DetailInput>
        </EditorBlock >
      </form>
    </>
  )
}

export default Editor;