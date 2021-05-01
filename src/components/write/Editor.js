import React from 'react';
import styled from 'styled-components';
import Menu from '../../common/Menu';
import WriteActionButtonsContainer from '../../containers/write/WriteActionButtonsContainer';
import palette from '../../lib/styles/palette';


const EditorBlock = styled.div`
  padding: 2rem 2rem 0.5rem 2rem;
  width: 800px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TitleInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  width: 100%;
`;

const DetailInput = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[4]};
  display: flex;
  height: 50px;
  align-items:center;
`;

const WriterInput = styled.input`
  width: 200px;
  outline: none;
  border: none;
  font-size: 1.125rem;
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
`;

const Editor = ({ onChange, onSubmit, form }) => {
  return (
    <>
      <Menu>게시글 작성하기</Menu>
      <form onSubmit={onSubmit}>
        <EditorBlock>
          <TitleInput
            name="title"
            placeholder="제목을 입력하세요"
            onChange={onChange}
            value={form.title}
          />
          <BodyInput
            name="content"
            placeholder="내용을 입력하세요"
            onChange={onChange}
            value={form.content}
          />
          <DetailInput>
            <WriterInput
              name="name"
              placeholder="이름을 입력하세요"
              onChange={onChange}
              value={form.name}
            />
            <WriterInput
              name="pass"
              placeholder="비밀번호를 입력하세요"
              type="password"
              onChange={onChange}
              value={form.pass}
            />
            <WriteActionButtonsContainer />
          </DetailInput>
        </EditorBlock >
      </form>
    </>
  )
}

export default Editor;