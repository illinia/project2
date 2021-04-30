import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_PAGE = 'page/CHANGE_PAGE';
const INITIALIZE_PAGE = 'page/INITIALIZE_PAGE';
const READ_PAGE = 'page/READ_PAGE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const changePage = createAction(CHANGE_PAGE,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
)

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value
}));

export const initializeForm = createAction(INITIALIZE_PAGE, form => form);

const initialState = {
  page: {
    name: '',
    text: ''
  }
}

const page = handleActions(
  {
    [CHANGE_PAGE]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form]['text'] = value;
        draft[form]['name'] = key;
      }),
    [INITIALIZE_PAGE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
)

export default page;