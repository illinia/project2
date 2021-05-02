import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';
import loading from './loading';
import post, { postSaga } from './post';
import responsive from './responsive';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  write,
  loading,
  post,
  responsive,
  posts
})

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;