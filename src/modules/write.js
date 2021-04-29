import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

const [POST, POST_SUCCESS, POST_FAILURE] = createRequestActionTypes(
  'write/POST',
)

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value
}));

export const initializeForm = createAction(INITIALIZE, form => form);
export const post = createAction(POST, ({ title, body, writer, password }) => ({
  title,
  body,
  writer,
  password,
}))

const postSaga = createRequestSaga(POST, postAPI.write);

export function* writeSaga() {
  yield takeLatest(POST, postSaga);
}

const initialState = {
  posts: {
    title: '',
    body: '',
    writer: '',
    password: '',
  },
}

const write = handleActions(
  {
    [INITIALIZE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [POST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    })
  },
  initialState
)

export default write;