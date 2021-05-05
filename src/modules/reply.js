import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'reply/INITIALIZE';
const CHANGE_FIELD = 'reply/CHANGE_FIELD';
const EDIT_SHOW = 'reply/EDIT_SHOW';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}))
export const editShow = createAction(EDIT_SHOW, value => value)

const initialState = {
  post: null,
  error: null,
  boardno: '',
  content: '',
  name: '',
  pass: '',
  editShow: '',
}

const reply = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [EDIT_SHOW]: (state, { payload: value }) => ({
      ...state,
      editShow: value,
    })
  },
  initialState,
)

export default reply;