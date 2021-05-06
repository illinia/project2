/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReplyActionButtonsContainer from '../../containers/reply/ReplyActionButtonsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/reply';
import { changeFieldUpdate, initializeUpdate } from '../../modules/replyUpdate';
import { writeReply } from '../../lib/api/post';
import { updateReply } from '../../lib/api/post';
import { readPost } from '../../modules/post';


const ReplyWriteBoxBlock = styled.div`
  width: 700px;
  min-height: 100px;
  display: ${props =>
    props.editShowBoolean ? "grid" : "none"
  };
  grid-template-columns: minmax(0, auto) 150px 150px 70px;
  grid-template-rows: 40px 40px;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    grid-template-columns: minmax(0, auto) 2fr 2fr 1fr;
    Button {
      width: 50px;
      height: 30px;
      font-size: 1rem;
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

// const ReplySubmitButton = styled(ReplyActionButtonsContainer)`
//   width: 70px;
//   height: 30px;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   font-weight: bold;
//   padding: 0.25rem 1rem;
//   color: white;
//   outline: none;
//   cursor: pointer;
//   background: ${palette.cyan[5]};

//   &:hover {
//     background: ${palette.cyan[4]};
//   }
// `;


const ReplyWriteBox = ({ replyNo }) => {
  const dispatch = useDispatch();
  const { boardno, content, name, pass, error, editShow, contentUpdate, passUpdate } = useSelector(({ reply, post, replyUpdate }) => ({
    boardno: post.post.board.no,
    content: reply.content,
    name: reply.name,
    pass: reply.pass,
    error: reply.error,
    editShow: reply.editShow,
    contentUpdate: replyUpdate.content,
    passUpdate: replyUpdate.pass,
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

  const onChangeFieldUpdate = e => {
    const { value, name } = e.target
    dispatch(
      changeFieldUpdate({
        key: name,
        value,
      })
    )
  }

  const onPublish = async () => {
    const value = boardno
    if (inputReplyNoCheck) {
      dispatch(
        changeField({
          key: "boardno",
          value,
        })
      )
      const result = (await writeReply({
        boardno,
        name,
        content,
        pass,
      })).data;
      if (result === 1) {
        alert("댓글이 등록되었습니다.")
        dispatch(readPost(boardno))
        dispatch(initialize());
        dispatch(initializeUpdate());
      } else if (result === 0) {
        alert("댓글등록이 실패하였습니다.")
        console.log(error)
        dispatch(readPost(boardno))
      } else if (result === -1) {
        alert("내용, 이름, 비밀번호를 입력해주세요.")
      }
    } else if (replyNo !== undefined) {
      dispatch(
        changeFieldUpdate({
          key: "boardno",
          value,
        })
      )
      const result = (await updateReply({
        replyNo,
        contentUpdate,
        passUpdate,
      })).data;
      console.log(result)
      if (result === 1) {
        alert("댓글이 수정되었습니다.")
        dispatch(readPost(boardno))
        dispatch(initialize());
        dispatch(initializeUpdate());
      } else if (result === 0) {
        alert("댓글수정이 실패하였습니다.")
        console.log(error)
        dispatch(readPost(boardno))
      } else if (result === -1) {
        alert("비밀번호를 다시 확인해주세요.")
      } else if (result === -2) {
        alert("내용, 비밀번호를 입력해주세요.")
      }
    }
  }

  const [editShowBoolean, setEditShowBoolean] = useState(false)
  const inputReplyNoCheck = replyNo === undefined ? true : false;

  useEffect(() => {
    if (inputReplyNoCheck) {
      setEditShowBoolean(true)
    } else if (editShow == replyNo) {
      setEditShowBoolean(true)
    } else if (editShow != replyNo) {
      dispatch(initializeUpdate())
      setEditShowBoolean(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replyNo, editShow, inputReplyNoCheck])

  return (
    <ReplyWriteBoxBlock editShowBoolean={editShowBoolean}>
      <ReplyWriteContentBox
        name="content"
        placeholder="댓글을 입력해 주세요."
        onChange={inputReplyNoCheck ? onChangeField : onChangeFieldUpdate}
        value={inputReplyNoCheck ? content : contentUpdate}
      />
      {replyNo === undefined ?
        <ReplyWriteDetailBox
          name="name"
          placeholder="이름"
          onChange={onChangeField}
          value={name}
        />
        :
        ""
      }
      <ReplyWriteDetailBox
        name="pass"
        type="password"
        placeholder="비밀번호"
        onChange={inputReplyNoCheck ? onChangeField : onChangeFieldUpdate}
        value={inputReplyNoCheck ? pass : passUpdate}
      />
      <ReplyActionButtonsContainer cyan onClick={onPublish} />
    </ReplyWriteBoxBlock>
  )
}

export default React.memo(ReplyWriteBox);