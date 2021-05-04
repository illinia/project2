// import { createAction, handleActions } from 'redux-actions';
// import createRequestSaga, {
//   createRequestActionTypes,
// } from '../lib/createRequestSaga';
// import { takeLatest } from 'redux-saga/effects';

// const [
//   REPLY_POSTS,
//   REPLY_POSTS_SUCCESS,
//   REPLY_POSTS_FAILURE,
// ] = createRequestActionTypes('reply/LIST_POSTS');

// export const replyPosts = createAction(
//   REPLY_POSTS,
//   ({})
// )

// const replyPostSaga = createRequestSaga(REPLY_POSTS,)
// export function* replySaga() {
//   yield takeLatest(REPLY_POSTS, replyPostSaga);
// }

// const initialState = {

// }

// const reply = handleActions(
//   {
//     [REPLY_POSTS_SUCCESS]: (state, { payload: }) => ({
//       ...state,

//     }),
//     [REPLY_POSTS_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       error,
//     })
//   },
//   initialState,
// )

// export default reply;