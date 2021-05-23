import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { initialize, setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/post';
import { editShowInitialize } from '../../modules/reply';
import { initializeUpdate } from '../../modules/replyUpdate';

// 게시글 상세보기
const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, password } = useSelector(({ write, post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    password: write.pass,
  }));

  // 게시글 상세보기 페이지가 바뀌었을 때 댓글 업데이트 창 보여짐 초기화, 댓글 업데이트 내용 초기화
  useEffect(() => {
    dispatch(readPost(postId));
    dispatch(editShowInitialize())
    dispatch(initializeUpdate())
  }, [dispatch, postId])

  // 게시글 수정버튼 클릭했을 때 해당 게시글 내용을 수정 페이지에 불러오는 기능
  const onEdit = () => {
    dispatch(setOriginalPost(post.board))
    history.push('/community/write')
  }

  // 게시글 삭제. 따로 리덕스 사가를 안 만들어서 삭제 api를 불러온 후 가져온 결과 데이터로
  // 성공, 실패 여부 처리
  const onRemove = async (no) => {
    const pass = password
    try {
      const result = (await removePost({ no, pass })).data;
      console.log(result)
      if (result === -2) {
        alert("비밀번호를 입력해주세요.")
        history.back();
      } else if (result === -1) {
        alert("비밀번호가 틀립니다.");
        history.back();
      } else if (result === 0) {
        console.log("서버 에러가 발생하였습니다.")
        history.push('/community');
      }
      dispatch(initialize());
      alert("삭제되었습니다.")
      history.push('/community');
    } catch (e) {
      console.log(e);
    }
  }

  // 업데이트 취소시 업데이트 내용들 초기화 기능
  const initializeFunction = () => {
    dispatch(initialize());
  }

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        <PostActionButtons
          postId={postId}
          onEdit={onEdit}
          onRemove={onRemove}
          initialize={initializeFunction}
        />
      }
    />
  )
}

export default withRouter(PostViewerContainer);