import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';
import loading from './loading';
import page from './page';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  write,
  loading,
  page,
  post,
})

export function* rootSaga() {
  yield all([writeSaga(), postSaga()]);
}

export default rootReducer;