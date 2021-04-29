import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_PAGE = 'page/CHANGE_PAGE';
const INITIALIZE_PAGE = 'page/INITIALIZE_PAGE';

export const changePage = createAction(
  CHANGE_PAGE,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
)

export const initializeForm = createAction(INITIALIZE_PAGE, form => form);

const initialState = {
  page: {
    name: 'main',
    text: '코로나 현황'
  }
}