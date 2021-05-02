import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE
] = createRequestActionTypes('write/WRITE_POST');

const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post)
export const writePost = createAction(WRITE_POST, ({ title, content, name, pass }) => ({
  title,
  content,
  name,
  pass
}))

export const updatePost = createAction(
  UPDATE_POST,
  ({ no, title, content }) => ({
    no,
    title,
    content,
  })
)

const writePostSaga = createRequestSaga(WRITE_POST, postAPI.writePost);
const updatePostSage = createRequestSaga(UPDATE_POST, postAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSage);
}

const initialState = {
  title: '',
  content: '',
  name: '',
  pass: '',
  post: null,
  postError: null,
  no: null,
}

const write = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: state => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      content: post.content,
      name: post.name,
      no: post.no,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    })
  },
  initialState
)

export default write;