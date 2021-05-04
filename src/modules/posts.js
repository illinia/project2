import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/post';

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS')

const SEARCH_CHANGE = createRequestActionTypes('posts/SEARCH_CHANGE')

export const listPosts = createAction(
  LIST_POSTS,
  ({ pagenum, type, keyword }) => ({ pagenum, type, keyword }),
)

export const onSearchChange = createAction(
  SEARCH_CHANGE,
  ({ key, value }) => ({
    key,
    value
  }));

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts)
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
  type: '',
  keyword: '',
}

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SEARCH_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
)

export default posts;