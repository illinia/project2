import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_VALUE = 'responsive/CHANGE_VALUE';

export const changeValue = createAction(
  CHANGE_VALUE,
  value => value
)

const initialState = {
  value: '800',
}

const responsive = handleActions(
  {
    [CHANGE_VALUE]: (state, { payload: value }) =>
      produce(state, draft => {
        draft.value = value;
      })
  },
  initialState,
)

export default responsive;