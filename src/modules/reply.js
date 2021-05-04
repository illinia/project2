import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'reply/INITIALIZE';
const CHANGE_FIELD = 'reply/CHANGE_FIELD';
const [
  REPLY_POSTS,
  REPLY_POSTS_SUCCESS,
  REPLY_POSTS_FAILURE,
] = createRequestActionTypes('reply/LIST_POSTS');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}))
export const replyPosts = createAction(
  REPLY_POSTS, ({ boardno, name, content, pass }) => ({
    boardno,
    name,
    content,
    pass,
  }))

const replyPostSaga = createRequestSaga(REPLY_POSTS, postsAPI.writeReply)

export function* replySaga() {
  yield takeLatest(REPLY_POSTS, replyPostSaga);
}

const initialState = {
  post: null,
  error: null,
  boardno: '',
  content: '',
  name: '',
  pass: '',
}

const reply = handleActions(
  {
    [REPLY_POSTS]: state => ({
      ...state,
      post: '',
      error: '',
    }),
    [REPLY_POSTS_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [REPLY_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    })
  },
  initialState,
)

export default reply;