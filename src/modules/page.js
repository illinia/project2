import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_PAGE = 'page/CHANGE_PAGE';
const INITIALIZE_PAGE = 'page/INITIALIZE_PAGE';

export const changePage = createAction(CHANGE_PAGE,
  ({ key, value }) => ({
    key,
    value,
  })
)

export const initializeForm = createAction(INITIALIZE_PAGE);

const initialState = {
  name: '',
  text: ''
}

const page = handleActions(
  {
    [CHANGE_PAGE]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft['text'] = value;
        draft['name'] = key;
      }),
    [INITIALIZE_PAGE]: state => initialState
  },
  initialState,
)

export default page;