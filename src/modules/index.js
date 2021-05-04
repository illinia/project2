import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';
import loading from './loading';
import post, { postSaga } from './post';
import responsive from './responsive';
import posts, { postsSaga } from './posts';
import reply from './reply';

const rootReducer = combineReducers({
  write,
  loading,
  post,
  responsive,
  posts,
  reply
})

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;