import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ReplyActionButtonsContainer from '../../containers/reply/ReplyActionButtonsContainer';
import palette from '../../lib/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, replyPosts } from '../../modules/reply';
import { withRouter } from 'react-router';


const ReplyWriteBoxBlock = styled.div`
  width: 700px;
  min-height: 100px;
  display: grid;
  grid-template-columns: minmax(0, auto) 150px 150px 70px;
  grid-template-rows: 40px 40px;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 460px) {
    grid-template-columns: minmax(0, auto) 2fr 2fr 1fr;
    transition: 0.3s ease-in-out;
    Button {
      transition: 0.3s ease-in-out;
      width: 50px;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  input:nth-child(1) {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }

  input:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  input:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  Button {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  input {
    outline: none;
    border: none;
    font-size: 1rem;
  }
`;

const ReplyWriteContentBox = styled.input`
  width: 100%;
  height: 40px;
`;

const ReplyWriteDetailBox = styled.input`
  width: 100%;
  height: 40px;
`;

const ReplySubmitButton = styled(ReplyActionButtonsContainer)`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.cyan[5]};

  &:hover {
    background: ${palette.cyan[4]};
  }
`;


const ReplyWriteBox = ({ history }) => {
  const dispatch = useDispatch();
  const { boardno, content, name, pass, post, error } = useSelector(({ reply, post }) => ({
    boardno: post.post.board.no,
    content: reply.content,
    name: reply.name,
    pass: reply.pass,
    post: reply.post,
    error: reply.error,
  }))

  const onChangeField = e => {
    const { value, name } = e.target
    dispatch(
      changeField({
        key: name,
        value,
      })
    )
  }

  const onPublish = () => {
    const value = boardno
    dispatch(
      changeField({
        key: "boardno",
        value,
      })
    )
    dispatch(
      replyPosts({
        boardno,
        name,
        content,
        pass,
      })
    )
    if (post === 1) {
      alert("댓글이 등록되었습니다.")
      history.push(`/community/post/${boardno}`)
    } else if (post === 0) {
      alert("댓글등록이 실패하였습니다.")
      console.log(error)
    } else if (post === -1) {
      alert("내용, 이름, 비밀번호는 필수입니다.")
    }
  }

  useEffect(() => {
    return () => {
      dispatch(initialize());
    }
  }, [dispatch])

  return (
    <ReplyWriteBoxBlock>
      <ReplyWriteContentBox
        name="content"
        placeholder="댓글을 입력해 주세요."
        onChange={onChangeField}
        value={content}
      />
      <ReplyWriteDetailBox
        name="name"
        placeholder="이름"
        onChange={onChangeField}
        value={name}
      />
      <ReplyWriteDetailBox
        name="pass"
        type="password"
        placeholder="비밀번호"
        onChange={onChangeField}
        value={pass}
      />
      <ReplyActionButtonsContainer cyan onClick={onPublish} />
    </ReplyWriteBoxBlock>
  )
}

export default withRouter(ReplyWriteBox);