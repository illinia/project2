import { createAction, handleActions } from 'redux-actions';

// 댓글 업데이트
const INITIALIZE = 'replyUpdate/INITIALIZE';
const CHANGE_FIELD = 'replyUpdate/CHANGE_FIELD';

export const initializeUpdate = createAction(INITIALIZE);
export const changeFieldUpdate = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}))

const initialState = {
  boardno: '',
  content: '',
  pass: '',
}

const replyUpdate = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
)

export default replyUpdate;