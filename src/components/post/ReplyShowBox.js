/* eslint-disable eqeqeq */
import React from 'react';
import styled from 'styled-components';
import { replyDelete } from '../../lib/api/post';
import palette from '../../lib/styles/palette';
import { initialize } from '../../modules/write';
import PostActionButtons from './PostActionButtons';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editShow } from '../../modules/reply';
import { readPost } from '../../modules/post';
import ReplyWriteBox from './ReplyWriteBox';

const ReplyBoxBlock = styled.div``;

const ReplyShowBoxBlock = styled.div`
  width: 700px;
  min-height: 30px;
  display: grid;
  grid-template-columns: 200px auto;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 0.5rem;

  @media (max-width: 800px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 20px auto;
    justify-content: flex-start;
    align-items: center;
    min-height: 60px;
  }
`;

const ReplyDetailBox = styled.div`
  height: 20px;
  color: ${palette.gray[7]};
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 0.5rem;
  }
  @media (max-width: 600px) {
    &.first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    &.last-child {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }
`;

const ReplyInfoBox = styled.div`
  min-width: 150px;
  height: 20px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const ReplyContentBox = styled.div`
  width: 400px;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  word-break: break-all;

  @media (max-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 0;
  }
`;

const ReplyShowBox = (replyList, history) => {
  const dispatch = useDispatch();
  const { boardno, password, editShowState } = useSelector(({ write, reply, post }) => ({
    password: write.pass,
    boardno: post.post.board.no,
    editShowState: reply.editShow,
  }))
  const onRemove = async (replyNo) => {
    const pass = password
    try {
      const result = (await replyDelete({ replyNo, pass })).data
      console.log(result)
      if (result === -2) {
        alert("비밀번호를 입력해주세요")
        history.back();
      } else if (result === -1) {
        alert("비밀번호가 틀립니다.")
        history.back();
      } else if (result === 0) {
        console.log("서버 에러가 발생하였습니다.")
        history.push('/community');
      }
      dispatch(initialize());
      alert("삭제되었습니다.");
      console.log(boardno)
      dispatch(readPost(boardno))
    } catch (e) {
      console.log(e);
    }
  }

  const onEditShow = e => {
    if (e.target.value == editShowState) {
      dispatch(editShow(""))
      return
    }
    dispatch(editShow(e.target.value))
  }

  const initializeFunction = () => {
    dispatch(initialize());
  }

  return (
    <>
      {replyList.replyList.map(reply =>
        <>
          <ReplyBoxBlock key={reply.no}>
            <ReplyShowBoxBlock>
              <ReplyInfoBox>
                <ReplyDetailBox>{reply.name}</ReplyDetailBox>
                <ReplyDetailBox>|</ReplyDetailBox>
                <ReplyDetailBox>{new Date(reply.regDate).toLocaleDateString()}</ReplyDetailBox>
              </ReplyInfoBox>
              <ReplyContentBox>{reply.content}</ReplyContentBox>
            </ReplyShowBoxBlock>
            <PostActionButtons
              postId={reply.no}
              onRemove={onRemove}
              onEdit={onEditShow}
              initialize={initializeFunction}
              editShow={editShowState}
            />
          </ReplyBoxBlock>
          <ReplyWriteBox
            replyNo={reply.no}
            editShow={editShowState}
          />
        </>
      )}
    </>
  )
}

export default withRouter(ReplyShowBox);